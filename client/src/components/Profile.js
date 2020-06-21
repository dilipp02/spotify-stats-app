import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ProfileUserInfo from "./ProfileUserInfo";
import user from "../samp/userData.json";
import { getProfileInfo, getCurrentTrack } from "../spotify/index";
import styled from "styled-components/macro";

// getCurrentTrack().then((res) => console.log(JSON.stringify(res)));
const SectionTitle = styled.h3`
  margin: 5px 0px 0px 50px;
`;

const UserProfile = styled.div`
  width: 100%;
`;

const Player = styled.div`
  height: 200px;
  width: 90%;
  margin: 15px 50px 20px 50px;
  background-color: #282828;
  border-radius: 30px;
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
