import React, { useState } from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  ImageDiv,
} from "../style/SpotifyBlock";
import { getFollowedArtists } from "../spotify";
import SectionHeading from "./SectionHeading";

const { colors, fontSize, spacing } = theme;

const ProfileFollowedArtists = (props) => {
  const [followedArtists, setFollowedArtists] = useState(
    props.artists.artists.items.slice(0, 7)
  );

  return (
    <SavedTracks>
      <SectionHeading heading="FollowedArtists" />
      {followedArtists ? (
        followedArtists.map((objArtist) => (
          <a
            href={objArtist.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={objArtist.name.replace(" ", "").toLowerCase()}
          >
            <SectionSong>
              <ImageDiv>
                <img src={objArtist.images[1].url} alt={objArtist.name} />
              </ImageDiv>
              <SectionSongArtists>
                <h4>{objArtist.name}</h4>
                <ArtistNames>Artist</ArtistNames>
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

export default ProfileFollowedArtists;
