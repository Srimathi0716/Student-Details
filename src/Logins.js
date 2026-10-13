import React from 'react'

import { useState, useEffect } from "react";
import { Link } from "react-router";

function Logins() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Login | MyPortfolio";
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    if (email && password) {
      setMessage("Demo login submitted successfully!");
    }
  }

  return (
    <section className="section">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn" type="submit">
          Login
        </button>

        <p>{message}</p>
        <Link to="/">Back to Home</Link>
      </form>
    </section>
  );
}

export default Logins;