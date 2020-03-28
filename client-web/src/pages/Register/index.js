import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const history = useHistory();

  async function handlerRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      city,
      district
    };

    try {
      const response = await api.post("organizations", data);

      alert(`Yout new ID: ${response.data.id}`);
      history.push("/");
    } catch (err) {
      alert(`Error, try again later`);
    }
  }

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

        <form onSubmit={handlerRegister}>
          <input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="District"
              style={{ width: 150 }}
              value={district}
              onChange={e => setDistrict(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
