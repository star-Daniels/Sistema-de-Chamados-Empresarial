import "./style/Dashboard.css";
import { useEffect, useState } from "react";
import { 
  collection, 
  query, 
  onSnapshot, 
  orderBy, 
  deleteDoc, 
  doc, 
  updateDoc 
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "tickets"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setTickets(list);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  async function handleDelete(id) {
    const confirm = window.confirm("Tem certeza que deseja excluir este chamado?");
    if (!confirm) return;

    await deleteDoc(doc(db, "tickets", id));
  }

  async function handleStatus(id, newStatus) {
    await updateDoc(doc(db, "tickets", id), {
      status: newStatus
    });
  }

  if (loading) {
    return <p className="center">Carregando chamados...</p>;
  }

  return (
    <div className="dashboard-container">
      <header>
        <h2>Todos os chamados</h2>
        <div>
          <Link to="/new-ticket">Novo chamado</Link>
          <button onClick={logout}>Sair</button>
        </div>
      </header>

      {tickets.length === 0 && (
        <p className="center">Nenhum chamado encontrado</p>
      )}

      {tickets.map((ticket) => (
        <div className="ticket-card" key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>

          <span className={`status ${ticket.status}`}>
            {ticket.status}
          </span>

          <div className="actions">
            <select
              value={ticket.status}
              onChange={(e) => handleStatus(ticket.id, e.target.value)}
            >
              <option value="aberto">Aberto</option>
              <option value="andamento">Em andamento</option>
              <option value="fechado">Fechado</option>
            </select>

            <button 
              className="delete" 
              onClick={() => handleDelete(ticket.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
