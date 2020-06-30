import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  HeadingBlock,
} from "../style/SpotifyBlock";
import { getFollowedArtists } from "../spotify";
import {
  TracksStyle,
  ShowButtonDiv,
  ShowButton,
  TopTracksButton,
} from "../style/TracksStyle";
import { SectionHeadingStyle, SectionTitleDiv } from "../style/HeadingStyles";

const ImageDiv = styled.div`
  padding-bottom: 100%;
  position: relative;
  img {
    border-radius: 50%;
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
                  <HeadingBlock>{objArtist.name}</HeadingBlock>
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
        {followedArtists ? (
          <ShowButton onClick={showMoreTracks}>
            SHOW {buttonSavedTracks.toUpperCase() + "  "}
            <i
              className={`fas fa-chevron-${
                buttonSavedTracks === "more" ? "down" : "up"
              }`}
            ></i>
          </ShowButton>
        ) : (
          <div></div>
        )}
      </ShowButtonDiv>
    </TracksStyle>
  );
};

export default TopArtists;
