// Footer.js
import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

import {
  faUser,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  flex-wrap: wrap; /* Om innehållet behöver flera rader på mindre skärmar */
`;

const FooterInfo = styled.div`
  flex: 1;
  text-align: left;

  p,
  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    color: white;
    text-decoration: none;
    font-weight: 700;

    > svg {
      margin-right: 20px;
    }

    &:hover {
      color: green; /* Justera färgen vid hover */
    }

    i {
      margin-right: 8px;
    }
  }
`;

const FooterLinks = styled.div`
  text-align: right;
  margin-right: 25px;

  a {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    color: white;
    text-decoration: none;
    font-weight: 700;

    > svg {
      margin-right: 20px;
    }

    &:hover {
      color: green;
    }

    i {
      margin-right: 8px;
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContactinfo {
        nodes {
          email
          gitHub
          linkedIn
          location
          name
          phone
          portfolio
          contactImage {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    }
  `);
  const contactInfo = data.allContentfulContactinfo.nodes[0];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterInfo>
          <h4>
            <FontAwesomeIcon icon={faUser} size="2x" />
            {contactInfo.name}
          </h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            {contactInfo.location}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} size="2x" /> {contactInfo.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} size="2x" /> {contactInfo.phone}
          </p>
        </FooterInfo>
        <FooterLinks>
          <p>
            <a
              href={contactInfo.gitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" /> GitHub
            </a>
          </p>
          <p>
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
            </a>
          </p>
          <p>
            <a
              href={contactInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFirefoxBrowser} size="2x" /> Portfolio
            </a>
          </p>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
