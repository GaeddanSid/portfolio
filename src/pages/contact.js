import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Heading = styled.div`
  text-align: center;
  padding-bottom: 70px;

  > h1 {
    font-size: 48px;
    color: #222;
    margin: 20px;

    &:after {
      content: "";
      display: block;
      width: 50%;
      height: 3px;
      background: rgb(35, 113, 4);
      background: linear-gradient(
        53deg,
        rgba(35, 113, 4, 1) 0%,
        rgba(113, 176, 72, 1) 40%,
        rgba(86, 215, 4, 1) 100%
      );
      margin: auto;
    }
  }
`;

const ImageContainer = styled.div`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const query = graphql`
  query ContactQuery {
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
`;

const contactPage = ({ data }) => {
  const contactInfo = data.allContentfulContactinfo.nodes[0];
  const imageData = getImage(contactInfo.contactImage);
  return (
    <>
      <main>
        <Heading>
          <h1>Kontakt</h1>
        </Heading>

        <div>
          <h2>{contactInfo.name}</h2>
          <p>Email: {contactInfo.email}</p>
          <p>GitHub: {contactInfo.gitHub}</p>
        </div>

        <ImageContainer>
          <GatsbyImage image={imageData} alt="Portrait" />
        </ImageContainer>
      </main>

      <Link to="/">Start</Link>
    </>
  );
};

export default contactPage;
