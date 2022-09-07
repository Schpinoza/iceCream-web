import React from "react";
import AvilableIceCream from "./AvilableIceCream";
import img from "../../assets/mainicecreamshop.jpg";
import styled from "styled-components";

const IceCream = () => {
  return (
    <>
      <Img>
        <ImgText>
          Pick your ice cream!
          <br /> Then Enjoy it.
        </ImgText>
      </Img>
      <AvilableIceCream />
    </>
  );
};

export default IceCream;

const ImgText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  font-size: 340%;
  color: #272727;
`;
const Img = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 700px;
  text-align: center;
`;
