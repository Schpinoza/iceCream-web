import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import IceCream from "./components/IceCream/IceCream";
import Footer from "./components/UI/Footer";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/shipping/Shipping";
import OrderList from "./components/OrderList/OrderList";
import GlobalStyles from "./Globalstyles";
import ConactUs from "./components/pages/ConactUs";

const App = () => {
  const modalOn = useSelector((state) => {
    return state.modal.modalStatus;
  });

  return (
    <>
      <GlobalStyles />
      <>{modalOn && <Shipping />}</>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/iceCream" element={<IceCream />} />
          <Route path="/" element={<Home />} />
          <Route path="/ConactUs" element={<ConactUs />} />
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/adminOrderList" element={<OrderList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
