import { useState } from "react";
import {
  TableRowIce,
  TableRow,
  DivColOne,
  DivColTwo,
  DivColThree,
  DivColFour,
  DivColClose,
  DivColFourClick,
  DetailsContainer,
  DivHead,
  TableRowHeader,
} from "./OrderListElements";

function OrderListRow({ order }) {
  const {
    _id: orderID,
    userDetails: orderDetails,
    items: orderItems,
    orderTotalPrice,
  } = order;
  const [showDetails, setShowDetails] = useState(false);

  const ordererName = orderDetails.orderer;
  const email = orderDetails.email;
  const adrees = orderDetails.adrees;
  const date = orderDetails.date;
  const zipcode = orderDetails.zipcode;

  const iceCreamDetails = orderItems.map((item) => {
    const iceCreamflavor = item.iceCream.name;
    const amount = item.amount;
    const price = item.iceCream.price;

    return (
      <TableRowIce>
        <DivColOne data-label="Ice Cream Type">{iceCreamflavor}</DivColOne>
        <DivColTwo data-label="Price">{`${price} $`}</DivColTwo>
        <DivColThree data-label="Amount">{amount}</DivColThree>
      </TableRowIce>
    );
  });
  const detailsOn = () => {
    setShowDetails(true);
  };
  const detailsOff = () => {
    setShowDetails(false);
  };

  return (
    <>
      <TableRow>
        <DivColOne data-label="Order ID">{orderID}</DivColOne>
        <DivColTwo data-label="Customer Name">{ordererName}</DivColTwo>
        <DivColThree data-label="Amount">{orderTotalPrice}</DivColThree>
        <DivColFourClick data-label="Order Details" onClick={detailsOn}>
          Click For Details
        </DivColFourClick>
      </TableRow>
      {showDetails && (
        <DetailsContainer>
          <DivHead>Order Details</DivHead>
          <TableRowHeader>
            <DivColOne>Email</DivColOne>
            <DivColTwo>Adrees</DivColTwo>
            <DivColThree>Date</DivColThree>
            <DivColFour>Zipcode</DivColFour>
          </TableRowHeader>
          <TableRow>
            <DivColOne data-label="Email">{email}</DivColOne>
            <DivColTwo data-label="Adrees">{adrees}</DivColTwo>
            <DivColThree data-label="Date">{date}</DivColThree>
            <DivColFour data-label="Zipcode">{zipcode}</DivColFour>
          </TableRow>
          <TableRowHeader>
            <DivColOne>Flavor</DivColOne>
            <DivColTwo>Price</DivColTwo>
            <DivColThree>Amount</DivColThree>
          </TableRowHeader>
          {iceCreamDetails}
          <DivColClose onClick={detailsOff}>Close Details</DivColClose>
        </DetailsContainer>
      )}
    </>
  );
}

export default OrderListRow;
