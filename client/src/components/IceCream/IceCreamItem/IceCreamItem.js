import { useState } from "react";
import styled from "styled-components";
import { Images } from "../../../Images";
import CartIcon from "../../Cart/CartIcon";
import { SmallOutlineButton } from "../../../Globalstyles";
import { useDispatch } from "react-redux";
import { addIceCream } from "../../../store/cartHelper";

function IceCreamItem({ iceCream }) {
  const dispatch = useDispatch();
  const { name, price, alt, supplyAmount } = iceCream;
  const [selectedAmount, setSelectedAmount] = useState("none");
  const [stockStatus, setStockStatus] = useState(0);
  const imgName = name.replace(/\s/g, "");
  const updateSupply = supplyAmount - stockStatus;

  const handleChange = (e) => {
    setSelectedAmount(+e.target.value);
  };
  const addIceCreamToCart = (iceCream, amount) => {
    const chosenItem = {
      ...iceCream,
      amount,
    };
    dispatch(addIceCream(chosenItem));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStockStatus((prev) => prev + selectedAmount);
    if (supplyAmount >= selectedAmount) {
      addIceCreamToCart(iceCream, selectedAmount);
      setSelectedAmount("none");
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ProdactName>{name}</ProdactName>
      <Img src={Images[imgName]} alt={alt} />
      <GridContainer>
        <Price>{`price: ${price}$`}</Price>
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
            {supplyAmount <= 0 ? "Out of stock" : "Choose amount"}
          </option>
          {updateSupply >= 1 && <option value="1">1</option>}
          {updateSupply >= 2 && <option value="2">2</option>}
          {updateSupply >= 3 && <option value="3">3</option>}
          {updateSupply >= 4 && <option value="4">4</option>}
          {updateSupply >= 5 && <option value="5">5</option>}
        </AmountInput>
      </GridContainer>
      {selectedAmount !== "none" && (
        <SmallOutlineButton>
          <CartIcon />
        </SmallOutlineButton>
      )}
    </Container>
  );
}

export default IceCreamItem;

const Container = styled.form`
  border-radius: 10px;

  padding: 8px;
  margin: auto;
`;
const AmountInput = styled.select`
  margin: auto;
  height: 50%;
  border-radius: 15px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  border: none;
  &:active {
    border: none;
  }
`;

const Lable = styled.label`
  padding: 20px;
  font-weight: bold;
`;
const Img = styled.img`
  margin: 8px;
  max-height: auto;
  max-width: 75%;
  border-radius: 15%;
`;

const ProdactName = styled.div`
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 1.5px;
`;

const Price = styled.div`
  padding: 20px;
  text-align: center;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
