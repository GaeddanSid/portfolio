import { graphql, Link } from "gatsby";
import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/Navbar";
import Layout from "../layout";

const experiencePage = ({ data }) => {
  const workNodes = data.allContentfulWorkExperience.nodes;

  return (
    <Layout>
      <Navbar></Navbar>
      <main>
        <div>
          {workNodes.map((workData, index) => (
            <div key={index}>
              <h2>{workData.company}</h2>
              <p>{workData.role}</p>
              <p>{workData.location}</p>
              <p>
                {workData.startDate} -{" "}
                {workData.current ? "Nuvarande" : workData.endDate}
              </p>
              <p>
                {documentToReactComponents(JSON.parse(workData.decription.raw))}
              </p>

              <p>Färdigheter: {workData.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query WorkQuery {
    allContentfulWorkExperience {
      nodes {
        company
        current
        decription {
          raw
        }
        endDate
        role
        location
        skills
        startDate
      }
    }
  }
`;

export default experiencePage;
