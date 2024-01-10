import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  background-color: #222;
  padding: 1rem;
  justify-content: space-around;
`;

const StyledLinkList = styled.ul`
  display: flex;
`;

const StyledNavItem = styled.li`
  margin-right: 1rem;
`;

const StyledLink = styled(Link)`
  color: #bfbfbf;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #526cbb;
    text-decoration: underline;
  }
`;


const Navbar = () => {
    return (
        <StyledNav>
        <StyledLinkList>
          <StyledNavItem>
            <StyledLink to="/">Start</StyledLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledLink to="/about">Om Mig</StyledLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledLink to="/experience">Erfarenheter</StyledLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledLink to="/contact">Kontakt</StyledLink>
          </StyledNavItem>
        </StyledLinkList>
      </StyledNav>
    );
};

export default Navbar;
