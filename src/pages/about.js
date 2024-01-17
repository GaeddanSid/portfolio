import { graphql, Link } from "gatsby";
import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MainContainer = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  color: green;
`;

const SubHeading = styled.h2`
  color: #333; /* Mörkgrå färg */
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Article = styled.article`
  text-align: left;
  margin-top: 20px;
  p {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

const StartLink = styled(Link)`
  display: block;
  margin-top: 20px;
  text-decoration: none;
  border: 2px solid green;
  border-radius: 5px;
  color: green;
  padding: 10px;
  margin: 10px;
  font-size: 24px;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    background-color: green;
  }
`;

const aboutPage = (props) => {
  const aboutNode = props.data.allContentfulAbout.nodes[0];
  const aboutName = aboutNode.name;
  const imageData = getImage(aboutNode.portrait);

  return (
    <>
      <MainContainer>
        <Heading>{aboutName}</Heading>
        <h2>{aboutNode.role}</h2>
        <ImageContainer>
          <GatsbyImage image={imageData} alt="Portrait" />
        </ImageContainer>
        <Article>
          {documentToReactComponents(
            JSON.parse(props.data.allContentfulAbout.nodes[0].aboutText.raw)
          )}
        </Article>
        <StartLink to="/">Start</StartLink>
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
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
        aboutText {
          raw
        }
      }
    }
  }
`;

export default aboutPage;

export const Head = () => <title>Om mig</title>;
