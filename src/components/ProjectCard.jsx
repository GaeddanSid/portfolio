import React from "react";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
`;

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

const ProjectImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
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

const ProjectCard = ({ data, selectedCategory }) => {
    const filteredProjects = selectedCategory
    ? data.allContentfulProject.nodes.filter(project => project.category === selectedCategory)
    : data.allContentfulProject.nodes;
    //filtrerar projekt baserat på vald kategori
    return (
        <ProjectCardContainer>
            {filteredProjects.map((project, index) => (
                <SingleProject key={index}>
                    <ProjectImage
                        src={project.printScreen.file.url}
                        alt={project.title}
                    />
                    <ProjectDetails>
                        <SubHeading>{project.title}</SubHeading>
                        <Paragraph>
                            {documentToReactComponents(
                                JSON.parse(project.description.raw)
                            )}
                        </Paragraph>
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
                            <URLLink
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.url}
                            </URLLink>
                        </Paragraph>
                    </ProjectDetails>
                </SingleProject>
            ))}
        </ProjectCardContainer>
    );
};

export default ProjectCard;
