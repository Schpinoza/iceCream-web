import React from "react";
import styled, { keyframes } from "styled-components";
import coverImg from "../../assets/one-page-icecream.jpg";

const Container = styled.div`
  background: url(${coverImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 875px;
`;
const ArrowAnim = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  width: 10vw;
  height: 10vw;
  border: 2.5vw solid;
  border-color: black transparent transparent black;
  transform: rotate(135deg);
`;

const ArrowSliding = styled.div`
  position: absolute;
  ${'' /* -webkit-animation: ${webkitKeyframesSlide} 4s linear infinite; */}
  animation-name: ${keyframesSlide};
 animation-duration: 8s;
 animation-iteration-count: infinite;
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
// const webkitKeyframesSlide = keyframes`
// &:-webkit-slide{
// 	  0% { opacity:0; transform: translateX(-15vw); }
// 	 20% { opacity:1; transform: translateX(-9vw); }
// 	 80% { opacity:1; transform: translateX(9vw); }
// 	100% { opacity:0; transform: translateX(15vw); }
// }
//   `;

const keyframesSlide = keyframes`
    0% { opacity:0; transform: translateX(-15vw); }
 20% { opacity:1; transform: translateX(-9vw); }
 80% { opacity:1; transform: translateX(9vw); }
100% { opacity:0; transform: translateX(15vw); }
 `;
//   @keyframes slide {
// 	  0% { opacity:0; transform: translateX(-15vw); }
// 	 20% { opacity:1; transform: translateX(-9vw); }
// 	 80% { opacity:1; transform: translateX(9vw); }
// 	100% { opacity:0; transform: translateX(15vw); }
//   }

const About = () => {
  return (
    <Container>
      <h1>Who we are?</h1>
      <p>
        it all started 35 yeas ago. we open our shop from all we had at the
        mooment. with all our passion of ice cream and ice cream makeing, and
        from our passion to creat the best ice cream we had you got to enjoy it
        to!
      </p>
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
    </Container>
  );
};

export default About;
