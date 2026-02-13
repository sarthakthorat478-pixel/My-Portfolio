import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#00bcd4",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Contact;
