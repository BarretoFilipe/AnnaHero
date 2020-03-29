import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { FiLogIn } from "react-icons/fi";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("organizationId", id);
      localStorage.setItem("organizationName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Login fail, try again");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Anna Hero" />

        <form onSubmit={handleLogin}>
          <h1>Welcome</h1>

          <input
            placeholder="Your ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Login
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Sign Up! It's quick and easy.
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
