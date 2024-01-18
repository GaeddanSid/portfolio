import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SingleProject = styled.div`
  width: 400px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectDetails = styled.div`
  padding: 15px;
`;

const SubHeading = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: large;
`;

const Paragraph = styled.p`
  margin-top: 15px;
`;

const URLLink = styled.a`
  color: blue;
  font-weight: bold;
`;

const ProjectButton = styled.button`
  text-transform: uppercase;
  border: 2px solid green;
  border-radius: 5px;
  color: green;
  padding: 10px;
  margin: 10px auto;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    background-color: green;
  }
  &:active {
    background-color: green;
  }
`;

const ProjectCard = ({ project }) => (
  <SingleProject>
    <GatsbyImage image={getImage(project.printScreen)} alt={project.title} />
    <ProjectDetails>
      <SubHeading>{project.title}</SubHeading>
      {documentToReactComponents(JSON.parse(project.description.raw))}
      <Paragraph>
        <strong>Kurs:</strong> {project.course}
      </Paragraph>
      <Paragraph>
        <strong>Datum:</strong> {project.date}
      </Paragraph>
      <Paragraph>
        <strong>Kategori:</strong> {project.category}
      </Paragraph>
      <Paragraph>
        <strong>Länk:</strong>{" "}
        <URLLink href={project.url} target="_blank" rel="noopener noreferrer">
          {project.url}
        </URLLink>
      </Paragraph>
      <ProjectButton>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </ProjectButton>
    </ProjectDetails>
  </SingleProject>
);

export default ProjectCard;
