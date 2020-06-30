import React from "react";
import SectionHeading from "./SectionHeading";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  ImageDiv,
} from "../style/SpotifyBlock";

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
              <ImageDiv>
                <img
                  src={objTrack.track.album.images[1].url}
                  alt={objTrack.track.name}
                />
              </ImageDiv>
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
