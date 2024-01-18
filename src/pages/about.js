import { graphql } from "gatsby";
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
  color: #333;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  position: relative;

  &::before {
    content: ""; // Pseudoelement för att skapa en "overlay" över bilden
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // Justera genomskinligheten efter behov
    z-index: 1; // Placera "overlay" under knappen
  }
`;

const Article = styled.article`
  text-align: left;
  margin-top: 20px;
  p {
    margin-bottom: 10px;
    line-height: 1.5;
    color: #333;
  }
`;

const DownloadBtn = styled.button`
  display: block;
  text-decoration: none;
  border: 2px solid green;
  border-radius: 5px;
  color: green;
  padding: 10px;
  width: 100%;
  margin: 20px auto;
  font-size: 24px;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    background-color: green;
  }
`;

const CVbutton = styled.button`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  border: 2px solid green;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 24px;
  background-color: green;
  color: #fff;

  &:hover {
    color: #fff;
    background-color: darkgreen;
  }
`;

const aboutPage = (props) => {
  const aboutNode = props.data.allContentfulAbout.nodes[0];
  const aboutName = aboutNode.name;
  const imageData = getImage(aboutNode.portrait);

  const handleDownload = () => {
    // Lägg till logik för att generera eller hämta PDF-filen här
    // Exempel: window.open("url-till-ditt-CV.pdf", "_blank");

    // Om du har PDF-filen som en lokal fil i ditt projekt:
    const pdfPath = "/CV-PontusNorenStomberg.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.target = "_blank";
    link.download = "CV-PontusNorenStomberg.pdf";
    link.click();
  };

  return (
    <>
      <MainContainer>
        <Heading>{aboutName}</Heading>
        <SubHeading>{aboutNode.role}</SubHeading>
        <ImageContainer>
          <GatsbyImage image={imageData} alt="Portrait" />
          <CVbutton onClick={handleDownload}>Ladda ner CV</CVbutton>
        </ImageContainer>
        <Article>
          {documentToReactComponents(
            JSON.parse(props.data.allContentfulAbout.nodes[0].aboutText.raw)
          )}
        </Article>
        <DownloadBtn onClick={handleDownload}>Ladda ner CV</DownloadBtn>
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
