import { useDispatch } from "react-redux";
import { removeIceCream } from "../../store";
import {
  RemoveIceCreamButton,
  Img,
  PriceAmount,
  Price,
  ItemName,
  ItemCart,
  CartSection,
  InfoWrap,
  CartButtonSection,
} from "./CartElements";

function CartItems({ img, chosenIceCream }) {
  const { name, price, alt, amount } = chosenIceCream;
  const totalItemPrice = price * amount;
  const dispatch = useDispatch();
  const handleClick = (iceCream) => {
    dispatch(removeIceCream(iceCream));
  };

  return (
    <ItemCart>
      <InfoWrap>
        <CartSection>
          <CartButtonSection>
            <RemoveIceCreamButton
              onClick={() => {
                handleClick(chosenIceCream);
              }}
            >
              {amount > 1 ? "-1" : "X"}
            </RemoveIceCreamButton>
          </CartButtonSection>
          <ItemName>{name}</ItemName>
          <Img src={img} alt={alt} />
          <Price>{`${amount} x $${price}`}</Price>
          <PriceAmount>{` Total of: ${totalItemPrice} $`}</PriceAmount>
        </CartSection>
      </InfoWrap>
    </ItemCart>
  );
}

export default CartItems;
