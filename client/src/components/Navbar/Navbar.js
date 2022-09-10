import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../../Globalstyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./NavbarElements";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Ice's
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>

          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/">
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/conact-us">
                Conact Us
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/ice-cream">Shop</MenuLink>
            </MenuItem>
            <MenuItemBtn>
              <MenuLinkBtn to="/cart">
                <Button primary>Cart</Button>
              </MenuLinkBtn>
            </MenuItemBtn>
          </Menu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
// import React from 'react';
// import CartIcon from '../Cart/CartIcon';
// import {
// Nav,
// NavLink,
// NavMenu,
// NavBtn,
// NavBtnLink,
// Brand,
// Links,
// } from './NavbarElements';

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<NavMenu>
//         <Brand to={"/"}>
//             Creamy Ice`s
//         </Brand>
//         <Links>
// 		<NavLink to='/about'>
// 			About Us
// 		</NavLink>
// 		<NavLink to='/iceCream' >
// 			Shop
// 		</NavLink>
// 		<NavLink to='/conectus' >
// 			Conect Us
// 		</NavLink>
//         </Links>
// 		{/* Second Nav */}
// 		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 		</NavMenu>
// 		<NavBtn>
// 		<NavBtnLink to='/cart'>
//         <span>
//             <CartIcon/>
//         </span>
//         Cart
//         </NavBtnLink>
// 		</NavBtn>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;
