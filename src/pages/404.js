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
`;

const SearchResultContainer = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  margin: 10px 0;

  &:hover {
    transform: scale(1.05);
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
      <h2>Jag kan inte finna vad du letar efter.</h2>
      <p>Testa att söka på projektnamn eller önskad sida: </p>
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
