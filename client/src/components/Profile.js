import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ProfileUserInfo from "./ProfileUserInfo";
import user from "../samp/userData.json";
import { getProfileInfo, getCurrentTrack } from "../spotify/index";
import styled from "styled-components/macro";
import theme from "../style/theme";
const { colors, fontSize, spacing } = theme;

// getCurrentTrack().then((res) => console.log(JSON.stringify(res)));
const SectionTitle = styled.span`
  margin-left: ${spacing.xxl};
  margin-top: ${spacing.base};
  font-size: ${fontSize.l};
  color: ${colors.white};
`;

const UserProfile = styled.div`
  width: 100%;
`;

const Player = styled.div`
  height: 200px;
  margin: ${spacing.base} ${spacing.xxl};
  background-color: ${colors.backgroundgrey};
  border-radius: 16px;
`;

const Profile = () => {
  // const [user, setUser] = useState(null);

  // async function getUserData() {
  //   const userData = await getUser();
  //   setUser(userData);
  // }

  // useEffect(() => {
  //   // getUserData();
  //   getCurrentTrack().then((res) => res.data);
  // });
  return user ? (
    <UserProfile>
      <ProfileUserInfo user={user} />
      <a className="styledLink" href="#">
        <SectionTitle>Current playing</SectionTitle>
      </a>
      <Player></Player>
    </UserProfile>
  ) : (
    <LoadingIndicator />
  );
};

export default Profile;
