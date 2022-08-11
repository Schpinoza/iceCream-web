import { useState, useEffect } from "react";
import {
  Container,
  TableName,
  TableHeader,
  DivColOne,
  DivColTwo,
  DivColThree,
  DivColFour,
} from "./OrderListElements";
import OrderListRow from "./OrderListRow"
const axios = require("axios");

const OrderList = () => {
  const [allOrders, setAllOrders] = useState([]);

  async function getOrderList() {
    try {
      const response = await axios.get("v1/order/admin-order-list");
      const data = await response.data;
      console.log(data)
      setAllOrders(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <Container>
      <TableName>Orders List</TableName>
      <ul>
        <TableHeader>
          <DivColOne>Order Id</DivColOne>
          <DivColTwo>Customer Name</DivColTwo>
          <DivColThree>Amount Due</DivColThree>
          <DivColFour>Order Details</DivColFour>
        </TableHeader>
        {allOrders.map((order) => {
          return (
            <OrderListRow
              key={order._id}
              orderID={order._id}
              orderDetails={order.userDetails}
              orderTotalPrice={order.orderTotalPrice}
              orderItems={order.items}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default OrderList;
