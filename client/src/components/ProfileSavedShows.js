import React from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import SectionHeading from "./SectionHeading";

const { colors, fontSize, spacing } = theme;

const SavedTracks = styled.div`
  margin: ${spacing.base} ${spacing.xxl};
  display: grid;
  gap: ${spacing.base};
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
`;

const SectionSong = styled.div`
  background-color: ${colors.backgroundgrey};
  border-radius: 16px;
  padding: ${spacing.base};
  font-size: ${fontSize.m};
  img {
    max-height: 100%;
    width: 100%;
    border-radius: ${spacing.base};
  }
  &:hover {
    img {
      opacity: 0.5;
    }
  }
`;

const SectionSongArtists = styled.div`
  min-height: 62px;
  margin-top: ${spacing.base};
`;

const ProfileSavedShows = (props) => {
  return (
    <SavedTracks>
      <SectionHeading heading="Saved Shows" />
      {props.shows ? (
        props.shows.items.slice(0, 7).map((objTrack) => (
          <a
            href={objTrack.show.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={objTrack.show.name.replace(" ", "").toLowerCase()}
          >
            <SectionSong>
              <img src={objTrack.show.images[1].url} alt={objTrack.show.name} />
              <SectionSongArtists>
                <h4>{objTrack.show.name}</h4>
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
