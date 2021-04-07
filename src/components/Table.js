import React from "react";
import "./table.css";
import numeral from "numeral";

const Table = ({ tableData }) => {
  const tableValue = tableData.map(({ country, cases }) => {
    return (
      <tr>
        <td>{country}</td>
        <td>
          <strong>{numeral(cases).format("0,0")}</strong>
        </td>
      </tr>
    );
  });

  return <div className="table">{tableValue}</div>;
};

export default Table;
