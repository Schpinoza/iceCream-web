
import { useSelector } from 'react-redux'
import Navbar from './componenets/Navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./componenets/pages/Home"
import IceCream from './componenets/IceCream/IceCream';
import Footer from './componenets/UI/Footer';
import Cart from './componenets/Cart/Cart';
import Shipping from './componenets/shipping/Shipping';
import OrderList from './componenets/OrderList/OrderList';
import GlobalStyles from './Globalstyles';
import ConactUs from './componenets/pages/ConactUs';



const App=()=>{

	const modalOn = useSelector((state)=>{
		return state.modal.modalStatus
	  })
	
return (
	<>
	<BrowserRouter>
	<GlobalStyles/>
	    <>{modalOn && <Shipping/>}</>
	<Navbar />
	<Routes>
		<Route path='/iceCream' element={<IceCream/>}/>
		<Route path='/' element={<Home/>} />
		<Route path='/ConactUs' element={<ConactUs/>} />
		<Route path='/cart' element={<Cart/>} ></Route>
		<Route path='/admin-order-list' element={<OrderList/>}/>
	</Routes>
	</BrowserRouter>
	<Footer/>	
</>
);
}

export default App;
