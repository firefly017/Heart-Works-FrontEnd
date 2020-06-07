import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { makeABid } from "../../store/artworks/actions";

export default function NewBids(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (user.id == undefined) {
    return <div></div>;
  }
  const creatABid = () => {
    const amount = document.getElementById("amount").value;
    console.log("creatABid component with amount " + amount);
    dispatch(makeABid(props.id, amount, user.email));
  };
  return (
    <div>
      <label> Amount(€): </label>

      <input type="number" id="amount" name="amount" min="0"></input>

      <button type="button" onClick={() => creatABid()}>
        Bid
      </button>
    </div>
  );
}
