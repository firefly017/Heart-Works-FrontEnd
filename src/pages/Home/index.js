import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworks } from "../../store/artworks/actions";
import { getArtworks } from "../../store/artworks/selectors";
// import { getHomepages } from "../../store/homepages/selectors";
// import HomepageCard from "../../components/HomepageCard";

const Home = () => {
  //   // use a selector to get the artworks from redux.
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);
  //   const homepages = useSelector(getHomepages);

  console.log("artworks", artworks);
  useEffect(() => {
    // dispatch an action to load artworks
    dispatch(fetchArtworks());
  }, [dispatch]);

  //   const homepagesToRender = () =>
  //     homepages.map(homepage => <HomepageCard key={homepage.id} {...homepage} />);

  return <div>Home</div>;
};

export default Home;
