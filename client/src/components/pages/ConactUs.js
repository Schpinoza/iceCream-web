import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Input from "../UI/Input";
import { OutlineButton, Container } from "../../Globalstyles";
import ContactUs from "../../assets/contact-us.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = async () => {
    if (name && email && message) {
      const serviceId = "service_q4v7djf";
      const templateId = "template_kv1ni7o";
      const userId = "5UTJ-RdZkKZr5LMN7";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs.send(serviceId, templateId, templateParams, userId);
      await ((response) => console.log(response));
      await ((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    }
  };

  return (
    <ConactContainer>
      <Form id="contact-form" autocomplete="on">
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
        <ContactTextArea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></ContactTextArea>
        <Button onClick={submit}>Send Message</Button>

        <DisplySpan className={emailSent ? "visible" : null}>
          Thank you for your message, we will be in touch in no time!
        </DisplySpan>
      </Form>
    </ConactContainer>
  );
};

export default Contact;

const ConactContainer = styled(Container)`
  background: url(${ContactUs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 725px;
`;
const Form = styled.div`
  position: relative;
  top: 20%;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  height: 50%;
  max-width: 500px;
  width: 50%;
  color: #fff;
  font-family: sans-serif;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.3),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

const ContactInput = styled(Input)`
  width: 100%;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const ContactTextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  height: 100px;
  resize: vertical;
`;
const Button = styled(OutlineButton)`
  width: 100%;
  padding: 10px;
  border: 0;
  cursor: pointer;
  background: #fca253;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: uppercase;
`;
const DisplySpan = styled.span`
  display: none;
  text-align: center;

  &.visible {
    display: block;
  }
`;
