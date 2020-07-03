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
      <SectionHeading heading="FollowedArtists" link="/artists" />
      {followedArtists ? (
        followedArtists.map((objArtist) => (
          <Link
            to={`/artist/${objArtist.id}`}
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
          </Link>
        ))
      ) : (
        <h1>No Data</h1>
      )}
    </SavedTracks>
  );
};

export default ProfileFollowedArtists;
