import React, { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";
// import followedArtists from "../samp/followedArtists.json";
import FollowedArtists from "./FollowedArtists";
import styled from "styled-components/macro";
import axios from "axios";
import {
  getFollowedArtists,
  getTopArtistsLongTerm,
  getTopArtistsMediumTerm,
  getTopArtistsShortTerm,
} from "../spotify";
import TopArtists from "./TopArtists";

const TracksStyle = styled.div`
  min-height: 100vh;
  padding: 32px 64px;
`;

const Artists = () => {
  const [followedArtists, setFollowedArtists] = useState(null);
  const [longTermArtists, setLongTermArtists] = useState(null);
  const [mediumTermArtists, setMediumTermArtists] = useState(null);
  const [shortTermArtists, setShortTermArtists] = useState(null);

  async function getProfileData() {
    axios
      .all([
        getFollowedArtists(),
        getTopArtistsLongTerm(),
        getTopArtistsMediumTerm(),
        getTopArtistsShortTerm(),
      ])
      .then(
        axios.spread((fa, ttla, ttma, ttsa) => {
          setFollowedArtists(fa.data);
          setLongTermArtists(ttla.data);
          setMediumTermArtists(ttma.data);
          setShortTermArtists(ttsa.data);
        })
      );
  }

  // async function getProfileData() {
  //   getCurrentTrack().then((res) => console.log(res));
  // }

  useEffect(() => {
    getProfileData();
    // console.log("Hello");
  }, []);

  // console.log(followedArtists);

  return followedArtists &&
    longTermArtists &&
    mediumTermArtists &&
    shortTermArtists ? (
    <TracksStyle>
      <FollowedArtists artists={followedArtists} />
      <TopArtists
        longtermartists={longTermArtists}
        mediumtermartists={mediumTermArtists}
        shorttermartists={shortTermArtists}
      />
    </TracksStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default Artists;
