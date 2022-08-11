import 
{
  RemoveIceCreamButton,
  Img,
  PriceAmount,
  Price,
  ItemName,
  ItemCart,
  CartSection,
  InfoWrap,
  CartButtonSection,
} from "./CartElements"





function CartItems({ name, price, img, alt, amount, removeItem,product: item }) {

  const totalItemPrice = price * amount;


  return (
    <ItemCart>
      <InfoWrap>
        <CartSection>
          <CartButtonSection>
            <RemoveIceCreamButton onClick={()=>{removeItem(item)}}>
              {amount>1 ? "-1" : "X"}
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
