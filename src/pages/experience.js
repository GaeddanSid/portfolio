import { graphql, Link } from "gatsby";
import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/Navbar";
import Layout from "../layout";
import styled from "styled-components";

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

const WorkExp = styled.div`
  max-width: 750px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const CompanyExp = styled.div`
  margin-bottom: 50px;
`;

const SkillSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  flex-wrap: wrap;
  background: rgb(35, 113, 4);
  background: linear-gradient(
    53deg,
    rgba(35, 113, 4, 1) 0%,
    rgba(113, 176, 72, 1) 40%,
    rgba(86, 215, 4, 1) 100%
  );
`;
const SkillColumn = styled.div`
  flex: 1;
  margin-right: 10px;
  margin-bottom: 20px;

  ul {
    margin-right: 10px;
  }

  li {
    margin-bottom: 10px;
    text-align: center;
  }
`;

const experiencePage = ({ data }) => {
  const workNodes = data.allContentfulWorkExperience.nodes;
  const educationNodes = data.allContentfulEducation.nodes;
  const skillsNodes = data.allContentfulSkills.nodes;
  console.log(skillsNodes);

  return (
    <Layout>
      <Navbar></Navbar>
      <main>
        <Heading>
          <h1>Erfarenhet</h1>
        </Heading>
        <WorkExp>
          <div>
            {workNodes.map((workData, index) => (
              <CompanyExp key={index}>
                <h2>{workData.company}</h2>
                <p>{workData.role}</p>
                <p>{workData.location}</p>
                <p>
                  {workData.startDate} -{" "}
                  {workData.current ? "Nuvarande" : workData.endDate}
                </p>

                {documentToReactComponents(JSON.parse(workData.decription.raw))}

                <p>Färdigheter: {workData.skills.join(", ")}</p>
              </CompanyExp>
            ))}
          </div>
        </WorkExp>

        <SkillSection>
          <SkillColumn>
            <h2>Färdigheter</h2>
            <ul>
              {skillsNodes.flatMap((skillsData, index) =>
                skillsData.primary.map((skill, skillIndex) => (
                  <li key={`${index}-primary-${skillIndex}`}>{skill}</li>
                ))
              )}
            </ul>
            {/* Skapar en array av li element */}
          </SkillColumn>
          <SkillColumn>
            <h2>Övrigt</h2>
            <ul>
              {skillsNodes.flatMap((skillsData, index) =>
                skillsData.secondary.map((skill, skillIndex) => (
                  <li key={`${index}-secondary-${skillIndex}`}>{skill}</li>
                ))
              )}
            </ul>
          </SkillColumn>
        </SkillSection>

        <Heading>
          <h1>Utbildning</h1>
        </Heading>
        <div>
          {educationNodes.map((educationData, index) => (
            <div key={index}>
              <h2>{educationData.school}</h2>
              <h3>{educationData.program}</h3>
              <div>
                {documentToReactComponents(
                  JSON.parse(educationData.description.raw)
                )}
              </div>
              <div>
                {documentToReactComponents(
                  JSON.parse(educationData.courses.raw)
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Link to="/">Start</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
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

    allContentfulEducation {
      nodes {
        courses {
          raw
        }
        description {
          raw
        }
        school
        endDate
        program
        location
        startDate
        slug
      }
    }

    allContentfulSkills {
      nodes {
        primary
        secondary
      }
    }
  }
`;

export default experiencePage;
