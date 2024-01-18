import { graphql } from "gatsby";
import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
      max-width: 1400px;
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

const ExperienceContainer = styled.div`
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
`;

const ExperienceSection = styled.div`
  margin-bottom: 50px;

  padding: 0 16px;
  border-left: 2px solid #222;
  border-right: 2px solid #222;

  &:after {
    content: "";
    display: block;
    width: 80%;
    height: 3px;
    background: linear-gradient(
      53deg,
      rgba(35, 113, 4, 1) 0%,
      rgba(113, 176, 72, 1) 40%,
      rgba(86, 215, 4, 1) 100%
    );
    margin: 20px auto;
  }

  > p {
    margin: 10px 0;
  }

  > h3 {
    font-style: italic;
    font-weight: 600;
    font-size: 20px;
    color: #333;
  }

  > h4 {
    margin: 10px 0;
    font-weight: 600;
  }
`;

const SkillSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  background: #e0dfdf;
  padding: 80px 0;
  margin: 80px 0;
`;
const SkillColumn = styled.div`
  flex: 1;
  margin-right: 10px;
  margin-bottom: 20px;
  border-left: 2px solid #222;

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

  return (
    <>
      <main>
        <Heading>
          <h1>Erfarenhet</h1>
        </Heading>
        <ExperienceContainer>
          <div>
            {workNodes.map((workData, index) => (
              <ExperienceSection key={index}>
                <h2>{workData.company}</h2>
                <h3>{workData.role}</h3>
                <p>{workData.location}</p>
                <p>
                  {workData.startDate} -{" "}
                  {workData.current ? "Nuvarande" : workData.endDate}
                </p>

                {documentToReactComponents(JSON.parse(workData.decription.raw))}

                <p>Färdigheter: {workData.skills.join(", ")}</p>
              </ExperienceSection>
            ))}
          </div>
        </ExperienceContainer>

        <SkillSection>
          <SkillColumn>
            <h2>Tekniker</h2>
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
            <h2>Färdigheter</h2>
            <ul>
              {skillsNodes.flatMap((skillsData, index) =>
                skillsData.secondary.map((skill, skillIndex) => (
                  <li key={`${index}-secondary-${skillIndex}`}>{skill}</li>
                ))
              )}
            </ul>
          </SkillColumn>
          <SkillColumn>
            <h2>Övrigt</h2>
            <ul>
              {skillsNodes.flatMap((skillsData, index) =>
                skillsData.other.map((skill, skillIndex) => (
                  <li key={`${index}-other-${skillIndex}`}>{skill}</li>
                ))
              )}
            </ul>
          </SkillColumn>
        </SkillSection>

        <Heading>
          <h1>Utbildning</h1>
        </Heading>
        <ExperienceContainer>
          <div>
            {educationNodes.map((educationData, index) => (
              <ExperienceSection key={index}>
                <h2>{educationData.school}</h2>
                <h3>{educationData.program}</h3>
                <p>
                  {educationData.startDate} - {educationData.endDate}
                </p>
                <div>
                  {documentToReactComponents(
                    JSON.parse(educationData.description.raw)
                  )}
                </div>
                <h4>Kurser:</h4>
                <div>
                  {documentToReactComponents(
                    JSON.parse(educationData.courses.raw)
                  )}
                </div>
              </ExperienceSection>
            ))}
          </div>
        </ExperienceContainer>
      </main>
    </>
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
        other
      }
    }
  }
`;

export default experiencePage;

export const Head = () => <title>Erfarenhet</title>;
