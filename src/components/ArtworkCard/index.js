import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="artwork" />
      <h2>{props.title}</h2>

      <Link to={`/artworks/${props.id}`}>View details</Link>
    </div>
  );
};

export default ArtworkCard;
