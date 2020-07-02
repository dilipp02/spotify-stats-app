import React from "react";
import MusicIcon from "./icons/MusicIcon";
import { formatDuration } from "../utils";
import { Link } from "@reach/router";
import { ArtistNames } from "../style/SpotifyBlock";
import {
  TracksStyle,
  SavedTracks,
  TracksNameSection,
  TimeStyle,
} from "../style/TracksStyle";
import SectionHeading from "./SectionHeading";

const TrackSection = (props) => {
  return (
    <TracksStyle>
      <SectionHeading heading="Saved Tracks" />
      {props.tracks ? (
        props.tracks.items.slice(0, 5).map((objTrack) => (
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
                  <a
                    key={objArtist.name.replace(" ", "").toLowerCase()}
                    href={objArtist.external_urls.spotify}
                    className="styledLink artistlink"
                    target="_blank"
                    rel="noreferrer"
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
        ))
      ) : (
        <h1>No data</h1>
      )}
    </TracksStyle>
  );
};

export default TrackSection;
