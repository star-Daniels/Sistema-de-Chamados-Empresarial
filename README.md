# 📌 Sistema de Chamados – React + Firebase

Sistema web de chamados (help desk) desenvolvido em **React** com **Firebase**, permitindo que usuários se cadastrem, façam login e abram chamados de suporte.

Projeto focado em aprendizado prático de front-end moderno, autenticação, banco em tempo real e organização de projeto.

---

## 🚀 Tecnologias utilizadas

- ⚛️ React (Vite)
- 🔥 Firebase  
  - Authentication  
  - Firestore Database  
- 🌐 React Router DOM  
- 🎨 CSS puro  
- 🧩 Lucide-react (ícones)

---

## ✨ Funcionalidades

- ✅ Cadastro de usuário  
- ✅ Login e logout  
- ✅ Autenticação com Firebase  
- ✅ Proteção de rotas (Private Routes)  
- ✅ Cadastro com:  
  - Nome  
  - Email  
  - Senha  
  - Confirmação de senha  
  - Visualização de senha (👁️)  
- ✅ Salvamento de usuários no Firestore  
- ⏳ Sistema de chamados (em desenvolvimento)

---

## 🧠 Conceitos aplicados

- Context API (AuthContext)  
- Rotas privadas  
- Componentização  
- Organização de pastas  
- Integração com Firebase  
- Validações de formulário  

---

## 📁 Estrutura básica do projeto

src/
├── contexts/
│ └── AuthContext.jsx
├── firebase/
│ └── firebaseConfig.js
├── pages/
│ ├── Login/
│ ├── Register/
│ └── Dashboard/
├── routes/
│ ├── AppRoutes.jsx
│ └── PrivateRoute.jsx


---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

git clone https://github.com/seu-usuario/seu-repositorio.git

2. Entre na pasta
cd seu-repositorio

3. Instale as dependências
npm install

4. Configure o Firebase

Crie o arquivo:

src/firebase/firebaseConfig.js


E adicione:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE",
  messagingSenderId: "SEU_MESSAGING",
  appId: "SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

5. Rodar o projeto
npm run dev

🎯 Objetivo do projeto

Projeto desenvolvido para fins de estudo, com foco em:

React na prática

Integração com Firebase

Construção de sistemas reais


👨‍💻 Autor

Daniel Francisco
Formado em Desenvolvimento de Sistemas – SENAI
