import React from "react";
import TableRow from "./TableRow";
import styled from "styled-components";

const Table = styled.table`
  margin-top: 1rem;
  width: 100%;
  font-family: sans-serif;

  thead {
    background-color: orange;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
  }
  tbody {
    tr {
      border-bottom: 1px solid #ddd;
    }
    tr:hover {
      background-color: #ddd;
    }
  }
`;

const tableHeaders = [
  {
    label: "Member",
  },
  {
    label: "Type",
  },
  {
    label: "Category",
  },
  {
    label: "Affiliation",
  },
  {
    label: "Title",
  },
  {
    label: "State",
  },
  {
    label: "Priority",
  },
];
const ResultTable = ({ data, sort }) => {
  console.log(data);
  return (
    <Table>
      <thead>
        <tr>
          {tableHeaders.map((title) => (
            <th key={title.label}>{title.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableRow data={data} sort={sort} />
      </tbody>
    </Table>
  );
};

export default ResultTable;
