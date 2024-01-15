import { graphql, Link } from "gatsby";
import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/Navbar";
import Layout from "../layout";
import Footer from "../components/Footer";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Heading = styled.h1`
  color: green;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Article = styled.article`
  text-align: center;
`;

const aboutPage = (props) => {
  console.log(props);
  const aboutNode = props.data.allContentfulAbout.nodes[0];
  const aboutName = aboutNode.name;
  // const imageUrl = props.data.allContentfulAbout.nodes[0].portrait.file.url;
  const imageData = getImage(aboutNode.portrait);

  return (
    <Layout>
      <Navbar />
      <main>
        <Heading>{aboutName}</Heading>
        <h2>{aboutNode.role}</h2>
        {/* <img src={imageUrl} alt="Portrait" style={styles.image} /> */}
        <ImageContainer>
          <GatsbyImage image={imageData} alt="Portrait" />
        </ImageContainer>
        <Article>
          {documentToReactComponents(
            JSON.parse(props.data.allContentfulAbout.nodes[0].aboutText.raw)
          )}
        </Article>
        <Link to="/">Start</Link>
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
