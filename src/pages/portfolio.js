import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const ProjectCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

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

const CategorySelect = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;

  > button {
    text-transform: uppercase;
    border: 2px solid green;
    border-radius: 5px;
    color: green;
    padding: 10px;
    margin: 10px;

    &:hover {
      transform: scale(1.05);
      color: #fff;
      background-color: green;
    }
    &:active {
      background-color: green;
      //TODO, fixa active
    }
  }
`;

const PortfolioPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProjects = selectedCategory
    ? data.allContentfulProject.nodes.filter(
        (project) => project.category === selectedCategory
      )
    : data.allContentfulProject.nodes;

  return (
    <>
      <main>
        <Heading>
          <h1>Projekt</h1>
          <h2>Några projekt i urval</h2>
        </Heading>
        <CategorySelect>
          {Array.from(
            new Set(
              data.allContentfulProject.nodes.map((project) => project.category)
            )
          ).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          <button onClick={() => setSelectedCategory(null)}>Visa alla</button>
        </CategorySelect>
        <ProjectCardContainer>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectCardContainer>
        <Link to="/">Start</Link>
      </main>
    </>
  );
};

export const query = graphql`
  query PortfolioQuery {
    allContentfulProject {
      nodes {
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
        title
        category
        slug
        url
      }
    }
  }
`;

export default PortfolioPage;
