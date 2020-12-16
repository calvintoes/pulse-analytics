import React from "react";
import { compare } from "./compare";

const TableRow = ({ data, sort }) => {
  const mapRows = (row) => {
    let {
      member,
      influencerType,
      indicationCategory,
      affiliation,
      affiliationPosition,
      primaryState,
      priority,
    } = row;

    return (
      <tr key={member}>
        <td>{member}</td>
        <td>{influencerType}</td>
        <td>{indicationCategory}</td>
        <td>{affiliation}</td>
        <td>{affiliationPosition}</td>
        <td>{primaryState}</td>
        <td>{priority}</td>
      </tr>
    );
  };

  const noSort = data.map((row) => mapRows(row));

  const sorted = [...data].sort(compare).map((row) => mapRows(row));

  return sort ? sorted : noSort;
};

export default TableRow;
