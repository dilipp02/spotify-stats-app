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

const ProfileSavedAlbums = (props) => {
  return (
    <SavedTracks>
      <SectionHeading heading="Saved Albums" />
      {props.albums ? (
        props.albums.items.slice(0, 7).map((objTrack) => (
          <SectionSong key={objTrack.album.name.replace(" ", "").toLowerCase()}>
            <img src={objTrack.album.images[1].url} alt={objTrack.album.name} />
            <SectionSongArtists>
              <a
                href={objTrack.album.external_urls.spotify}
                className="styledLink"
                target="_blank"
              >
                <h6>{objTrack.album.name}</h6>
              </a>
              {objTrack.album.artists.map((objArtist) => (
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
        ))
      ) : (
        <h1>No Data</h1>
      )}
    </SavedTracks>
  );
};

export default ProfileSavedAlbums;
