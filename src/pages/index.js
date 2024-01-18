import * as React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MainContainer = styled.main`
  /* max-width: 1660px;
  background-color: #222;
  margin: auto;
  padding: 0; */
  text-align: center;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  /* max-width: 1660px; */
  /* background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center; */
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
  z-index: 1;
`;

const HeroText = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: green;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const StartButton = styled(Link)`
  padding: 15px 30px;
  background-color: green;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #094b09;
  }
`;

const IndexPage = ({ data }) => {
  const aboutData = data.allContentfulAbout.nodes[0];
  const imageData2 = getImage(aboutData.startImage);

  return (
    <>
      <MainContainer>
        <HeroSection>
          <GatsbyImage
            image={imageData2}
            alt="Hero Image"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "1700px",
              maxHeight: "100vh",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
          <GradientOverlay />
          <HeroText>
            <Title>{aboutData.name}</Title>
            <Subtitle>{aboutData.role}</Subtitle>
            {/* <Subtitle>{aboutData.aboutShort}</Subtitle> */}
            <StartButton to="/about">Mer om mig</StartButton>
          </HeroText>
        </HeroSection>
      </MainContainer>
    </>
  );
};

export const query = graphql`
  query AboutQuery {
    allContentfulAbout {
      nodes {
        name
        role
        aboutShort
        portrait {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP])
        }
        startImage {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP])
        }
        aboutText {
          raw
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Pontus Norén Stomberg</title>;
