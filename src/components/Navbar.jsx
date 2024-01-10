import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const OuterNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  background-color: #222;
  padding: 10px;
  justify-content: space-around;
  min-height: 50px;
  margin-bottom: 40px;
  border: 2px solid transparent;
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
        <OuterNav>
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
      </OuterNav>
    );
};

export default Navbar;
