import React from "react";

import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Anna Hero" />

          <h1>Register now</h1>
          <p>Find people who want to help your Organization</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Back
          </Link>
        </section>

        <form>
          <input placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Phone" />
          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="District" style={{ width: 150 }} />
          </div>
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
