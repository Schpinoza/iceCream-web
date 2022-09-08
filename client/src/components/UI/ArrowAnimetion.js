import styled, { keyframes } from "styled-components";

const ArrowAnimetion = () => {
  return (
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
  );
};

export default ArrowAnimetion;

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
