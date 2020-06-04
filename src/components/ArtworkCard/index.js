import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt="artwork" />
      <br />
      <Link to={`/detail/${props.id}`}>
        <button type="button">View details </button>
      </Link>
      <br />
      Hearts: {props.hearts} {"         "}
      Bids: {props.bids.length}
      {/*  */}
    </div>
  );
};

export default ArtworkCard;
