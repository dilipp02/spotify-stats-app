import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "@reach/router";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  HeadingBlock,
} from "../style/SpotifyBlock";
import { TracksStyle, ShowButtonDiv, ShowButton } from "../style/TracksStyle";
import { getFollowedArtists } from "../spotify";
import { SectionHeadingStyle, SectionTitleDiv } from "../style/HeadingStyles";

const ImageDiv = styled.div`
  padding-bottom: 100%;
  position: relative;
  img {
    border-radius: 50%;
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

export default FollowedArtists;
