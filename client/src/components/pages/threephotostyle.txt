import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { MenuLinkBtn } from "../Navbar/NavbarElements";
import {OutlineButton} from '../../Globalstyles';
import topImg from "../../assets/ice-home-page-1.jpg"
import bottomImgOne from "../../assets/ice-home-page-2.jpg"
import bottomImgTwo from "../../assets/ice-home-page-3.jpg"

const Container = styled.div`
  height: 825px;
  background: linear-gradient(27.7deg, #8cc0de 50%, #faf0d7 50%);
  width:100%;
  text-align: center;
`;

const SideDiv = styled.div`
  width: 20%;
  float: left;
  margin-top: 20em;
  margin-left: 10em;
`;


const Img = styled.div`
position:absolute;
background-size:100%;
height:400px;
width:20%;
background-repeat: no-repeat;
border: 5px solid white;
border-radius:5px;
`
const UpperImg = styled(Img)`
background-image: url(${topImg});
left:50%;
top:20%;
z-index:1;

`
const UnderImgOne = styled(Img)`
background-image: url(${bottomImgOne});
transform: rotate(25deg);
left:64%;
top:25%;

`
const UnderImgTwo = styled(Img)`
background-image: url(${bottomImgTwo});
transform: rotate(-25deg);
left:36%;
top:25%;
`












const Home = () => {
  const [newData, setNewData] = useState("");
  // 	useEffect(() => {
  // 		getRequset()
  // 	}, []);
  // const getRequset = async ()=>{
  // 	const response = await axios.get('/api');
  // 	const data = await response.data
  // 	setNewData(data);
  // }
  return (
    <Container>
      <SideDiv>
        <h1>Who we are?</h1>
        <p>
          it all started 35 yeas ago. we open our shop from all we had at the
          mooment. with all our passion of ice cream and ice cream makeing, and
          from our passion to creat the best ice cream we ate.<br/>You should enjoy it to!
        </p>
        <MenuLinkBtn to="/iceCream">
          <OutlineButton primary>Order Here</OutlineButton>
        </MenuLinkBtn>
      </SideDiv>
        <UpperImg/>
        <UnderImgOne/>
        <UnderImgTwo/>
    </Container>
  );
};

export default Home;
