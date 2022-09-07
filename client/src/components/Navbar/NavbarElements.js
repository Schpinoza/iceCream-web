import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIceCream } from "react-icons/io5";
import { Container } from "../../Globalstyles";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const NavIcon = styled(IoIceCream)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(2);
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    color: #e38b06;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
  }
`;

export const MenuLinkBtn = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

// old style:

// import { NavLink as Link , Link as BrandName } from 'react-router-dom';
// import styled from 'styled-components';

// export const Dropbtn = styled.button`

// `
// export const Links = styled.div`
//     display: flex;

// `

// export const Brand = styled(BrandName)`
// color:#FFC0CB;
// text-decoration:none;
// font-weight: 700;
// font-size:3rem;
// display:inline-block;

// letter-spacing:1px;

// `
// export const Nav = styled.nav`
// background: #FFFDD0;
// height: 85px;
// display: flex;
// justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
// z-index: 12;
// /* Third Nav */
// /* justify-content: flex-start; */
// `;

// export const NavLink = styled(Link)`
// position:relative;
// left:200px;
// top:-50px;
// color: #808080;
// text-decoration: none;
// padding: 1rem;
// margin:auto;
// cursor: pointer;
// &.active {
//     height:1.5rem;
//     border-radius: 25px;
//     background: rgba(128,128,128,0.125);
// 	color: #000000;
// }
// @media(max-width: 1450px){

// }
// `;

// export const NavMenu = styled.div`

// `;

// export const NavBtn = styled.nav`
// position:static;
// left:10px;
// display: flex;
// align-items: center;
// /* Third Nav */
// /* justify-content: flex-end;
// width: 100vw; */
// @media screen and (max-width: 768px) {
// 	display: none;
// }
// `;

// export const NavBtnLink = styled(Link)`
// position:relative;
// top:10px;
// border-radius: 30px;
// background: rgba(128,128,128,0.25);
// padding: 10px 22px;
// color: #000000;
// outline: none;
// border: none;
// cursor: pointer;
// transition: all 0.2s ease-in-out;
// text-decoration: none;
// /* Second Nav */
// margin-left: 24px;
// &:hover {
// 	transition: all 0.2s ease-in-out;
// 	background: #fff;
// 	color: #808080;
// }
// `;
