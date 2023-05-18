import React from "react";
import Table from "react-bootstrap/Table";
import Loading from "./Loading";

const TableData = ({ files }) =>
  files.length ? (
    <Table striped bordered>
      <thead style={{ borderBottom: "2px solid black" }}>
        <tr>
          <th className="text-center">File Name</th>
          <th className="text-center">Text</th>
          <th className="text-center">Number</th>
          <th className="text-center">Hex</th>
        </tr>
      </thead>
      <tbody>
        {files.map((item, index) =>
          item.lines.map((line, lineIndex) => (
            <tr key={`${index}-${lineIndex}`}>
              <td className="text-center">{item.file}</td>
              <td className="text-center">{line.text}</td>
              <td className="text-center">{line.number}</td>
              <td className="text-center">{line.hex}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  ) : (
    <Loading />
  );

export default TableData;
