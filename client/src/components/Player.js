import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { getCurrentTrack } from "../spotify/index";
import LoadingIndicator from "./LoadingIndicator";
import player from "../samp/currentPlayer.json";
import theme from "../style/theme";
const { colors, fontSize, spacing } = theme;

const NoPlayer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Playing = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const PlayerNames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SectionTitle = styled.h4``;

const ArtistNames = styled.span`
  color: ${colors.fontgrey};
`;

const Player = () => {
  // const [player, setPlayer] = useState(null);

  // async function getPlayer() {
  //   getCurrentTrack().then((res) => setPlayer(res));
  // }

  // useEffect(() => {
  //   getPlayer();
  // }, [setPlayer]);

  return player ? (
    player.data ? (
      <Playing>
        <img
          src={player.data.item.album.images[1].url}
          alt={player.data.item.name}
          height="118px"
          width="118px"
        />
        <div>
          <PlayerNames>
            <a
              href={player.data.item.external_urls.spotify}
              className="styledLink"
              target="_blank"
            >
              <SectionTitle>{player.data.item.name}</SectionTitle>
            </a>
            <div>
              {player.data.item.artists.map((obj) => (
                <a
                  key={obj.name.replace(" ", "").toLowerCase()}
                  href={obj.external_urls.spotify}
                  className="styledLink"
                  target="_blank"
                >
                  <ArtistNames>{obj.name}, </ArtistNames>
                </a>
              ))}
            </div>
          </PlayerNames>
        </div>
      </Playing>
    ) : (
      <NoPlayer>
        <span>You are not playing any song currently</span>
      </NoPlayer>
    )
  ) : (
    <LoadingIndicator type="ThreeDots" />
  );
};

export default Player;
