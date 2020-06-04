import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworks } from "../../store/artworks/actions";
import { getArtworks } from "../../store/artworks/selectors";
import ArtworkCard from "../../components/ArtworkCard";

const Home = () => {
  //   // use a selector to get the artworks from redux.
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);

  console.log("artwork");
  useEffect(() => {
    // dispatch an action to load artworks
    dispatch(fetchArtworks());
  }, [dispatch]);

  const artworksToRender = () =>
    artworks.map((artwork) => <ArtworkCard key={artwork.id} {...artwork} />);

  return <div>{artworksToRender()}</div>;
};

export default Home;
