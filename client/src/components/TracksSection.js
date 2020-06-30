import React, { useState } from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import MusicIcon from "./icons/MusicIcon";
import { formatDuration } from "../utils";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";
import { ArtistNames } from "../style/SpotifyBlock";

const { colors, fontSize, spacing } = theme;

const TracksStyle = styled.div`
  margin-top: ${spacing.xxl};
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

const TracksNameSection = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.fontgrey};
`;

const TimeStyle = styled.span`
  font-size: ${fontSize.m};
  margin: 0px ${spacing.base};
  color: ${colors.fontgrey};
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

const TrackSection = (props) => {
  const [savedtracks, setSavedTracks] = useState(
    props.tracks.items.slice(0, 5)
  );
  const [buttonSavedTracks, setButtonSavedTracks] = useState("more");

  function showMoreTracks() {
    if (buttonSavedTracks === "more") {
      setSavedTracks(props.tracks.items);
      setButtonSavedTracks("less");
    } else {
      setSavedTracks(props.tracks.items.slice(0, 5));
      setButtonSavedTracks("more");
    }
  }

  return savedtracks ? (
    <TracksStyle>
      <div>
        <a className="styledLink" href="#">
          <h2>{props.title}</h2>
        </a>
      </div>
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
              <ArtistNames>
                &nbsp;&middot;&nbsp;&nbsp;
                {objTrack.track.album.name}
              </ArtistNames>
            </TracksNameSection>
            <TimeStyle>{formatDuration(objTrack.track.duration_ms)}</TimeStyle>
          </SavedTracks>
        </Link>
      ))}
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
  ) : (
    <LoadingIndicator />
  );
};

export default TrackSection;
