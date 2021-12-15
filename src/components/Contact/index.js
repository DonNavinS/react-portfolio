import React, { useState, useRef } from "react";
import { init, sendForm } from "emailjs-com";
init("user_UC3rhqJHC4MA5dqCjw4m7");

function Contact() {
  const form = useRef();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChangeName(e) {
    setFormInfo({ ...formInfo, name: e.target.value });
  }
  function handleChangeEmail(e) {
    setFormInfo({ ...formInfo, email: e.target.value });
  }
  function handleChangeMessage(e) {
    setFormInfo({ ...formInfo, message: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendForm("service_0ic8i6w", "template_u3q8vyj", form.current).then(
      (result) => {
        console.log("SUCCESS");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div>
      <h1 className="title">Let's get in touch</h1>
      <form
        className="contact-form"
        id="contact-form"
        ref={form}
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="contact-input"
            name="from_name"
            type="text"
            defaultValue={formInfo.name}
            placeholder="Your Name"
            onChange={handleChangeName}
          />
        </div>
        <div>
          <input
            className="contact-input"
            type="email"
            name="from_name"
            defaultValue={formInfo.email}
            placeholder="Your Email"
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <textarea
            className="contact-message contact-input"
            name="message"
            defaultValue={formInfo.message}
            placeholder="Message"
            onChange={handleChangeMessage}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
