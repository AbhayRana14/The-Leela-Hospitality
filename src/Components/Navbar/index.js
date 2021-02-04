import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavItem, 
  NavLinks, 
  NavMenu, 
  MobileIcon,
  NavBtn,
  NavBtnLink 
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>The Leela Hospitality</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'>About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='discover'>Discover</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='services'>Services</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='signup'>Sign Up</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
