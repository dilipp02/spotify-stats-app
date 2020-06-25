import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ProfileUserInfo from "./ProfileUserInfo";
import user from "../samp/userData.json";
import savedtracks from "../samp/savedTracks.json";
import savedalbums from "../samp/savedAlbums.json";
import savedshows from "../samp/savedShows.json";
// import player from "../samp/currentPlayer.json";
// import axios from "axios";
// import {
//   getUser,
//   getSavedTracks,
//   getSavedAlbums,
//   getSavedShows,
// } from "../spotify/index";
import styled from "styled-components/macro";
import theme from "../style/theme";
import Player from "./Player";
import ProfileSavedTracks from "./ProfileSavedTracks";
import ProfileSavedAlbums from "./ProfileSavedAlbums";
import ProfileSavedShows from "./ProfileSavedShows";

const { colors, fontSize, spacing } = theme;

// getCurrentTrack().then((res) => console.log(JSON.stringify(res)));
const SectionTitle = styled.h4`
  display: inline;
`;

const UserProfile = styled.div`
  width: 100%;
`;

const PlayerDiv = styled.div`
  margin: ${spacing.base} ${spacing.xxl};
`;

const PlayerStyle = styled.div`
  height: 150px;
  margin: ${spacing.base} 0px ${spacing.xxl} 0px;
  background-color: ${colors.backgroundgrey};
  border-radius: 16px;
  padding: ${spacing.base};
`;

const LoaderStyle = styled.div`
  height: 100vh;
  width: 100%;
`;

const Profile = () => {
  // getSavedShows().then((res) => console.log(JSON.stringify(res)));
  // const [user, setUser] = useState(null);

  // async function getProfileData() {
  //   axios.all([getUser()]).then(
  //     axios.spread((user) => {
  //       setUser(user.data);
  //     })
  //   );
  // }

  // async function getProfileData() {
  //   getCurrentTrack().then((res) => console.log(res));
  // }

  // useEffect(() => {
  //   getProfileData();
  // }, [setUser]);

  return user ? (
    <UserProfile>
      <ProfileUserInfo user={user} />
      <PlayerDiv>
        <a className="styledLink" href="#">
          <SectionTitle>Current playing</SectionTitle>
        </a>
        <PlayerStyle>
          <Player />
        </PlayerStyle>
      </PlayerDiv>
      <ProfileSavedTracks tracks={savedtracks.data} />
      <ProfileSavedAlbums albums={savedalbums.data} />
      <ProfileSavedShows shows={savedshows.data} />
    </UserProfile>
  ) : (
    <LoaderStyle>
      <LoadingIndicator type="Audio" />
    </LoaderStyle>
  );
};

export default Profile;
