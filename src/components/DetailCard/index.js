import React from "react";

export default function DetailCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt="artwork" />
      <br />
      Hearts: {props.hearts} {"     "}
      <button type="button">Give Heart </button>
    </div>
  );
}
