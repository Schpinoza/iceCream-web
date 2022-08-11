import React from "react";
import styled from "styled-components";

const Footerdiv = styled.footer`
  display: block;
  text-align: center;
  background-color: rgba(255, 253, 208, 0.5);
  padding: 1.5rem;
  color: rgba(0, 0, 0, 0.4);
`;

const Footer = () => {
  return <Footerdiv>copyright 2022</Footerdiv>;
};

export default Footer;
