import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";
import React from "react";
import ProjectCard from "../components/ProjectCard";

const PortfolioPage = ({ data }) => {
    return (
        <>
            <Navbar />
            <main>
                <h1>Projekt</h1>
                <ProjectCard data={data} />
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
