import React from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import SectionHeading from "./ProfileSectionHeading";

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
          <SectionSong key={objTrack.show.name.replace(" ", "").toLowerCase()}>
            <img src={objTrack.show.images[1].url} alt={objTrack.show.name} />
            <SectionSongArtists>
              <a
                href={objTrack.show.external_urls.spotify}
                className="styledLink"
                target="_blank"
              >
                <h6>{objTrack.show.name}</h6>
              </a>
            </SectionSongArtists>
          </SectionSong>
        ))
      ) : (
        <h1>No Data</h1>
      )}
    </SavedTracks>
  );
};

export default ProfileSavedShows;
