import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import Layout from "../layout";

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
      background: linear-gradient(
        to right,
        rgba(107, 77, 168, 1) 0%,
        rgba(73, 119, 194, 1) 100%
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
    border: 2px solid #526cbb;
    border-radius: 5px;
    color: #526cbb;
    padding: 10px;
    margin: 10px;

    &:hover {
      transform: scale(1.05);
      color: #fff;
      background-color: #526cbb;
    }
    &:active {
      background-color: #526cbb;
      //TODO, fixa active
    }
  }
`;

const PortfolioPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Layout>
      <Navbar />
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
          {/* Lägger till en knapp för att visa alla projekt */}
          <button onClick={() => setSelectedCategory(null)}>Visa alla</button>
        </CategorySelect>
        <ProjectCard data={data} selectedCategory={selectedCategory} />
        <Link to="/">Start</Link>
      </main>
    </Layout>
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
          file {
            url
          }
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
