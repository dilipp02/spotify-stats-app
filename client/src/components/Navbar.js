import React from "react";
import NavbarList from "./NavbarList";
// import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <div className="NavDiv">
      <nav className="NavNav">
        <div className="spotify-logo">
          <img src="http://placecorgi.com/50/50" alt="" />
        </div>
        <ul className="NavbarItems">
          <NavbarList name="Profile" logoClass="fas fa-user" />
          <NavbarList name="Tracks" logoClass="fas fa-compact-disc" />
          <NavbarList name="Artists" logoClass="fas fa-microphone-alt" />
          <NavbarList name="Recent" logoClass="fas fa-music" />
          <NavbarList name="Playlists" logoClass="fas fa-file-audio" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
