import React from "react";
import SectionHeading from "./SectionHeading";
import styled from "styled-components/macro";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  HeadingBlock,
} from "../style/SpotifyBlock";

const ImageDiv = styled.div`
  padding-bottom: 100%;
  position: relative;
  img {
    border-radius: 8px;
  }
`;

const ProfileSavedShows = (props) => {
  return (
    <SavedTracks>
      <SectionHeading heading="Saved Shows" link="/albumsandshows" />
      {props.shows ? (
        props.shows.items.slice(0, 6).map((objTrack) => (
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
  );
};

export default ProfileSavedShows;
