import React from "react";
import SectionHeading from "./SectionHeading";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ImageDiv,
} from "../style/SpotifyBlock";

const ProfileSavedShows = (props) => {
  return (
    <SavedTracks>
      <SectionHeading heading="Saved Shows" />
      {props.shows ? (
        props.shows.items.slice(0, 7).map((objTrack) => (
          <a
            href={objTrack.show.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={objTrack.show.name.replace(" ", "").toLowerCase()}
          >
            <SectionSong>
              <ImageDiv>
                <img
                  src={objTrack.show.images[1].url}
                  alt={objTrack.show.name}
                />
              </ImageDiv>
              <SectionSongArtists>
                <h4>{objTrack.show.name}</h4>
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

export default ProfileSavedShows;
