import React, { useState } from "react";
import { graphql } from "gatsby";
import Search from "../components/search";
import { Link } from "gatsby";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;

  > h4 {
    margin: 20px;
    font-size: 18px;
  }

  > button {
    text-transform: uppercase;
    border: 2px solid green;
    border-radius: 5px;
    color: green;
    width: 100px;
    padding: 10px;
    margin: 10px;

    &:hover {
      transform: scale(1.05);
      color: #fff;
      background-color: green;
    }
    &:active {
      background-color: green;
    }
  }
`;

const SearchResultContainer = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  margin: 10px 0;

  &:hover {
    transform: scale(1.05);
  }
`;

const VisitContainer = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 15px;
  }

  > h3 {
    font-size: 24px;
  }

  > a {
    font-size: 18px;
    color: #222;

    &:hover {
      transform: scale(1.05);
      text-decoration: underline;
    }
  }
`;

const NotFoundPage = ({ data }) => {
  const allPages = data.allSitePage.edges;

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    if (query.length > 0) {
      const results = allPages.filter(
        (page) =>
          page.node.path.toLowerCase().includes(query.toLowerCase()) ||
          page.node.path.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <NotFoundContainer>
      <h2>Sidan finns inte.</h2>
      <button>
        <Link to="/">Till Start</Link>
      </button>
      <VisitContainer>
        <h3>Eller besök gärna:</h3>
        <Link to="/about">Om Mig</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/experience">Erfarenhet</Link>
        <Link to="/contact">Kontakt</Link>
      </VisitContainer>
      <h4>Testa gärna att söka på projektnamn eller önskad sida: </h4>
      <div>
        <Search onSubmit={handleSearch} />
        {searchResults.map((result) => (
          <SearchResultContainer key={result.node.path}>
            <Link to={result.node.path}>
              <h3>
                {result.node.path
                  .split("/")
                  .filter(Boolean)
                  .slice(-1)[0]
                  .replace(/-/g, " ")
                  .charAt(0)
                  .toUpperCase() +
                  result.node.path
                    .split("/")
                    .filter(Boolean)
                    .slice(-1)[0]
                    .slice(1)}
              </h3>
            </Link>
          </SearchResultContainer>
        ))}
      </div>
    </NotFoundContainer>
  );
};

export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          pageContext
          path
        }
      }
    }
  }
`;

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
