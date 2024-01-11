import { graphql, Link } from "gatsby";
import * as React from "react";
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

const contactPage = ({ data }) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <main>
        <Heading>
          <h1>Kontakt</h1>
        </Heading>

        <div>
          <p>Email: {data.allContentfulContactinfo.nodes[0].email}</p>
        </div>
      </main>
      <footer>
        <Link to="/">Start</Link>
      </footer>
    </Layout>
  );
};

export const query = graphql`
  query ContactQuery {
    allContentfulContactinfo {
      nodes {
        email
        gitHub
        linkedIn
        location
        name
        phone
        portfolio
      }
    }
  }
`;
export default contactPage;
