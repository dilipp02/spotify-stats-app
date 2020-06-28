import React, { useState } from "react";
import Spotify from "./icons/Spotify";
// import { Link } from "@reach/router";
import styled from "styled-components/macro";
import theme from "../style/theme";
import { Link } from "@reach/router";

const { colors, fontSize, spacing } = theme;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.black};
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
  height: 65%;
  align-items: center;
  padding: 0px ${spacing.m};
`;

const NavbarItem = styled(Link)`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${spacing.l} 0px;
  color: ${colors.fontgrey};
  &:hover {
    color: ${colors.white};
  }
  &.active {
    color: ${colors.white};
    background-color: ${colors.backgroundgrey};
    border-radius: ${spacing.s};
  }
`;

const NavbarIcon = styled.span`
  margin-right: 20px;
`;

const Navbar = () => {
  const [active, setActive] = useState("Profile");

  return (
    <NavDiv>
      <NavNav>
        <SpotifyLogo>
          <Link to="/">
            <Spotify />
          </Link>
        </SpotifyLogo>
        <NavbarItems>
          <NavbarItem
            to="/"
            className={active == "Profile" ? "active" : ""}
            onClick={() => {
              setActive("Profile");
            }}
          >
            <span>
              <NavbarIcon>
                <i className="fas fa-user"></i>
              </NavbarIcon>
              Profile
            </span>
          </NavbarItem>
          <NavbarItem
            to="/tracks"
            className={active == "Tracks" ? "active" : ""}
            onClick={() => {
              setActive("Tracks");
            }}
          >
            <span>
              <NavbarIcon>
                <i className="fas fa-compact-disc"></i>
              </NavbarIcon>
              Tracks
            </span>
          </NavbarItem>
          <NavbarItem
            to="/"
            className={active == "Artists" ? "active" : ""}
            onClick={() => {
              setActive("Artists");
            }}
          >
            <span>
              <NavbarIcon>
                <i className="fas fa-microphone-alt"></i>
              </NavbarIcon>
              Artists
            </span>
          </NavbarItem>
          <NavbarItem
            to="/"
            className={active == "Playlists" ? "active" : ""}
            onClick={() => {
              setActive("Playlists");
            }}
          >
            <span>
              <NavbarIcon>
                <i className="fas fa-file-audio"></i>
              </NavbarIcon>
              Playlists
            </span>
          </NavbarItem>
          <NavbarItem
            to="/"
            className={active == "Albums&Shows" ? "active" : ""}
            onClick={() => {
              setActive("Albums&Shows");
            }}
          >
            <span>
              <NavbarIcon>
                <i className="fas fa-music"></i>
              </NavbarIcon>
              Albums & Shows
            </span>
          </NavbarItem>
        </NavbarItems>
      </NavNav>
    </NavDiv>
  );
};

export default Navbar;
