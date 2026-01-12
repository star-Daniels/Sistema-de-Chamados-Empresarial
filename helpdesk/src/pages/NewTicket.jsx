import "./style/NewTicket.css";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NewTicket() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "tickets"), {
        title,
        description,
        status: "aberto",
        userId: user.uid,
        userEmail: user.email,
        createdAt: serverTimestamp(),
      });

      navigate("/dashboard");
    } catch (err) {
      setError("Erro ao abrir chamado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="new-ticket-container">
      <h2>Abrir chamado</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título do problema"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Descreva o problema"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Abrir chamado"}
        </button>
      </form>
    </div>
  );
}
