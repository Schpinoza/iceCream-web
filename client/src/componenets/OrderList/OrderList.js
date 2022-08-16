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
import htmlService from "../../services/htmlService";


const OrderList = () => {
  const [allOrders, setAllOrders] = useState([]);

  const orderedList= async ()=>{

    const orders =await htmlService.getOrderList()
    setAllOrders(orders)
  }



  useEffect(()=>{
    orderedList()
  },[])

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
