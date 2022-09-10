import React from "react";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { resetIceCreamCart } from "../../store/cartHelper";
import { shownModal } from "../../store/modal";
import Input from "../UI/Input";
import { SmallOutlineButton } from "../../Globalstyles";
import APIRequests from "../../services/APIRequests.js";

const Shipping = () => {
  const dispatch = useDispatch();
  const selectedOrder = useSelector((state) => {
    return state.iceCreamHelper.iceCreams;
  });

  const allItemsPrice = useSelector((state) => {
    return state.orderPrice.orderTotalPrice;
  });

  const date = new Date().toDateString("he-IL");
  const time = new Date().toLocaleTimeString("he-IL");
  const orderTime = `${date} ${time}`;

  const iceCream = selectedOrder.map((iceCream) => ({
    iceCream: iceCream._id,
    amount: iceCream.amount,
  }));

  const submitOrder = async (e) => {
    const { fname, email, address, zip, city } = e.target;
    await e.preventDefault();
    const userDetails = {
      orderer: fname.value,
      email: email.value,
      address: address.value,
      city: city.value,
      zipcode: +zip.value,
      date: orderTime,
    };
    const order = {
      userDetails,
      items: [...iceCream],
      orderTotalPrice: allItemsPrice,
    };

    await APIRequests.sendOrder(order);
    await dispatch(resetIceCreamCart([]));
    await dispatch(shownModal(false));
  };

  return (
    <Modal>
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
          id="address"
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
        <Input
          type="number"
          id="zip"
          name="zip"
          placeholder="10001"
          lableName="Zip"
          required
        />
        <SmallOutlineButton>Finsh Order</SmallOutlineButton>
      </form>
    </Modal>
  );
};

export default Shipping;
