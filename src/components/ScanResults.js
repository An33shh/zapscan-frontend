import React from "react";

function ScanResults({ results }) {
  if (!results || results.vulnerabilities.length === 0) {
    return <p>No vulnerabilities found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Risk</th>
          <th>Description</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        {results.vulnerabilities.map((vulnerability) => (
          <tr key={vulnerability.id}>
            <td>{vulnerability.id}</td>
            <td>{vulnerability.name}</td>
            <td>{vulnerability.risk}</td>
            <td>{vulnerability.description}</td>
            <td>{vulnerability.solution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScanResults;
