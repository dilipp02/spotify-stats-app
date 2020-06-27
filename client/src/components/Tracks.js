import React, { useState } from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import SectionHeading from "./SectionHeading";
import savedTracks from "../samp/savedTracks.json";
import MusicIcon from "./icons/MusicIcon";
import { formatDuration } from "../utils";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";

const { colors, fontSize, spacing } = theme;

const TracksStyle = styled.div`
  min-height: 100vh;
  padding: 64px 64px;
`;

const SavedTracks = styled.div`
  margin-top: ${spacing.m};
  padding: ${spacing.m} ${spacing.base};
  display: flex;
  align-items: center;
  img {
    margin: 0px ${spacing.base};
  }
  &:hover {
    background-color: ${colors.backgroundgrey};
    img {
      opacity: 0.5;
    }
  }
`;

const ArtistNames = styled.span`
  color: ${colors.fontgrey};
  font-size: ${fontSize.m};
`;

const TracksNameSection = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimeStyle = styled.span`
  font-size: ${fontSize.m};
  margin: 0px ${spacing.base};
  color: ${colors.fontgrey};
`;

const Tracks = () => {
  const [savedtracks, setSavedTracks] = useState(
    savedTracks.data.items.slice(0, 5)
  );
  const [buttonSavedTracks, setButtonSavedTracks] = useState("more");

  async function showMoreTracks() {
    if (buttonSavedTracks === "more") {
      setSavedTracks(savedTracks.data.items);
      setButtonSavedTracks("less");
    } else {
      setSavedTracks(savedTracks.data.items.slice(0, 5));
      setButtonSavedTracks("more");
    }
  }

  return savedtracks ? (
    <TracksStyle>
      <SectionHeading heading="Saved Tracks" />
      {savedtracks.map((objTrack) => (
        <Link
          to={`/tracks/${objTrack.track.id}`}
          key={objTrack.track.name.replace(" ", "").toLowerCase()}
        >
          <SavedTracks>
            <MusicIcon />
            <img
              src={objTrack.track.album.images[2].url}
              height="50px"
              width="50px"
              alt={objTrack.track.name}
            />
            <TracksNameSection>
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
            </TracksNameSection>
            <TimeStyle>{formatDuration(objTrack.track.duration_ms)}</TimeStyle>
          </SavedTracks>
        </Link>
      ))}
      <button onClick={showMoreTracks}>
        SHOW {buttonSavedTracks.toUpperCase()}
      </button>
    </TracksStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default Tracks;
