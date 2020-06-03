import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import artworkReducer from "./artworks/reducer";

export default combineReducers({
  appState,
  user,
  artworks: artworkReducer,
});
