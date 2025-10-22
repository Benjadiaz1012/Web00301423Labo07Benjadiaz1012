import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  const handleProtected = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/protected", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(res.data.message + " ✅");
    } catch (err) {
      setMessage("Token inválido o sesión expirada ❌");
    }
  };

  return (
    <div>
      <h3>Panel Protegido</h3>
      <button onClick={handleProtected}>Ver datos protegidos</button>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;