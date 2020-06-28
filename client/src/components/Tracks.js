import React, { useState, useEffect } from "react";
// import savedTracks from "../samp/savedTracks.json";
// import recentlyPlayed from "../samp/recentlyPlayed.json";
import LoadingIndicator from "./LoadingIndicator";
import TrackSection from "./TracksSection";
import styled from "styled-components/macro";
import axios from "axios";
import {
  getSavedTracks,
  getRecentlyPlayed,
  getTopTracksLongTerm,
  getTopTracksMediumTerm,
  getTopTracksShortTerm,
} from "../spotify";
import TopTrackSection from "./TopTracksSection";

const TracksStyle = styled.div`
  min-height: 100vh;
  padding: 32px 64px;
`;

const Tracks = () => {
  // getTopTracksLongTerm().then((res) => console.log(JSON.stringify(res)));
  const [savedTracks, setSavedTracks] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);
  const [longTermTracks, setLongTermTracks] = useState(null);
  const [mediumTermTracks, setMediumTermTracks] = useState(null);
  const [shortTermTracks, setShortTermTracks] = useState(null);

  async function getProfileData() {
    axios
      .all([
        getSavedTracks(),
        getRecentlyPlayed(),
        getTopTracksLongTerm(),
        getTopTracksMediumTerm(),
        getTopTracksShortTerm(),
      ])
      .then(
        axios.spread((st, rp, ttlt, ttmt, ttst) => {
          setSavedTracks(st.data);
          setRecentlyPlayed(rp.data);
          setLongTermTracks(ttlt.data);
          setMediumTermTracks(ttmt.data);
          setShortTermTracks(ttst.data);
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

  return savedTracks &&
    recentlyPlayed &&
    longTermTracks &&
    mediumTermTracks &&
    shortTermTracks ? (
    <TracksStyle>
      <TrackSection tracks={savedTracks} title="Saved Tracks" />
      <TrackSection tracks={recentlyPlayed} title="Recently Played" />
      <TopTrackSection
        longtermtracks={longTermTracks}
        mediumtermtracks={mediumTermTracks}
        shorttermtracks={shortTermTracks}
      />
    </TracksStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default Tracks;
