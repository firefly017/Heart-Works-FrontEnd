import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getArtworks } from "../../store/artworks/selectors";
import DetailCard from "../../components/DetailCard";

const DetailPage = (params) => {
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);
  const route_parameters = useParams();
  console.log("is artwork detail loading?" + route_parameters.artwork_id);
  const selectedArtWorks = artworks.filter((artwork) => {
    return artwork.id == route_parameters.artwork_id;
  });
  const artworksToRender = () =>
    selectedArtWorks.map((artwork) => (
      <DetailCard key={artwork.id} {...artwork} />
    ));
  return <div>{artworksToRender()}</div>;
};

export default DetailPage;
