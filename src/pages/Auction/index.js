import React from "react";

export default function Auction() {
  return (
    <div>
      <h1>Start an auction!</h1>
      <br />
      <h4>Post one of your artworks to start receiving offers!</h4>
      <form>
        <label>
          Title:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Minimum Bid:
          <input type="number" name="min bid" min="0" />
        </label>
        <br />
        <label>
          Image URL:
          <input type="url" name="img url" />
        </label>
        <br />
        <button type="button">Start Auction </button>
      </form>
    </div>
  );
}
