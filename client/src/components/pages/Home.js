import React from "react";
import styled, { keyframes } from "styled-components";
import AboutUs from "../../assets/AboutUs.webp";
import FindUsImage from "../../assets/placePhoto.webp";
import { MenuLinkBtn } from "../Navbar/NavbarElements";
import { OutlineButton, SmallOutlineButton } from "../../Globalstyles";


const Home = () => {
  return (
    <Container>
      <ContainerImg>
        <SideDivLeft>
          <h1>Who we are?</h1>
          <p>
            it all started 35 yeas ago. we open our shop from all we had at the
            mooment. with all our passion of ice cream and ice cream makeing,
            and from our passion to creat the best ice cream we ate. You should
            enjoy it to!
          </p>
        </SideDivLeft>
        <ArrowContainer>
          <ArrowSliding>
            <Arrow></Arrow>
          </ArrowSliding>
          <DelayOne>
            <Arrow></Arrow>
          </DelayOne>
          <DelayTwo>
            <Arrow></Arrow>
          </DelayTwo>
          <DelayThree>
            <Arrow></Arrow>
          </DelayThree>
        </ArrowContainer>
        <SideDivRight>
          <MenuLinkBtn to="/iceCream">
            <OrderOutlineButton primary>Order Here</OrderOutlineButton>
          </MenuLinkBtn>
        </SideDivRight>
      </ContainerImg>
      <OurMaking>
        <h1>A NEW STANDARD IN ICE CREAM</h1>
        We build ice creams completely from scratch using a unique recipe honed
        and perfected over more than 35 years by our passion . Our ice creams
        have a uniquely smooth texture and buttercream body, with bright flavor
        and clean finish. We’re here to set new standards for ice cream classics
        and to create our own. At Jeni’s, you’ll find flavors inspired by our
        curiosities—art, history, pop culture, and beyond—that simply don’t
        exist anywhere else.
      </OurMaking>
      <FindUsContainer>
        <FindUsImg />
        <FindUs>
          <h2>Find Us</h2>
          <p>
            It takes a community to make and share ice creams the way we do. We
            truly believe our differences are our strengths. It’s about each of
            you bringing your awesomeness in — your whole selves. And together
            we make something greater as a sum.
          </p>
          <SmallOutlineButton>Our Location</SmallOutlineButton>
        </FindUs>
      </FindUsContainer>
    </Container>
  );
};

export default Home;

const SideDivLeft = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 15px 15px rgba(136, 136, 136, 0.5);
  width: 25%;
  float: left;
  margin-top: 300px;
  margin-left: 6em;
  text-align: left;
`;

const SideDivRight = styled.div`
float:right;
margin-right:180px;
margin-top:375px;
@media(max-width:1500px){

  margin-right:110px;
}
@media(max-width:1000px){
  margin-top:370px;
  margin-right:50px;
}

`;

const webkitKeyframesSlide = keyframes`
&::-webkit-slide{
	  0% { opacity:0; transform: translateX(-15vw); }
	 20% { opacity:1; transform: translateX(-9vw); }
	 80% { opacity:1; transform: translateX(9vw); }
	100% { opacity:0; transform: translateX(15vw); }
}
  `;

const keyframesSlide = keyframes`
    0% { opacity:0; transform: translateX(-15vw); }
 20% { opacity:1; transform: translateX(-9vw); }
 80% { opacity:1; transform: translateX(9vw); }
100% { opacity:0; transform: translateX(15vw); }
 `;
const Container = styled.div`
  text-aligh: center;
`;

const ContainerImg = styled.div`
  background: url(${AboutUs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 736px;
`;
const ArrowContainer = styled.div``;

const Arrow = styled.div`
  margin-top: 300px;
  
  width: 5vw;
  height: 5vw;
  border: 1vw solid;
  border-color: white transparent transparent white;
  transform: rotate(135deg);
`;

const ArrowSliding = styled.div`
  position: absolute;
  right: 43%;
  top: 150px;
  -webkit-animation: ${webkitKeyframesSlide} 4s linear infinite;
  animation: ${keyframesSlide} 4s linear infinite;
`;

const DelayOne = styled(ArrowSliding)`
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
`;
const DelayTwo = styled(ArrowSliding)`
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
`;
const DelayThree = styled(ArrowSliding)`
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
`;
const OurMaking = styled.div`
  text-align: center;
  width: 50%;
  margin: auto;
  padding: 100px;
  font-weight: bold;
  h1 {
    font-size: 3.5rem;
    padding: 20px;
  }
`;
const FindUsContainer = styled.div`
  display: flex;
  background-color: rgba(136, 136, 136, 0.1);
`;
const FindUsImg = styled.div`
  background: url(${FindUsImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  width: 50%;
`;

const FindUs = styled.div`
  margin: auto;
  width: 25%;
  text-align: left;

  h2 {
    font-size: 5em;
    padding: 20px;
  }
`;

const OrderOutlineButton = styled(OutlineButton)`
`;

