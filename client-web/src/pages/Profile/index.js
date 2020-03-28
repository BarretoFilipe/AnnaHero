import React from "react";

import { Link } from "react-router-dom";

import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Anna Hero" />
        <span>Welcome</span>

        <Link className="button" to="/incident/new">
          New case
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Cases</h1>
      <ul>
        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>Description text</p>

          <strong>Value:</strong>
          <p>120,00 €</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>Description text</p>

          <strong>Value:</strong>
          <p>120,00 €</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>Description text</p>

          <strong>Value:</strong>
          <p>120,00 €</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>Description text</p>

          <strong>Value:</strong>
          <p>120,00 €</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}