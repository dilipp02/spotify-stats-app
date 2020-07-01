import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  HeadingBlock,
} from "../style/SpotifyBlock";
import { TracksStyle, ShowButtonDiv, ShowButton } from "../style/TracksStyle";
import { SectionHeadingStyle, SectionTitleDiv } from "../style/HeadingStyles";

const ImageDiv = styled.div`
  padding-bottom: 100%;
  position: relative;
  img {
    border-radius: 8px;
  }
`;

const SavedShows = (props) => {
  const [savedShows, setSavedShows] = useState(props.shows.items.slice(0, 6));
  const [buttonSavedTracks, setButtonSavedTracks] = useState("more");

  function showMoreTracks() {
    if (buttonSavedTracks === "more") {
      setSavedShows(props.shows.items);
      setButtonSavedTracks("less");
    } else {
      setSavedShows(props.shows.items.slice(0, 6));
      setButtonSavedTracks("more");
    }
  }

  return (
    <TracksStyle>
      <SavedTracks>
        <SectionHeadingStyle>
          <SectionTitleDiv>
            <a className="styledLink" href="#">
              <h2>Saved Shows</h2>
            </a>
          </SectionTitleDiv>
        </SectionHeadingStyle>
        {savedShows ? (
          savedShows.map((objTrack) => (
            <a
              href={objTrack.show.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              key={objTrack.show.name.replace(" ", "").toLowerCase()}
            >
              <SectionSong>
                <ImageDiv>
                  <img
                    src={objTrack.show.images[1].url}
                    alt={objTrack.show.name}
                  />
                </ImageDiv>
                <SectionSongArtists>
                  <HeadingBlock>{objTrack.show.name}</HeadingBlock>
                  <ArtistNames>{objTrack.show.publisher}</ArtistNames>
                </SectionSongArtists>
              </SectionSong>
            </a>
          ))
        ) : (
          <h1>No Data</h1>
        )}
      </SavedTracks>
      <ShowButtonDiv>
        {savedShows ? (
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

export default SavedShows;
