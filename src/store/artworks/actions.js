import axios from "axios";

export const saveArtworks = (artworks) => ({
  type: "SAVE_ARTWORKS",
  payload: artworks, // => [{}, {}, {}]
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
