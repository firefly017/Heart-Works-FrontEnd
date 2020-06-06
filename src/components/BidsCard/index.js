import React from "react";
import "./index.css";

export default function BidsCard(props) {
  const bidsToRender = () =>
    props.bids.map((bid) => (
      <tr key={bid.id}>
        <td>{bid.email}</td>
        <td>{bid.amount}</td>
      </tr>
    ));
  return (
    <div>
      <h2>Bids</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Bid(€)</th>
          </tr>
        </thead>
        <tbody>{bidsToRender()}</tbody>
      </table>
    </div>
  );
}
