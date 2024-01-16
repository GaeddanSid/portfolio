import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 2px solid green;
`;

const SearchButton = styled.button`
  text-transform: uppercase;
  padding: 8px 12px;
  color: green;
  border: 2px solid green;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    background-color: green;
  }
  &:active {
    background-color: green;
  }
`;

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Sök..."
        value={query}
        onChange={handleInputChange}
      />
      <SearchButton type="submit">Sök</SearchButton>
    </SearchForm>
  );
};

export default Search;
