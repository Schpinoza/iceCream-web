import styled from "styled-components";

const CardDiv = styled.div`
  text-align: center;
  max-width: 100%;
  margin: auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  background-color: rgb(220, 220, 220);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

const Card = ({ children }) => {
  return <CardDiv>{children}</CardDiv>;
};

export default Card;
