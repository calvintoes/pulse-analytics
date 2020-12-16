import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 12px;
  color: "black";
  font-size: 16px;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const SearchBar = ({ search, setSearch }) => (
  <div style={{ display: "flex", paddingTop: 12 }}>
    <Input
      placeholder="Search indication, affiliation, or position by term..."
      aria-label="search"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  </div>
);

export default SearchBar;
