import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getArtworks } from "../../store/artworks/selectors";
import { fetchArtworks } from "../../store/artworks/actions";
import DetailCard from "../../components/DetailCard";
import BidsCard from "../../components/BidsCard";
import NewBids from "../../components/NewBids";

const DetailPage = (params) => {
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);
  // const [allArtWorks, setAllArtWorks] = useState(artworks);
  useEffect(() => {
    // dispatch an action to load artworks
    console.log("in use effect");
    dispatch(fetchArtworks());
  }, [dispatch]);
  const route_parameters = useParams();
  console.log("is artwork detail loading?" + route_parameters.artwork_id);
  const selectedArtWorks = artworks.filter((artwork) => {
    return artwork.id == route_parameters.artwork_id;
  });

  const artworksToRender = () =>
    selectedArtWorks.map((artwork) => (
      <DetailCard key={artwork.id} {...artwork} />
    ));
  const bids = selectedArtWorks.length < 1 ? [] : selectedArtWorks[0].bids;
  console.log(bids);

  const bidsToRender = () => <BidsCard bids={bids} />;

  return (
    <div>
      {artworksToRender()}
      <br />
      {bidsToRender()}
      <br />
      <NewBids
        key={route_parameters.artwork_id}
        id={route_parameters.artwork_id}
        allBids={bids}
      />
    </div>
  );
};

export default DetailPage;
