import React, { useState } from "react";

export default function Auction() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function submitForm() {
    console.log("Submitting the form");
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return <h3>Thank you for Submitting your art work!</h3>;
  }

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
        <button type="button" onClick={submitForm}>
          Start Auction{" "}
        </button>
      </form>
    </div>
  );
}
