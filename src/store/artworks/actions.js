import axios from "axios";

export const saveArtworks = (artworks) => ({
  type: "SAVE_ARTWORKS",
  payload: artworks, // => [{}, {}, {}]
});
export const addnewBid = (data) => ({
  type: "ADD_BID",
  payload: data, // => [{}, {}, {}]
});

export const fetchArtworks = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/artworks/");
    console.log(response);
    // make axios call to our endpoint
    // dispatch saveArtworks.
    dispatch(saveArtworks(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const giveHeart = (artworksId, hearts) => async (dispatch, getState) => {
  try {
    console.log("giveheart store id =" + artworksId + " hearts =" + hearts);
    const response = await axios.get(
      "http://localhost:4000/artworks/" + artworksId
    );
    console.log(response.data);
    var curArt = response.data;
    curArt.hearts = hearts;
    console.log(curArt.hearts);
    await axios.patch("http://localhost:4000/artworks/" + artworksId, curArt);

    // make axios call to our endpoint
    // dispatch saveArtworks.
    //dispatch(saveArtworks(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const makeABid = (artworksId, amount, email) => async (
  dispatch,
  getState  //what is this??
) => {
  try {
    console.log(
      "giveheart store id =" +
        artworksId +
        " email =" +
        email +
        " amount " +
        amount
    );
    var bid = {};
    bid.artworkId = artworksId;
    bid.email = email;
    bid.amount = amount;
      console.log("what is getState", getState().user.token)
    const response = await axios.post("http://localhost:4000/artworks/bid/", bid, {
      headers: { Authorization: `Bearer ${getState().user.token}` },
    });
      dispatch(saveArtworks(response.data))
      //dispatch(addnewBid(response.data))
    // make axios call to our endpoint
    // dispatch saveArtworks.
    //dispatch(saveArtworks(response.data));
  } catch (error) {
    console.log(error);
  }
};
