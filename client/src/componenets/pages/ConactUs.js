import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Input from "../UI/Input";
const FormContainer = styled.div`
  position: absolute;
  background: #4d60a8;
  color: #fff;
  font-family: sans-serif;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

const ContactInput = styled(Input)`
            width: 100%;
            border: 0;
            padding: 10px 20px;
            box-sizing: border-box;
            margin-bottom: 15px;
`

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);


  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_q4v7djf";
      const templateId = "template_kv1ni7o";
      const userId = name;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <FormContainer id="contact-form">
      <ContactInput
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ContactInput
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>Send Message</button>

      <span className={emailSent ? "visible" : null}>
        Thank you for your message, we will be in touch in no time!
      </span>
    </FormContainer>
  );
};

export default Contact;
