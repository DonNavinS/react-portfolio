import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // I tried writing this code as shown below but it wouldn't work so I made 3 separate functions and it worked that way
  //   function handleChange(e) {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   }

  function handleChangeName(e) {
    setForm({ ...form, name: e.target.value });
  }
  function handleChangeEmail(e) {
    setForm({ ...form, email: e.target.value });
  }
  function handleChangeMessage(e) {
    setForm({ ...form, message: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <input
            id="name"
            type="text"
            defaultValue={form.name}
            placeholder="Your Name"
            onChange={handleChangeName}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            defaultValue={form.email}
            placeholder="Your Email"
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <textarea
            className="contact-message"
            id="message"
            defaultValue={form.message}
            placeholder="Message"
            onChange={handleChangeMessage}
          />
        </div>
        <button className="buttons" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
