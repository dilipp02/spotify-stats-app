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

const ArtistNames = styled.span`
  color: ${colors.fontgrey};
  font-size: ${fontSize.sm};
`;

const ProfileSavedTracks = (props) => {
  return (
    <SavedTracks>
      <SectionHeading heading="Saved Tracks" />
      {props.tracks ? (
        props.tracks.items.slice(0, 7).map((objTrack) => (
          <a
            href={objTrack.track.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={objTrack.track.name.replace(" ", "").toLowerCase()}
          >
            <SectionSong>
              <img
                src={objTrack.track.album.images[1].url}
                alt={objTrack.track.name}
              />
              <SectionSongArtists>
                <h4>{objTrack.track.name}</h4>

                {objTrack.track.artists.map((objArtist, index) => (
                  <a
                    key={objArtist.name.replace(" ", "").toLowerCase()}
                    href={objArtist.external_urls.spotify}
                    className="styledLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArtistNames>
                      {" "}
                      {objArtist.name}
                      {index < objTrack.track.artists.length - 1 ? (
                        <span>,</span>
                      ) : (
                        <span> </span>
                      )}
                    </ArtistNames>
                  </a>
                ))}
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

export default ProfileSavedTracks;
