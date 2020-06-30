import React, { useState } from "react";
import MusicIcon from "./icons/MusicIcon";
import { formatDuration } from "../utils";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";
import { ArtistNames } from "../style/SpotifyBlock";
import {
  TracksStyle,
  SavedTracks,
  TracksNameSection,
  TimeStyle,
  ShowButtonDiv,
  ShowButton,
} from "../style/TracksStyle";

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

  return (
    <TracksStyle>
      <div>
        <a className="styledLink" href="#">
          <h2>{props.title}</h2>
        </a>
      </div>
      {savedtracks ? (
        <div>
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
                <TimeStyle>
                  {formatDuration(objTrack.track.duration_ms)}
                </TimeStyle>
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
        </div>
      ) : (
        <h1>No data</h1>
      )}
    </TracksStyle>
  );
};

export default TrackSection;
