import React from 'react'
import AvilableIceCream from './AvilableIceCream'
import img from "../../assets/mainicecreamshop.jpg"
import styled from 'styled-components'

const Text = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  font-size: 340%;
  color:#272727;

`
const ImgText = styled.div`
background-image: url(${img});
background-size:cover;
background-position: center;
width:100%;
height:700px;
text-align:center;
`
const IceCream = () => {
  return (
    <div >
        <ImgText>
          <Text>
          Pick your ice cream!<br/> Then Enjoy it.
          </Text>
        </ImgText>
        {/* <BackgroundImage src={img} alt="ice-cream" /> */}
    <AvilableIceCream/>
    </div>
  )
}

export default IceCream