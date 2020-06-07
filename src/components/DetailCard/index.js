import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { giveHeart } from "../../store/artworks/actions";

export default function DetailCard(props) {
  const [hearts, setHeart] = useState(props.hearts);
  const [title, setTitle] = useState(props.title);
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const dispatch = useDispatch();
  const giveHeartClicked = (id) => {
    console.log("giveheart component");
    dispatch(giveHeart(id, hearts + 1));
    setHeart(hearts + 1);
  };

  console.log("loading detail card");
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt="artwork" />
      <br />
      Hearts: {hearts} {"     "}
      <button type="button" onClick={() => giveHeartClicked(props.id)}>
        Give Heart{" "}
      </button>
      <br />
      {/* Bids: {props.bids.email.amount} */}
    </div>
  );
}
