import React from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import IconUser from "./icons/user";
const { colors, fontSize, spacing } = theme;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: ${spacing.xxl};
`;

const UserImg = styled.div`
  width: 200px;
  height: 200px;
  display: block;
  img {
    border-radius: 50%;
  }
`;

const NoImg = styled.div`
  border: 2px solid ${colors.white};
  border-radius: 50%;
  height: 100%;
  padding: 30px;
`;

const UserInfoNameStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const UserInfoStats = styled.div`
  width: max-content;
  display: grid;
  gap: ${spacing.xxl};
  grid-template-columns: repeat(3, 1fr);
  font-size: ${fontSize.m};
`;

const UserInfoStatsNum = styled.div`
  display: block;
  text-align: center;
  color: ${colors.green};
  font-size: ${fontSize.l};
  margin-bottom: ${spacing.m};
`;

const ProfileUserInfo = (props) => {
  return (
    <UserInfo>
      <UserImg>
        {props.user.images[0] ? (
          <img
            src={props.user.images[0].url}
            alt={props.user.display_name}
            height="200px"
            width="200px"
          />
        ) : (
          <NoImg>
            <IconUser />
          </NoImg>
        )}
      </UserImg>
      <UserInfoNameStats>
        <a
          className="unStyledLink"
          href={props.user.external_urls.spotify}
          target="_blank"
        >
          <h1 className="title">{props.user.display_name}</h1>
        </a>
        <UserInfoStats>
          <div>
            <UserInfoStatsNum>{props.user.followers.total}</UserInfoStatsNum>
            <span>FOLLOWERS</span>
          </div>
          <div>
            <UserInfoStatsNum>{props.user.followers.total}</UserInfoStatsNum>
            <span>FOLLOWERS</span>
          </div>
          <div>
            <UserInfoStatsNum>{props.user.followers.total}</UserInfoStatsNum>
            <span>FOLLOWERS</span>
          </div>
        </UserInfoStats>
      </UserInfoNameStats>
    </UserInfo>
  );
};

export default ProfileUserInfo;
