import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Autenticación con React + Express</h2>
      <div>
        <button onClick={() => setPage("signup")}>Registro</button>
        <button onClick={() => setPage("login")}>Iniciar Sesión</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </div>
      <hr />
      {page === "signup" && <Signup />}
      {page === "login" && <Login />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;