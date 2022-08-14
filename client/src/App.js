import React, { useState} from 'react';
import { Provider } from 'react-redux'
import Navbar from './componenets/Navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./componenets/pages/Home"
import store from './store';
import IceCream from './componenets/IceCream/IceCream';
import Footer from './componenets/UI/Footer';
import Cart from './componenets/Cart/Cart';
import Shipping from './componenets/shipping/Shipping';
import OrderList from './componenets/OrderList/OrderList';
import GlobalStyles from './Globalstyles';
import ConactUs from './componenets/pages/ConactUs';



function App() {
	const [modalOn,setModalOn]=useState(false);
	const [allItemsPrice,setAllItemsPrice] =useState()
	// const dispatch = useDispatch();
	// const selectedCartItems = useSelector((state) => {
	//   return state.iceCreamCart.items;
	// });

	const handleTotalPrice =(totalPrice)=>{
		setAllItemsPrice(totalPrice)
	}
return (
	<Provider store = {store}>
	<GlobalStyles/>
	    <>{modalOn && <Shipping modalStatus = {()=> setModalOn(false) } allItemsPrice={allItemsPrice}/>}</>
	<BrowserRouter>
	<Navbar />
	<Routes>
		<Route path='/iceCream' element={<IceCream/>}/>
		<Route path='/' element={<Home/>} />
		<Route path='/ConactUs' element={<ConactUs/>} />
		<Route path='/cart' element={<Cart modalStatus = {()=> setModalOn(true) } orderTotalPrice={handleTotalPrice}/>} ></Route>
		<Route path='/admin-order-list' element={<OrderList/>}/>
	</Routes>
	</BrowserRouter>
	<Footer/>	
	</Provider>
);
}

export default App;
