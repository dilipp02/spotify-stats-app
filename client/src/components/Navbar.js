import React from "react";
import Spotify from "./icons/Spotify";
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

const NavbarItemDiv = styled.div`
  flex: 1;
  width: 100%;
  margin: 28px 0px;
  .active {
    color: ${colors.white};
    background-color: ${colors.backgroundgrey};
    border-radius: ${spacing.s};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const NavbarIcon = styled.span`
  margin-right: 20px;
`;

const GithubLogo = styled.div`
  margin-top: 64px;
  text-align: center;
  .btn {
    color: ${colors.fontgrey};
    background: transparent;
    font-size: 32px;
    text-align: center;
    &:hover {
      color: ${colors.white};
    }
  }
`;

const Samp = styled(Link)`
  width: 100%;
  height: 100%;
  color: ${colors.fontgrey};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${colors.white};
  }
`;

const isActive = ({ isCurrent }) =>
  isCurrent ? { className: "active" } : null;

const NavbarItem = (props) => <Samp getProps={isActive} {...props} />;

const Navbar = () => {
  return (
    <NavDiv>
      <NavNav>
        <SpotifyLogo>
          <Link to="/">
            <Spotify />
          </Link>
        </SpotifyLogo>
        <NavbarItems>
          <NavbarItemDiv>
            <NavbarItem to="/">
              <span>
                <NavbarIcon>
                  <i className="fas fa-user"></i>
                </NavbarIcon>
                Profile
              </span>
            </NavbarItem>
          </NavbarItemDiv>
          <NavbarItemDiv>
            <NavbarItem to="/tracks">
              <span>
                <NavbarIcon>
                  <i className="fas fa-compact-disc"></i>
                </NavbarIcon>
                Tracks
              </span>
            </NavbarItem>
          </NavbarItemDiv>
          <NavbarItemDiv>
            <NavbarItem to="/artists">
              <span>
                <NavbarIcon>
                  <i className="fas fa-microphone-alt"></i>
                </NavbarIcon>
                Artists
              </span>
            </NavbarItem>
          </NavbarItemDiv>
          <NavbarItemDiv>
            <NavbarItem to="/playlists">
              <span>
                <NavbarIcon>
                  <i className="fas fa-file-audio"></i>
                </NavbarIcon>
                Playlists
              </span>
            </NavbarItem>
          </NavbarItemDiv>
          <NavbarItemDiv>
            <NavbarItem to="/albumsandshows">
              <span>
                <NavbarIcon>
                  <i className="fas fa-music"></i>
                </NavbarIcon>
                Albums & Shows
              </span>
            </NavbarItem>
          </NavbarItemDiv>
        </NavbarItems>
        <GithubLogo>
          <a
            href="https://github.com/dilipp02/spotify-stats-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              <i className="fab fa-github"></i>
            </button>
          </a>
        </GithubLogo>
      </NavNav>
    </NavDiv>
  );
};

export default Navbar;
