import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const organizationId = localStorage.getItem("organizationId");
  const history = useHistory();

  async function handleNewFunction(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      amount
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: organizationId
        }
      });

      history.push("/profile");
    } catch (err) {
      alert(`Error, try again later`);
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Anna Hero" />

          <h1>New case</h1>
          <p>Describe in detail to find a hero to solve it</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Back to Profile
          </Link>
        </section>

        <form onSubmit={handleNewFunction}>
          <input
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
