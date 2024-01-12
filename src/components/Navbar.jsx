import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const OuterNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const StyledNav = styled.nav`
  display: flex;
  background-color: #222;
  padding: 10px;
  justify-content: space-around;
  min-height: 70px;
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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <OuterNav>
      <StyledNav>
        <StyledLinkList>
          {data.site.siteMetadata.menuLinks.map((link, index) => (
            <StyledNavItem key={index}>
              <StyledLink to={link.link}>{link.name}</StyledLink>
            </StyledNavItem>
          ))}
        </StyledLinkList>
      </StyledNav>
    </OuterNav>
  );
};

export default Navbar;
