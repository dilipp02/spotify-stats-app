import React from "react";
import NavbarList from "./NavbarList";
import Spotify from "./icons/Spotify";
// import { Link } from "@reach/router";
import styled from "styled-components/macro";
import theme from "../style/theme";
const { fontSize } = theme;

const NavDiv = styled.div`
  color: #ababab;
  display: flex;
  align-items: center;
  background-color: #040404;
  height: 100vh;
  width: 200px;
  letter-spacing: normal;
  font-size: ${fontSize.m};
  position: fixed;
`;

const NavNav = styled.nav`
  height: 100vh;
  width: 100%;
`;

const SpotifyLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const NavbarItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 60%;
  align-items: center;
  padding-left: 0px;
`;

const Navbar = () => {
  return (
    <NavDiv>
      <NavNav>
        <SpotifyLogo>
          <Spotify />
        </SpotifyLogo>
        <NavbarItems>
          <NavbarList name="Profile" logoClass="fas fa-user" />
          <NavbarList name="Tracks" logoClass="fas fa-compact-disc" />
          <NavbarList name="Artists" logoClass="fas fa-microphone-alt" />
          <NavbarList name="Recent" logoClass="fas fa-music" />
          <NavbarList name="Playlists" logoClass="fas fa-file-audio" />
        </NavbarItems>
      </NavNav>
    </NavDiv>
  );
};

export default Navbar;
