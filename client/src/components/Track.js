import React, { useState, useEffect } from "react";
// import track from "../samp/track.json";
// import trackAudioFeatures from "../samp/trackaudiofeatures.json";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import styled from "styled-components/macro";
import theme from "../style/theme";
import { getYear, formatDuration, parsePitchClass } from "../utils";
import AudioFeatures from "./AudioFeatures";
import { getTrack, getTrackAudioFeatures } from "../spotify";

const { colors, fontSize, spacing } = theme;

export const PageStyle = styled.div`
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
  /* flex-direction: column; */
  align-items: center;
  .flexitem {
    margin-left: ${spacing.base};
  }
  .tracktitle {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: -0.04em;
    margin-bottom: ${spacing.xxl};
  }
  .tracktitleinfo {
    font-size: ${fontSize.l};
    color: ${colors.fontgrey};
  }
  .albuminfo {
    margin: ${spacing.xxl} 0px;
  }
  .albumname {
    font-size: ${fontSize.m};
    color: ${colors.fontgrey};
  }
`;

const PlayButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.green};
  padding: ${spacing.m} ${spacing.xl};
  &:hover {
    background-color: ${colors.highlightgreen};
  }
`;

const AudioFeaturesStyle = styled.div`
  flex: 1;
  margin-top: ${spacing.xxl};
  display: flex;
`;

const AudioFeaturesFirst = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: ${spacing.xxl};
`;

const AudioFeaturesSecond = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AudioFeaturesDiv = styled.div`
  line-height: 32px;
  span {
    font-size: ${fontSize.l};
    color: ${colors.green};
    float: right;
  }
`;

const Track = (props) => {
  // getSavedShows().then((res) => console.log(JSON.stringify(res)));
  const [track, setTrack] = useState(null);
  const [trackAudioFeatures, setTrackAudioFeatures] = useState(null);

  async function getTrackData() {
    axios
      .all([getTrack(props.trackId), getTrackAudioFeatures(props.trackId)])
      .then(
        axios.spread((gt, taf) => {
          setTrack(gt.data);
          setTrackAudioFeatures(taf.data);
        })
      );
  }

  useEffect(() => {
    getTrackData();
  }, []);

  return track && trackAudioFeatures ? (
    <PageStyle>
      <TrackInfo>
        <img src={track.album.images[1].url} alt={track.name} />
        <div className="flexitem">
          <h1 className="tracktitle">{track.name}</h1>
          <div>
            {track.artists.map((objArtist, index) => (
              <a
                key={objArtist.name.replace(" ", "").toLowerCase()}
                href={objArtist.external_urls.spotify}
                className="styledLink tracktitleinfo"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {" "}
                  {objArtist.name}
                  {index < track.artists.length - 1 ? (
                    <span>,</span>
                  ) : (
                    <span> </span>
                  )}
                </span>
              </a>
            ))}
          </div>
          <div className="albuminfo">
            <a
              href="#"
              className="styledLink albumname"
              target="_blank"
              rel="noreferrer"
            >
              <span>{track.album.name}</span>
            </a>
            <span className="albumname">
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
              {getYear(track.album.release_date)}
            </span>
          </div>
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <PlayButton>
              <h3>Play On Spotify</h3>
            </PlayButton>
          </a>
        </div>
      </TrackInfo>
      <h3 className="featurestitle">Audio Features</h3>
      <AudioFeaturesStyle>
        <AudioFeaturesFirst>
          <AudioFeaturesDiv>
            Duration{" "}
            <span>{formatDuration(trackAudioFeatures.duration_ms)}</span>
          </AudioFeaturesDiv>
          <AudioFeaturesDiv>
            Popularity <span>{track.popularity} %</span>
          </AudioFeaturesDiv>
          <AudioFeaturesDiv>
            Key <span>{parsePitchClass(trackAudioFeatures.key)}</span>
          </AudioFeaturesDiv>
          <AudioFeaturesDiv>
            Mode{" "}
            <span>{trackAudioFeatures.mode === 0 ? "Minor" : "Major"}</span>
          </AudioFeaturesDiv>
          <AudioFeaturesDiv>
            Time_Signature <span>{trackAudioFeatures.time_signature}</span>
          </AudioFeaturesDiv>
          <AudioFeaturesDiv>
            Loudness <span>{trackAudioFeatures.loudness} Db</span>
          </AudioFeaturesDiv>
          <AudioFeaturesDiv>
            Tempo <span>{trackAudioFeatures.tempo}</span>
          </AudioFeaturesDiv>
        </AudioFeaturesFirst>
        <AudioFeaturesSecond>
          <AudioFeatures
            name="Acousticness"
            feature={trackAudioFeatures.acousticness}
          />
          <AudioFeatures
            name="Danceability"
            feature={trackAudioFeatures.danceability}
          />
          <AudioFeatures name="Energy" feature={trackAudioFeatures.energy} />
          <AudioFeatures
            name="Instrumentalness"
            feature={trackAudioFeatures.instrumentalness}
          />
          <AudioFeatures
            name="Liveness"
            feature={trackAudioFeatures.liveness}
          />
          <AudioFeatures
            name="Speechiness"
            feature={trackAudioFeatures.speechiness}
          />
          <AudioFeatures name="Valence" feature={trackAudioFeatures.valence} />
        </AudioFeaturesSecond>
      </AudioFeaturesStyle>
    </PageStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default Track;
