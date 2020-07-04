import React, { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import styled from "styled-components/macro";
import theme from "../style/theme";
import { Link } from "@reach/router";
import {
  formatDuration,
  formatWithCommas,
  formatDurationForHumans,
} from "../utils";
import { getPlaylist, getShow } from "../spotify";
import { ArtistNames } from "../style/SpotifyBlock";
import MusicIcon from "./icons/MusicIcon";
import {
  SavedTracks,
  TracksNameSection,
  TimeStyle,
} from "../style/TracksStyle";

const { colors, fontSize, spacing } = theme;

const PageStyle = styled.div`
  min-height: 100vh;
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  .featurestitle {
    text-align: center;
  }
  .podcastIcon {
    color: ${colors.fontgrey};
    margin-right: ${spacing.base};
  }
`;

const TrackInfo = styled.div`
  margin: ${spacing.xxl} 0px;
  display: flex;
  align-items: center;
  .flexitem {
    margin-left: ${spacing.base};
  }
  .tracktitle {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: -0.04em;
    margin: ${spacing.xxl} 0px;
  }
  .tracktitleinfo {
    font-size: ${fontSize.l};
    color: ${colors.fontgrey};
  }
  .buttons {
    margin: ${spacing.xxl} 0px;
  }
  .by {
    font-size: ${fontSize.sm};
  }
  .desc {
    margin-top: ${spacing.xxl};
  }
  img {
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
`;

const PlayButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.green};
  padding: ${spacing.m} ${spacing.xl};
  margin-left: ${spacing.xxl};
  font-size: ${fontSize.m};
  &:hover {
    background-color: ${colors.highlightgreen};
  }
`;

const Show = (props) => {
  getShow(props.showId).then((res) => console.log(JSON.stringify(res)));
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShow(props.showId).then((sh) => setShow(sh.data));
  }, []);

  return show ? (
    <PageStyle>
      <TrackInfo>
        <img
          src={show.images[1].url}
          alt={show.name}
          height="300px"
          width="300px"
        />
        <div className="flexitem">
          <h6>{show.type.toUpperCase()}</h6>
          <h1 className="tracktitle">{show.name}</h1>
          <span className="tracktitleinfo">{show.publisher}</span>
          {show.description ? (
            <div className="desc">
              <span>{show.description}</span>
            </div>
          ) : (
            <span></span>
          )}
          <div>
            <span>{show.episodes.total} episodes</span>
          </div>
          <div className="buttons">
            <a href="#" target="_blank" rel="noreferrer">
              <PlayButton>PLAY ON SPOTIFY</PlayButton>
            </a>
            <Link to="/recommendations">
              <PlayButton>GET RECOMMENDATIONS</PlayButton>
            </Link>
          </div>
        </div>
      </TrackInfo>
      <div>
        <a className="styledLink" href="#">
          <h2>All Episodes</h2>
        </a>
      </div>
      <div>
        {show.episodes.items.map((objTrack) => (
          <a
            href={objTrack.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={objTrack.id}
          >
            <SavedTracks>
              <span className="podcastIcon">
                <i class="fas fa-podcast"></i>
              </span>
              <TracksNameSection>
                <h4>{objTrack.name}</h4>
                <ArtistNames>{objTrack.release_date}</ArtistNames>
              </TracksNameSection>
              <TimeStyle>{formatDuration(objTrack.duration_ms)}</TimeStyle>
            </SavedTracks>
          </a>
        ))}
      </div>
    </PageStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default Show;
