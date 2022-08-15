import React from "react";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { resetIceCreamCart } from "../../store";
import Input from "../UI/Input";
import { SmallOutlineButton } from "../../Globalstyles";
import httpService from "../../services/htmlService.js"




const Shipping = ({ modalStatus, allItemsPrice,orderDone }) => {
  const dispatch = useDispatch();
  const selectedCartItems = useSelector((state) => {
    return state.iceCreamCart.items;
  });
  const date = new Date().toDateString("he-IL");
  const time = new Date().toLocaleTimeString("he-IL");
  const orderTime = `${date} ${time}`;

  
  const iceCream = selectedCartItems.map((iceCream) => ({
    iceCream: iceCream.id,
    
    amount: iceCream.amount,
  }));


  const submitOrder = async (e) => {
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
    const iceCreamObject = {
      userDetails,
      items: [...iceCream],
      orderTotalPrice:allItemsPrice,
      
    };
    
    await httpService.postIceCreamFromCart(iceCreamObject);
    await dispatch(resetIceCreamCart([]));
    await modalStatus();
  };

  return (
    <Modal modalStatus={modalStatus}>
      <form onSubmit={submitOrder}>
        <h3>Billing Address</h3>
        <Input
          type="text"
          id="fname"
          name="firstname"
          placeholder="John M. Doe"
          iconClass="fa fa-user"
          lableName="First name"
         
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          iconClass="fa faenvelope"
          lableName="Email"
          
        />
        <Input
          type="text"
          id="adr"
          name="address"
          placeholder="542 W. 15th Street"
          iconClass="fa fa-address-card-o"
          lableName="Address"
    
        />
        <Input
          type="text"
          id="city"
          name="city"
          placeholder="New York"
          iconClass="fa fa-institution"
          lableName="City"
        
        />
        <Input type="number" id="zip" name="zip" placeholder="10001"
          lableName="Zip" required />
        <SmallOutlineButton>Finsh Order</SmallOutlineButton>
      </form>
    </Modal>
  );
};

export default Shipping;
