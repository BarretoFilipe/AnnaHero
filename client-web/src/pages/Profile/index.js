import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const organizationId = localStorage.getItem("organizationId");
  const organizationName = localStorage.getItem("organizationName");
  const history = useHistory();

  useEffect(() => {
    api
      .get("profiles", {
        headers: {
          Authorization: organizationId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [organizationId]);

  async function hendleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: organizationId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Error, try again later");
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Anna Hero" />
        <span>Welcome {organizationName}</span>
        <Link className="button" to="/incident/new">
          New case
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Cases</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Case:</strong>
            <p>{incident.title}</p>

            <strong>Description:</strong>
            <p>{incident.description}</p>

            <strong>Amount:</strong>
            <p>
              {Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
              }).format(incident.amount)}
            </p>

            <button
              onClick={() => hendleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
