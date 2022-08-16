import { useState } from "react";
import styled from "styled-components";
import { Images } from "../../../Images";
import CartIcon from "../../Cart/CartIcon";
import {SmallOutlineButton} from "../../../Globalstyles";
import { useDispatch } from "react-redux";
import { addIceCream} from "../../../store";

const Container = styled.form`
  
  border: 2px solid;
  border-color:rgba(140, 192, 222, 0.25);
  padding: 0.5rem;
  border-radius: 10%;
  margin: auto;
`;
const AmountInput = styled.select`
border-radius:15px;
box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
border:none;
&:active{
  border:none;
}

`;

const Lable = styled.label`
  display:block;
  font-weight:bold;

`
const Img = styled.img`
  max-height: auto;
  max-width: 75%;
  border-radius:15%;
`;


const ProdactName =styled.div`
font-weight:bold;
font-size:1.5rem;
letter-spacing: 1.5px;
`

function IceCreamItem({ iceCream }) {
  const dispatch = useDispatch()
  const { name, price, alt, supplyAmount } = iceCream
  const [selectedAmount, setSelectedAmount] = useState("none");
  const [stockStatus, setStockStatus] = useState(0);
  const imgName = name.replace(/\s/g, "");
  const updateSupply =(supplyAmount-stockStatus)
  
  
  const handleChange = (e) => {
    setSelectedAmount(+e.target.value);
  };
  const addIceCreamToCart = (iceCream, amount) => {
    const item={
      ...iceCream,
      amount:amount
    }
    dispatch(addIceCream(item))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStockStatus((prev)=>{
      const totalReduceAmount = prev + selectedAmount
      return totalReduceAmount
    });
    if (supplyAmount >= selectedAmount) {
      addIceCreamToCart(iceCream,selectedAmount);
      setSelectedAmount("none");
    }
  };


  return (
    <div>
      <Container onSubmit={handleSubmit}>
        <ProdactName>{name}</ProdactName>
        <Img src={Images[imgName]} alt={alt} />
        <div>{`price: ${price}$`}</div>
        <Lable htmlFor="amount">amount: </Lable>
        <AmountInput
          name="itemAmount"
          id="amount"
          onChange={handleChange}
          value={selectedAmount}
        >
          <option
            style={supplyAmount >= 0 && { color: "red" }}
            value="none"
            disabled
            hidden
          >
            {supplyAmount <= 0 ? "Out of stock" : "Select an Option"}
          </option>
          {updateSupply >= 1 && <option value="1">1</option>}
          {updateSupply >= 2 && <option value="2">2</option>}
          {updateSupply >= 3 && <option value="3">3</option>}
          {updateSupply >= 4 && <option value="4">4</option>}
          {updateSupply >= 5 && <option value="5">5</option>}
        </AmountInput>
        {selectedAmount !== "none" && <SmallOutlineButton><CartIcon/></SmallOutlineButton>}
      </Container>
    </div>
  );
}

export default IceCreamItem;
