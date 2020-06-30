import React, { useState } from "react";
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

const FollowedArtists = (props) => {
  const [followedArtists, setFollowedArtists] = useState(
    props.artists.artists.items.slice(0, 6)
  );
  const [buttonSavedTracks, setButtonSavedTracks] = useState("more");

  function showMoreTracks() {
    if (buttonSavedTracks === "more") {
      setFollowedArtists(props.artists.artists.items);
      setButtonSavedTracks("less");
    } else {
      setFollowedArtists(props.artists.artists.items.slice(0, 6));
      setButtonSavedTracks("more");
    }
  }

  return (
    <TracksStyle>
      <SavedTracks>
        <SectionHeadingStyle>
          <SectionTitleDiv>
            <a className="styledLink" href="#">
              <h2>Followed Artists</h2>
            </a>
          </SectionTitleDiv>
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

export default FollowedArtists;
