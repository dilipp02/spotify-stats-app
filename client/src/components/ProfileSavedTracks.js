import React, { useEffect, useState } from "react";
import savedtracks from "../samp/savedTracks.json";
import styled from "styled-components/macro";
import theme from "../style/theme";

const { colors, fontSize, spacing } = theme;

const SavedTracks = styled.div`
  margin: ${spacing.base} ${spacing.xxl};
  display: grid;
  gap: ${spacing.base};
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
`;

const SectionTitle = styled.h4`
  display: inline;
`;

const SectionHeading = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionSong = styled.div`
  background-color: ${colors.backgroundgrey};
  border-radius: 16px;
  padding: ${spacing.base};
  font-size: ${fontSize.m};
  img {
    max-height: 100%;
    width: 100%;
  }
`;

const SectionSongArtists = styled.div`
  min-height: 62px;
  margin-top: ${spacing.base};
`;

const ArtistNames = styled.span`
  color: ${colors.fontgrey};
  font-size: ${fontSize.sm};
`;

const SeeAllLink = styled.span`
  color: ${colors.fontgrey};
  letter-spacing: 1.76px;
  font-size: ${fontSize.sm};
`;

const ProfileSavedTracks = () => {
  return (
    <SavedTracks>
      <SectionHeading>
        <a className="styledLink" href="#">
          <SectionTitle>Saved Tracks</SectionTitle>
        </a>
        <a className="styledLink" href="#">
          <SeeAllLink>SEE ALL</SeeAllLink>
        </a>
      </SectionHeading>
      {savedtracks.data.items.slice(0, 7).map((objTrack) => (
        <SectionSong key={objTrack.track.name.replace(" ", "").toLowerCase()}>
          <img
            src={objTrack.track.album.images[1].url}
            alt={objTrack.track.name}
          />
          <SectionSongArtists>
            <a
              href={objTrack.track.external_urls.spotify}
              className="styledLink"
              target="_blank"
            >
              <h6>{objTrack.track.name}</h6>
            </a>
            {objTrack.track.artists.map((objArtist) => (
              <a
                key={objArtist.name.replace(" ", "").toLowerCase()}
                href={objArtist.external_urls.spotify}
                className="styledLink"
                target="_blank"
              >
                <ArtistNames>{objArtist.name}, </ArtistNames>
              </a>
            ))}
          </SectionSongArtists>
        </SectionSong>
      ))}
    </SavedTracks>
  );
};

export default ProfileSavedTracks;
