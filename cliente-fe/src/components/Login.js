import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("Inicio de sesión exitoso ✅");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (
    <div>
      <h3>Iniciar Sesión</h3>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Entrar</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;