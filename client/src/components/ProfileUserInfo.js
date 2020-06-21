import React from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
const { spacing } = theme;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${spacing.xxl};
`;

const UserImg = styled.div`
  display: block;
  img {
    border-radius: 50%;
  }
`;

const UserInfoNameStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserInfoStats = styled.div`
  width: 100%;
  display: grid;
`;

const ProfileUserInfo = (props) => {
  return (
    <UserInfo>
      <UserImg>
        <img
          src={props.user.images[0].url}
          alt={props.user.display_name}
          height="200px"
          width="200px"
        />
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
          <span className="UserInfo-NameStats-stats-item">
            <div className="UserInfo-NameStats-stats-item-num">
              {props.user.followers.total}
            </div>{" "}
            FOLLOWERS
          </span>
          <span className="UserInfo-NameStats-stats-item">
            <div className="UserInfo-NameStats-stats-item-num">
              {props.user.followers.total}
            </div>{" "}
            FOLLOWING
          </span>
          <span className="UserInfo-NameStats-stats-item">
            <div className="UserInfo-NameStats-stats-item-num">
              {props.user.followers.total}
            </div>{" "}
            PLAYLISTS
          </span>
        </UserInfoStats>
      </UserInfoNameStats>
    </UserInfo>
  );
};

export default ProfileUserInfo;
