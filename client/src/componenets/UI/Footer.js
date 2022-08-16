import React from "react";
import styled from "styled-components";

const Footerdiv = styled.footer`
  position:;
  bottom:0%;
  margin: 0;
  display: block;
  text-align: center;
  background-color: rgba(0,0, 0, 0.5);
  padding: 1.5rem;
  color: rgba(0, 0, 0, 0.4);
`;

const Footer = () => {
  return <Footerdiv>copyright 2022</Footerdiv>;
};

export default Footer;
