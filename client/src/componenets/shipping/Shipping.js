import React from "react";
import Modal from "../UI/Modal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { resetIceCreamCart } from "../../store";

const axios = require("axios");

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
`;
const Input = styled.input`
  width: 90%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Shipping = ({ modalStatus, allItemsPrice }) => {
  const dispatch = useDispatch();
  const selectedCartItems = useSelector((state) => {
    return state.iceCreamCart.items;
  });
  const date = new Date().toDateString("he-IL");
  const time = new Date().toLocaleTimeString("he-IL");
  const orderTime = `${date} ${time}`;
  //need to make an arry that old a id and amount of the ice cream that been order
  
  const iceCream = selectedCartItems.map((iceCream) => ({
    iceCream: iceCream.id,
    
    amount: iceCream.amount,
  }));
  const postIceCreamFromCart = async (userDetails) => {
    try {
      const iceCreamObject = {
        userDetails,
        items: [...iceCream],
        orderTotalPrice:allItemsPrice,
        
      };
      await axios.post("/v1/order", iceCreamObject);
      console.log("click");
      console.log(iceCreamObject);
    } catch (error) {
      console.log(error.message);
    }
    dispatch(resetIceCreamCart([]));
    modalStatus();
  };

  const submitHandler = async (e) => {
    const { fname, email, adr: address, zip, city } = e.target;
    await e.preventDefault();
    const userDetails = {
      orderer: fname.value,
      email: email.value,
      adrees: address.value,
      city: city.value,
      zipcode: +zip.value,
      date: orderTime,
    };
    
    await postIceCreamFromCart(userDetails);
  };

  return (
    <Modal modalStatus={modalStatus}>
      <form onSubmit={submitHandler}>
        <h3>Billing Address</h3>
        <Label htmlFor="fname">
          <i className="fa fa-user"></i> Full Name
        </Label>
        <Input
          type="text"
          id="fname"
          name="firstname"
          placeholder="John M. Doe"
          required
        />
        <Label htmlFor="email">
          <i className="fa fa-envelope"></i> Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          required
        />
        <Label htmlFor="adr">
          <i className="fa fa-address-card-o"></i> Address
        </Label>
        <Input
          type="text"
          id="adr"
          name="address"
          placeholder="542 W. 15th Street"
          required
        />
        <Label htmlFor="city">
          <i className="fa fa-institution"></i> City
        </Label>
        <Input
          type="text"
          id="city"
          name="city"
          placeholder="New York"
          required
        />
        <Label htmlFor="zip">Zip</Label>
        <Input type="number" id="zip" name="zip" placeholder="10001" required />
        <div>{`Total Order Price : ${allItemsPrice}`}</div>
        <button>Finish Order</button>
      </form>
    </Modal>
  );
};

export default Shipping;
