import React, { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import styled from "styled-components/macro";
import theme from "../style/theme";
import { Link } from "@reach/router";
import { getYear, formatDuration, formatDurationForHumans } from "../utils";
import { getAlbum } from "../spotify";
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
  .albuminfo {
    margin-top: ${spacing.xxl};
  }
  .buttons {
    margin: ${spacing.xxl} 0px;
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
  &:hover {
    background-color: ${colors.highlightgreen};
  }
`;

const Album = (props) => {
  //   getAlbum(props.albumId).then((res) => console.log(JSON.stringify(res)));
  const [album, setAlbum] = useState(false);

  useEffect(() => {
    getAlbum(props.albumId).then((alb) => setAlbum(alb.data));
  }, []);

  return album ? (
    <PageStyle>
      <TrackInfo>
        <img
          src={album.images[1].url}
          alt={album.name}
          height="300px"
          width="300px"
        />
        <div className="flexitem">
          <h6>{album.type.toUpperCase()}</h6>
          <h1 className="tracktitle">{album.name}</h1>
          <div>
            {album.artists.map((objArtist, index) => (
              <Link
                key={objArtist.name.replace(" ", "").toLowerCase()}
                to={`/artist/${objArtist.id}`}
                className="styledLink tracktitleinfo"
              >
                <span>
                  {" "}
                  {objArtist.name}
                  {index < album.artists.length - 1 ? (
                    <span>,</span>
                  ) : (
                    <span> </span>
                  )}
                </span>
              </Link>
            ))}
          </div>
          <div className="albuminfo">
            <span>{getYear(album.release_date)}</span>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <span>
              {formatDurationForHumans(
                album.tracks.items.reduce(
                  (tot, track) => tot + track.duration_ms,
                  0
                )
              )}
            </span>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <span>{album.tracks.total} tracks</span>
          </div>
          <div className="buttons">
            <a href="#" target="_blank" rel="noreferrer">
              <PlayButton>
                <h3>PLAY ON SPOTIFY</h3>
              </PlayButton>
            </a>
            <Link to="/recommendations">
              <PlayButton>
                <h3>GET RECOMMENDATIONS</h3>
              </PlayButton>
            </Link>
          </div>
        </div>
      </TrackInfo>
      <div>
        <a className="styledLink" href="#">
          <h2>Tracks</h2>
        </a>
      </div>
      <div>
        {album.tracks.items.map((objTrack) => (
          <Link
            to={`/track/${objTrack.id}`}
            key={objTrack.name.replace(" ", "").toLowerCase()}
          >
            <SavedTracks>
              <MusicIcon />
              <img
                src={album.images[2].url}
                height="50px"
                width="50px"
                alt={objTrack.name}
              />
              <TracksNameSection>
                <h4>{objTrack.name}</h4>
                {objTrack.artists.map((objArtist, index) => (
                  <Link
                    key={objArtist.name.replace(" ", "").toLowerCase()}
                    to={`/artist/${objArtist.id}`}
                    className="styledLink artistlink"
                  >
                    <span>
                      {" "}
                      {objArtist.name}
                      {index < objTrack.artists.length - 1 ? (
                        <span>,</span>
                      ) : (
                        <span> </span>
                      )}
                    </span>
                  </Link>
                ))}
              </TracksNameSection>
              <TimeStyle>{formatDuration(objTrack.duration_ms)}</TimeStyle>
            </SavedTracks>
          </Link>
        ))}
      </div>
    </PageStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default Album;
