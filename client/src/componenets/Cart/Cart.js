import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

import {Images} from "../../Images";
import styled from "styled-components";

const TotalPrice = styled.li`
text-align:center;
font-weight: bold;
font-size: 1.25em;
color: #00ff00;

`
const Ul = styled.ul`
  max-width: 100%;
  margin: auto;
  padding: 1rem;
  list-style-type: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: rgba(255, 253, 208, 0.4);
`;

const OrderButton = styled.button`
  font-family: "Open Sans";
  color: #ffc0cb !important;
  text-transform: uppercase;
  background: #e0e0dc;
  padding: 20px;
  border: 4px solid #ffc0cb !important;
  border-radius: 10px;
  text-decoration: none;
  width: 50%;
  display: block;
  transition: all 0.3s ease 0s;
  text-align: center;
  margin: auto;

  &:hover {
    color: #20bf6b !important;
    border-radius: 50px;
    border-color: #20bf6b !important;
    transition: all 0.6s ease 0s;
  }
`;
const Cart = ({modalStatus,orderTotalPrice}) => {


  const selectedCartIceCream = useSelector((state) => {
    return state.iceCreamCart.iceCreams;
  });

  let allItemsPrice = 0
  selectedCartIceCream.map((item)=>{
  const itemAmount = Number(item.amount)
  const itemPrice = Number(item.price)
  allItemsPrice = (itemAmount)*(itemPrice)+allItemsPrice
return allItemsPrice
})

useEffect(()=>{
orderTotalPrice(allItemsPrice)
},[allItemsPrice])



return (
  <>
      <Ul>
        {selectedCartIceCream.map((chosenIceCream) => {
          const imgName = chosenIceCream.name.replace(/\s/g, '')
          return (
            <CartItems
              key={chosenIceCream._id}
              img={Images[imgName]}
              chosenIceCream={chosenIceCream}
            />
          );
        })}
        <TotalPrice>{selectedCartIceCream.length > 0 && `Total Cart Price : ${allItemsPrice}$`}</TotalPrice>
        <li>{selectedCartIceCream.length > 0 && <OrderButton onClick={modalStatus}>Order</OrderButton>}</li>
      </Ul>
    </>
  );
};

export default Cart;
