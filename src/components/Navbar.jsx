import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";

const OuterNav = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const StyledNav = styled.nav`
  display: flex;
  background-color: #222;
  padding: 20px;
  justify-content: space-between;
  min-height: 80px;
  border: 2px solid transparent;
  position: relative;
`;

const StyledLinkList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media (max-width: 650px) {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    background-color: #222;
    padding: 10px;
    z-index: 9;
  }
`;

const StyledNavItem = styled.li`
  margin-right: 1rem; //px

  @media (max-width: 650px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  color: #bfbfbf;
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: #009439;
    text-decoration: underline;
  }
`;

const HamburgerIcon = styled(FontAwesomeIcon)`
  display: none;

  @media (max-width: 650px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 20px; /* Justera positionen enligt behov */
    right: 20px; /* Justera positionen enligt behov */
    z-index: 10;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  // useEffect som lyssnar på resize för att hålla reda på när skärmstorlek ändras
  // för att se om meny ska visas eller ej

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

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
        <Link to="/" aria-label="Home">
          <FontAwesomeIcon icon={faHome} size="2x" color="white" />
        </Link>
        <StyledLinkList menuOpen={menuOpen}>
          {data.site.siteMetadata.menuLinks.map((link, index) => (
            <StyledNavItem key={index}>
              <StyledLink to={link.link}>{link.name}</StyledLink>
            </StyledNavItem>
          ))}
        </StyledLinkList>
        <HamburgerIcon
          icon={faBars}
          size="2x"
          color="white"
          onClick={toggleMenu}
        />
      </StyledNav>
    </OuterNav>
  );
};

export default Navbar;
