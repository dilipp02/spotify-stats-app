import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  ImageDiv,
} from "../style/SpotifyBlock";
import { getFollowedArtists } from "../spotify";

const { colors, fontSize, spacing } = theme;

const TracksStyle = styled.div`
  margin-top: ${spacing.xxl};
`;

const SectionHeadingStyle = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitleDiv = styled.div`
  flex: 1;
`;

const ShowButtonDiv = styled.div`
  text-align: center;
`;

const ShowButton = styled.button`
  background-color: transparent;
  color: ${colors.white};
  &:hover {
    transform: scale(1.06);
  }
`;

const TopTracksButton = styled.button`
  background-color: transparent;
  color: ${colors.fontgrey};
  letter-spacing: 1.76px;
  margin: 0px ${spacing.s};
  font-size: ${fontSize.sm};
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

const TopArtists = (props) => {
  // getFollowedArtists().then((res) => console.log(JSON.stringify(res)));

  const [currentArtists, setCurrentArtists] = useState(props.longtermartists);
  const [active, setActive] = useState("ALL TIME");

  const [followedArtists, setFollowedArtists] = useState(
    props.longtermartists.items.slice(0, 6)
  );
  const [buttonSavedTracks, setButtonSavedTracks] = useState("more");

  function showMoreTracks() {
    if (buttonSavedTracks === "more") {
      setFollowedArtists(currentArtists.items);
      setButtonSavedTracks("less");
    } else {
      setFollowedArtists(currentArtists.items.slice(0, 6));
      setButtonSavedTracks("more");
    }
  }

  async function currentTracksFunc(e) {
    if (e.target.innerText == "ALL TIME")
      setCurrentArtists(props.longtermartists);
    else if (e.target.innerText == "6 MONTHS")
      setCurrentArtists(props.mediumtermartists);
    else setCurrentArtists(props.shorttermartists);

    setFollowedArtists(currentArtists.items.slice(0, 6));
    setActive(e.target.innerText);
    setButtonSavedTracks("more");

    // console.log(currentTracks);
    // console.log(savedtracks);
    // console.log(active);
    // console.log(buttonSavedTracks);
  }

  useEffect(() => {});

  return (
    <TracksStyle>
      <SavedTracks>
        <SectionHeadingStyle>
          <SectionTitleDiv>
            <a className="styledLink" href="#">
              <h2>Top Artists</h2>
            </a>
          </SectionTitleDiv>
          <TopTracksButton
            onClick={currentTracksFunc}
            className={active === "ALL TIME" ? "active" : ""}
          >
            <span>ALL TIME</span>
          </TopTracksButton>
          <TopTracksButton
            onClick={currentTracksFunc}
            className={active === "6 MONTHS" ? "active" : ""}
          >
            <span>6 MONTHS</span>
          </TopTracksButton>
          <TopTracksButton
            onClick={currentTracksFunc}
            className={active === "4 WEEKS" ? "active" : ""}
          >
            <span>4 WEEKS</span>
          </TopTracksButton>
        </SectionHeadingStyle>
        {followedArtists ? (
          followedArtists.map((objArtist) => (
            <a
              href={objArtist.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              key={objArtist.name.replace(" ", "").toLowerCase()}
            >
              <SectionSong>
                <ImageDiv>
                  <img src={objArtist.images[1].url} alt={objArtist.name} />
                </ImageDiv>
                <SectionSongArtists>
                  <h4>{objArtist.name}</h4>
                  <ArtistNames>Artist</ArtistNames>
                </SectionSongArtists>
              </SectionSong>
            </a>
          ))
        ) : (
          <h1>No Data</h1>
        )}
      </SavedTracks>
      <ShowButtonDiv>
        <ShowButton onClick={showMoreTracks}>
          SHOW {buttonSavedTracks.toUpperCase() + "  "}
          <i
            className={`fas fa-chevron-${
              buttonSavedTracks === "more" ? "down" : "up"
            }`}
          ></i>
        </ShowButton>
      </ShowButtonDiv>
    </TracksStyle>
  );
};

export default TopArtists;
