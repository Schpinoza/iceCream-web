import { useDispatch } from "react-redux";
import { removeIceCream } from "../../store/cartHelper";
import {
  IceCreamRemovalButton,
  Img,
  SumAmountPrice,
  Price,
  ItemName,
  ItemCart,
  CartSection,
  CartButtonSection,
} from "./CartElements";

function CartItems({ img, chosenIceCream }) {
  const { name, price, alt, amount } = chosenIceCream;
  const sumAmountPrice = price * amount;
  const dispatch = useDispatch();
  const handleClick = (iceCream) => {
    dispatch(removeIceCream(iceCream));
  };

  return (
    <ItemCart>
      <CartSection>
        <CartButtonSection>
          <IceCreamRemovalButton
            onClick={() => {
              handleClick(chosenIceCream);
            }}
          >
            {amount > 1 ? "-1" : "X"}
          </IceCreamRemovalButton>
        </CartButtonSection>
        <ItemName>{name}</ItemName>
        <Img src={img} alt={alt} />
        <Price>{`${amount} x $${price}`}</Price>
        <SumAmountPrice>{` Total of: ${sumAmountPrice} $`}</SumAmountPrice>
      </CartSection>
    </ItemCart>
  );
}

export default CartItems;
