// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = ({ contactInfo }) => {
  if (!contactInfo) {
    return null;
  }

  return (
    <FooterContainer>
      <h4>{contactInfo.name}</h4>
      <p>{contactInfo.location}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Telefon: {contactInfo.phone}</p>
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
