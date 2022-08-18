
import React from "react";
import styled, { keyframes } from "styled-components";
import AboutUs from "../../assets/AboutUs.webp";
import FindUsImage from "../../assets/placePhoto.webp";
import { MenuLinkBtn } from "../Navbar/NavbarElements";
import { OutlineButton, SmallOutlineButton } from "../../Globalstyles";

const SideDivLeft = styled.div`
  padding:30px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 15px 15px rgba(136, 136, 136, 0.5);
  width: 25%;
  float: left;
  margin-top: 10.5em;
  margin-left: 6em;
  text-align: left;
`;

const SideDivRight = styled.div`
  width: 35%;
  
  position: absolute;
  left: 65%;
  top: 50%;
  margin-right: 1em;
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
const ArrowAnim = styled.div``;

const Arrow = styled.div`
  width: 5vw;
  height: 5vw;
  border: 1vw solid;
  border-color: black transparent transparent black;
  transform: rotate(135deg);
`;

const ArrowSliding = styled.div`
  position: absolute;
  right: 43%;
  top: 50%;
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
        <ArrowAnim>
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
        </ArrowAnim>
        <SideDivRight>
          <MenuLinkBtn to="/iceCream">
            <OutlineButton primary>Order Here</OutlineButton>
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



























// import React from "react";
// import styled from "styled-components";
// import { useState } from "react";
// import { MenuLinkBtn } from "../Navbar/NavbarElements";
// import {OutlineButton} from '../../Globalstyles';
// import topImg from "../../assets/ice-home-page-1.jpg"
// import bottomImgOne from "../../assets/ice-home-page-2.jpg"
// import bottomImgTwo from "../../assets/ice-home-page-3.jpg"

// const Container = styled.div`
//   height: 825px;
//   background: linear-gradient(27.7deg, #8cc0de 50%, #faf0d7 50%);
//   width:100%;
//   text-align: center;
// `;

// const SideDiv = styled.div`
//     display:block;
//   width: 25%;
//   float: left;
//   text-align:center;
//   justify-content:center;
//      margin-left:3em; 
//     h1{
//      margin-top:9em; 
//     }
//   @media(max-width: 991px){
//     width:70%;

//   }
//   @media(min-width: 1235px){
//     width: 20%;

//   }
// `;


// const Img = styled.div`
// position:absolute;
// background-size:100%;
// height:350px;
// width:30%;
// background-repeat: no-repeat;
// border: 5px solid white;
// border-radius:5px;
// @media(max-width:991px){
//   display: none;
// }
// @media(min-width: 1235px){
//     width:30%;
//     height:450px;

//   }
// `
// const UpperImg = styled(Img)`
// background-image: url(${topImg});
// left:50%;
// top:20%;
// z-index:1;
// @media(min-width: 1235px){
//     width:25%;
//   left:52.5%
//   }
// `
// const UnderImgOne = styled(Img)`
// background-image: url(${bottomImgOne});
// transform: rotate(25deg);
// left:64%;
// top:25%;

// `
// const UnderImgTwo = styled(Img)`
// background-image: url(${bottomImgTwo});
// transform: rotate(-25deg);
// left:36%;
// top:25%;
// `












// const Home = () => {
//   const [newData, setNewData] = useState("");
//   // 	useEffect(() => {
//   // 		getRequset()
//   // 	}, []);
//   // const getRequset = async ()=>{
//   // 	const response = await axios.get('/api');
//   // 	const data = await response.data
//   // 	setNewData(data);
//   // }
//   return (
//     <Container>
//       <SideDiv>
//         <h1>Who we are?</h1>
//           it all started 35 yeas ago. we open our shop from all we had at the
//           mooment. with all our passion of ice cream and ice cream makeing, and
//           from our passion to creat the best ice cream we ate.<br/>You should enjoy it to!
//         <MenuLinkBtn to="/iceCream">
//           <OutlineButton primary>Order Here</OutlineButton>
//         </MenuLinkBtn>
//       </SideDiv>

//         <UpperImg/>
//         <UnderImgOne/>
//         <UnderImgTwo/>
//     </Container>
//   );
// };

// export default Home;
