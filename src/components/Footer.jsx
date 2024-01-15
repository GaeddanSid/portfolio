// Footer.js
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allContentfulContactinfo {
        nodes {
          contactImage {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
          email
          gitHub
          linkedIn
          location
          name
          phone
          portfolio
        }
      }
    }
  `);

  const contactInfo = data.allContentfulContactinfo.nodes[0];
  const contactImage = getImage(contactInfo.contactImage);

  return (
    <FooterContainer>
      {/* <GatsbyImage image={contactImage} alt={contactInfo.name} /> */}
      <h2>{contactInfo.name}</h2>
      <p>{contactInfo.location}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>
        GitHub:{" "}
        <a href={contactInfo.gitHub} target="_blank" rel="noopener noreferrer">
          {contactInfo.gitHub}
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contactInfo.linkedIn}
        </a>
      </p>
      <p>
        Portfolio:{" "}
        <a
          href={contactInfo.portfolio}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contactInfo.portfolio}
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
