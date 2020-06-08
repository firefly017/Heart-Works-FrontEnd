import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { makeABid } from "../../store/artworks/actions";

export default function NewBids(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [bidAmount , set_bidAmount] = useState()

  const creatABid = () => {
    //const amount = document.getElementById("amount").value;
   // console.log("creatABid component with amount " + amount);
    dispatch(makeABid(props.id, bidAmount, user.email));
  };
  // console.log("all bids", props.allBids)

  const arrayOfPrices = props.allBids.map(bid => bid.amount)
  const maxBid = Math.max(...arrayOfPrices)
  // console.log("max prices",arrayOfPrices ,maxBid)

  useEffect(()=>{
    set_bidAmount(maxBid + 1 )
  },[maxBid])


  //map -> array in array out
  //filter array in small array out
  //reduce array in value out

  if (user.id == undefined) {
    return <p>Please login to make a bid</p>;
  }
  return (
    <div>
      <label> Amount(€): </label>

      <input 
        value={bidAmount} 
        onChange={  e => set_bidAmount(e.target.value) }
        type="number" 
        id="amount" 
        name="amount" 
        min={maxBid + 1 }>
          
        </input>

      <button type="button" onClick={() => creatABid()}>
        Bid
      </button>
    </div>
  );
}
