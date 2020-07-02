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
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
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
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 72px;
    font-weight: 900;
    letter-spacing: -0.04em;
  }
  &:hover {
    h1 {
      color: ${colors.green};
      text-decoration: none;
    }
  }
`;

const Num = styled.span`
  text-align: center;
  color: ${colors.green};
  font-size: ${fontSize.l};
  margin: 0px ${spacing.m};
`;

const greyFont = {
  color: colors.fontgrey,
};

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
          rel="noreferrer"
        >
          <h1 className="title">{props.user.display_name}</h1>
        </a>
        <div>
          <a href="#" className="styledLink">
            <span style={greyFont}>
              <Num>{props.user.followers.total}</Num> PLAYLISTS
            </span>
          </a>
          &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <a href="#" className="styledLink">
            <span style={greyFont}>
              <Num>{props.user.followers.total}</Num> FOLLOWERS
            </span>
          </a>
        </div>
      </UserInfoNameStats>
    </UserInfo>
  );
};

export default ProfileUserInfo;
