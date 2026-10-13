import React from 'react'

import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        form
      );

      if (response.status === 201) {
        setStatus("Message submitted successfully!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to submit. Please try again.");
    }
  }

  return (
    <section className="section">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button className="btn" type="submit">
          Send Message
        </button>

        <p>{status}</p>
      </form>
    </section>
  );
}

export default Contact;