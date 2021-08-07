import React from "react";

import { Table } from "react-bootstrap";

const Leaderboard = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "5px solid #8A2BE2",
        }}
      >
        <h1>Book Skimmer</h1>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Sidor</th>
            <th colSpan={2}>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23/8</td>
            <td>12</td>
            <td colSpan={2}>7</td>
          </tr>
          <tr>
            <td>24/8</td>
            <td>24</td>
            <td colSpan={2}>12</td>
          </tr>
          <tr>
            <td>24/8</td>
            <td>40</td>
            <td colSpan={2}>32</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Leaderboard;
