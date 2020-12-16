import React, { useState } from "react";
import styled from "styled-components";

import data from "../../data.json";
import "./styles.css";

import uniqueBy from "../exercise_1_uniqueBy";
import filterBy from "../exercise_2_filterBy";

import SearchBar from "./SearchBar";
import ResultTable from "./ResultTable";

const Container = styled.div`
  border-radius: 15px;
  padding: 24px;
  margin: 24px;
  background: "#E8EBEC";
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.45);

  h1 {
    margin: 1rem 0;
  }

  button {
    border: none;
    padding: 1rem 1.6rem;
    background-color: tomato;
    cursor: pointer;
    border-radius: 5px;
    color: white;
  }
`;

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort
       our data by priority
*/

const Influencers = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  const uniqueData = uniqueBy(data, "member"); // use the uniqueBy util to unique our data by member values

  const filteredData = filterBy(uniqueData, search, [
    "indicationCategory",
    "affiliation",
    "affiliationPosition",
  ]); // use the filterBy util to filter our data by the given search term

  const handleSort = () => {
    setSort(true);
  };

  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={handleSort}>Sort by Priority</button>
      {/* <YourComponentHere data={filteredData} /> */}
      <ResultTable data={filteredData} sort={sort} />
    </Container>
  );
};

export default Influencers;
