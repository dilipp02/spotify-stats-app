import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  HeadingBlock,
} from "../style/SpotifyBlock";
import SectionHeading from "./SectionHeading";

const ImageDiv = styled.div`
  padding-bottom: 100%;
  position: relative;
  img {
    border-radius: 50%;
  }
`;

const ProfileFollowedArtists = (props) => {
  const [followedArtists, setFollowedArtists] = useState(
    props.artists.artists.items.slice(0, 6)
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
                <HeadingBlock>{objArtist.name}</HeadingBlock>
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
