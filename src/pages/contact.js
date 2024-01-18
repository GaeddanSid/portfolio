import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

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
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

const OverlayBox = styled.div`
  position: absolute;
  top: 15%;
  right: 45%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
  min-width: 200px;
  max-width: 600px;
  text-align: right;

  > p {
    margin: 10px 40px;
    font-weight: 600;
  }

  @media (max-width: 760px) {
    top: 25%;
    left: 45%;
    text-align: left;

    > h2 {
      font-size: 18px;
      margin: 0;
    }

    > p {
      margin: 0;
      font-weight: 0;
    }
  }
`;

const SocialBox = styled(OverlayBox)`
  top: 75%;
  left: 45%;
  text-align: left;
  min-width: 200px;
`;

export const query = graphql`
  query ContactQuery {
    allContentfulContactinfo {
      nodes {
        contactHeading
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
          <h1>{contactInfo.contactHeading}</h1>
        </Heading>

        <ImageContainer>
          <GatsbyImage
            image={imageData}
            alt="Portrait"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
          <OverlayBox>
            <h2>{contactInfo.name}</h2>
            <p>
              {" "}
              <a href={`mailto:${contactInfo.email}`}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" /> Email
              </a>
            </p>
            <p>
              <a href={`tel:${contactInfo.phoneNumber}`}>
                <FontAwesomeIcon icon={faPhone} size="2x" /> Ring
              </a>
            </p>
          </OverlayBox>
          <SocialBox>
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
          </SocialBox>
        </ImageContainer>
      </main>
    </>
  );
};

export default contactPage;

export const Head = () => <title>Kontakt</title>;
