// src/templates/project.js
import React from "react";
import { Link, graphql } from "gatsby";
import Navbar from "../components/Navbar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

const SectionContainer = styled.section`
  text-align: center;

  > p {
    font-weight: 600;
    color: #222;

    > a {
      color: blue;
    }
  }
`;

const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  > * {
    flex: 1;
    max-width: 900px;
    max-height: 800px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject;
  const imageData = getImage(project.printScreen);
  const imageData2 = getImage(project.printScreen2);
  const imageData3 = getImage(project.printScreen3);

  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1>{project.title}</h1>

        <SectionContainer>
          <h2>Detaljer:</h2>
          <p>
            <strong>Kurs:</strong> {project.course}
          </p>
          <p>
            <strong>Datum:</strong> {project.date}
          </p>
          <p>
            <strong>Kategori:</strong> {project.category}
          </p>
          <p>
            <strong>Länk:</strong>{" "}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
            </a>
          </p>
        </SectionContainer>

        <ImageContainer>
          <GatsbyImage image={imageData} alt={project.title} />
          <GatsbyImage image={imageData2} alt={project.title} />
          <GatsbyImage image={imageData3} alt={project.title} />
        </ImageContainer>

        <SectionContainer>
          <h2>Beskrivning</h2>
          {documentToReactComponents(JSON.parse(project.description.raw))}
        </SectionContainer>
      </main>
      <Link to="/">Start</Link>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      course
      date
      description {
        raw
      }
      printScreen {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
      printScreen2 {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
      printScreen3 {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
      category
      url
    }
  }
`;

export default ProjectTemplate;
