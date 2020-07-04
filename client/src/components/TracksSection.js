import React, { useState } from "react";
import MusicIcon from "./icons/MusicIcon";
import { formatDuration } from "../utils";
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
        <h2>{props.title}</h2>
      </div>
      {savedtracks ? (
        <div>
          {savedtracks.map((objTrack) => (
            <Link
              to={`/track/${objTrack.track.id}`}
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
                    <Link
                      key={objArtist.name.replace(" ", "").toLowerCase()}
                      to={`/artist/${objArtist.id}`}
                      className="styledLink artistlink"
                    >
                      <span>
                        {" "}
                        {objArtist.name}
                        {index < objTrack.track.artists.length - 1 ? (
                          <span>,</span>
                        ) : (
                          <span> </span>
                        )}
                      </span>
                    </Link>
                  ))}
                  &nbsp;&middot;&nbsp;&nbsp;
                  <Link
                    to={`/album/${objTrack.track.album.id}`}
                    className="styledLink artistlink"
                  >
                    <span> {objTrack.track.album.name}</span>
                  </Link>
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
