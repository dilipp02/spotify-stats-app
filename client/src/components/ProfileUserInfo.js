import React from "react";
import styled from "styled-components/macro";

const UserInfo = styled.div`
  display: flex;
`;

const UserImg = styled.div`
  margin: 30px 30px 30px 60px;
  img {
    border-radius: 50%;
  }
`;

const UserInfoNameStats = styled.div`
  width: 100%;
  margin: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInfoStats = styled.div`
  margin: 20px 50px 0px 50px;
  width: 100%;
  display: flex;
  justify-content: center;
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
