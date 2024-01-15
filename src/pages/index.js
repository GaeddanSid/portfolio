import * as React from "react";
import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Layout from "../layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
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
  const imageData = getImage(aboutData.portrait);
  const imageData2 = getImage(aboutData.startImage);

  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection>
          <GatsbyImage
            image={imageData2}
            alt="Hero Image"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
          <GradientOverlay />
          <HeroText>
            <Title>{aboutData.name}</Title>
            <Subtitle>{aboutData.role}</Subtitle>
            <StartButton to="/about">Mer om mig</StartButton>
          </HeroText>
        </HeroSection>
      </main>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    allContentfulAbout {
      nodes {
        name
        role
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

export const Head = () => <title>Gäddan</title>;
