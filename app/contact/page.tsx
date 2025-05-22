"use client";
import React, { useState } from "react";

function Contact() {
  // Type alias for cleaner code
  type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  type FormEvent = React.FormEvent<HTMLFormElement>;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !desc.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const data = { name, email, desc };
    const res = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const message = `Error: ${res.status}`;
      throw new Error(message);
    } else {
      alert("THanks for your feedback");
      setName("");
      setEmail("");
      setDesc("");
    }

    return await res.json();
  };

  const handleChange = (e: InputEvent) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className="container">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ marginTop: "15px" }}>
          <label htmlFor="name" className="form-label">
            Enter your name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            name="desc"
            style={{ height: "160px" }}
            value={desc}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="floatingTextarea2">Enter your consern</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "15px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
