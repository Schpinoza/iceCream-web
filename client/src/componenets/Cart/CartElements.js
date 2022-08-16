import styled from "styled-components";

const CartButtonSection = styled.div`
  width: 90%;
  display: block;
  float: left;
`;
const ItemCart = styled.li`
  background-color: rgba(220,215,225, 0.7);
  display: block;
  width: 50%;
  vertical-align: middle;
  margin: 1rem auto;
  padding: 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-style: inset;
  border-width: 2px;
  border-shadow: 10px;
  border-radius: 30px;
  height: auto;
  @media (max-width: 650px) {
    width: 310px;
  }
`;

const InfoWrap = styled.div`
  display: table;
  width: 100%;
`;
const CartSection = styled.div`
  display: table-cell;
  vertical-align: middle;
`;
const ItemName = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 0.075em;
`;
const Price = styled.p`
  font-size: 0.85em;
  color: #777777;
`;
const PriceAmount = styled.p`
  padding-right: 40px;
  text-align: right;
  font-weight: bold;
  font-size: 1.25em;
  color: #20bf6b;
`;
const Img = styled.img`
  display: block;
  text-align: center;
  margin: auto;
  padding: auto;
  width: 65%;
`;
const RemoveIceCreamButton = styled.button`
  font-weight: bold;
  background: #e0e0e0;
  padding: 0.5em;
  font-size: 0.75em;
  display: inline-block;
  border-radius: 60%;
  line-height: 0.85;
  float: right;
  @include transition(all, 0.25s, linear);
  &:hover {
    background: #f30;
  }
`;

export {
  RemoveIceCreamButton,
  Img,
  PriceAmount,
  Price,
  ItemName,
  ItemCart,
  CartSection,
  InfoWrap,
  CartButtonSection,
};
