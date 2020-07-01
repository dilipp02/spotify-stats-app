import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import styled from "styled-components/macro";
import { Router } from "@reach/router";
import Tracks from "./Tracks";
import Artists from "./Artists";
import AlbumsAndShows from "./AlbumsAndShows";
import Playlists from "./Playlists";

const AppDiv = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding-left: 200px;
  width: 100%;
`;

const LoggedIn = () => {
  return (
    <AppDiv>
      <Navbar />
      <Content>
        <Router>
          <Profile path="/" />
          <Tracks path="/tracks" />
          <Artists path="/artists" />
          <Playlists path="/playlists" />
          <AlbumsAndShows path="/albumsandshows" />
        </Router>
      </Content>
    </AppDiv>
  );
};

export default LoggedIn;
