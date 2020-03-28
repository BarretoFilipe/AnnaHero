import React from "react";

import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
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

        <form>
          <input placeholder="Title" />
          <textarea placeholder="Description" />
          <input placeholder="Amount" />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
