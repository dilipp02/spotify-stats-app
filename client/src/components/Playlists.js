import React, { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { PageStyle } from "../style/PageStyle";
import styled from "styled-components/macro";
import { Link } from "@reach/router";
import { getPlaylists } from "../spotify";
import theme from "../style/theme";
// import playlistss from "../samp/playlists.json";
import { ArtistNames } from "../style/SpotifyBlock";

const { spacing, transition } = theme;

const GridDiv = styled.div`
  margin-top: ${spacing.xxl};
  display: grid;
  gap: ${spacing.base};
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  img {
    max-height: 100%;
    width: 100%;
    transition: ${transition};
  }
`;

export const SectionHeadingStyle = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing.xxl};
`;

export const SectionTitleDiv = styled.div`
  flex: 1;
`;

export const PlaylistInfo = styled.div`
  text-align: center;
  &:hover {
    img {
      opacity: 0.5;
    }
    h3 {
      text-decoration: underline;
    }
  }
`;

const Playlists = () => {
  // getPlaylists().then((res) => console.log(JSON.stringify(res)));

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getPlaylists().then((pl) => setPlaylists(pl));
  }, []);

  return playlists ? (
    <PageStyle>
      <SectionHeadingStyle>
        <SectionTitleDiv>
          <h2>Your Playlists</h2>
        </SectionTitleDiv>
      </SectionHeadingStyle>
      <GridDiv>
        {playlists.data.items.length ? (
          playlists.data.items.map((objPlaylist) => (
            <Link to={`/playlist/${objPlaylist.id}`} key={objPlaylist.id}>
              <PlaylistInfo>
                <img src={objPlaylist.images[0].url} alt={objPlaylist.name} />
                <h3>{objPlaylist.name}</h3>
                <ArtistNames>{objPlaylist.tracks.total} Tracks</ArtistNames>
              </PlaylistInfo>
            </Link>
          ))
        ) : (
          <h1>No data</h1>
        )}
      </GridDiv>
    </PageStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default Playlists;
