import React, { useState } from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import MusicIcon from "./icons/MusicIcon";
import { formatDuration } from "../utils";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "@reach/router";
import { useEffect } from "react";

const { colors, fontSize, spacing } = theme;

const TracksStyle = styled.div`
  margin-top: ${spacing.xxl};
`;

const SavedTracks = styled.div`
  margin-top: ${spacing.m};
  padding: ${spacing.m} ${spacing.base};
  display: flex;
  align-items: center;
  img {
    margin: 0px ${spacing.base};
  }
  &:hover {
    background-color: ${colors.backgroundgrey};
    img {
      opacity: 0.5;
    }
  }
`;

const ArtistNames = styled.span`
  color: ${colors.fontgrey};
  font-size: ${fontSize.m};
`;

const TracksNameSection = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.fontgrey};
`;

const TimeStyle = styled.span`
  font-size: ${fontSize.m};
  margin: 0px ${spacing.base};
  color: ${colors.fontgrey};
`;

const ShowButtonDiv = styled.div`
  text-align: center;
`;

const ShowButton = styled.button`
  background-color: transparent;
  color: ${colors.white};
  &:hover {
    transform: scale(1.06);
  }
`;

const SectionHeadingStyle = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitleDiv = styled.div`
  flex: 1;
`;

const TopTracksButton = styled.button`
  background-color: transparent;
  color: ${colors.fontgrey};
  letter-spacing: 1.76px;
  margin: 0px ${spacing.s};
  font-size: ${fontSize.sm};
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

const TopTrackSection = (props) => {
  const [currentTracks, setCurrentTracks] = useState(props.longtermtracks);
  const [active, setActive] = useState("ALL TIME");

  const [savedtracks, setSavedTracks] = useState(
    currentTracks.items.slice(0, 5)
  );
  const [buttonSavedTracks, setButtonSavedTracks] = useState("more");

  function showMoreTracks() {
    if (buttonSavedTracks === "more") {
      setSavedTracks(currentTracks.items);
      setButtonSavedTracks("less");
    } else {
      setSavedTracks(currentTracks.items.slice(0, 5));
      setButtonSavedTracks("more");
    }
    // console.log(savedtracks);
    // console.log(buttonSavedTracks);
  }

  async function currentTracksFunc(e) {
    if (e.target.innerText == "ALL TIME") {
      setCurrentTracks(props.longtermtracks);
      console.log(currentTracks);
    } else if (e.target.innerText == "6 MONTHS")
      setCurrentTracks(props.mediumtermtracks);
    else setCurrentTracks(props.shorttermtracks);

    setSavedTracks(currentTracks.items.slice(0, 5));
    setActive(e.target.innerText);
    setButtonSavedTracks("more");

    // console.log(currentTracks);
    // console.log(savedtracks);
    // console.log(active);
    // console.log(buttonSavedTracks);
  }

  useEffect(() => {});

  return savedtracks ? (
    <TracksStyle>
      <SectionHeadingStyle>
        <SectionTitleDiv>
          <a className="styledLink" href="#">
            <h2>Top Tracks</h2>
          </a>
        </SectionTitleDiv>
        <TopTracksButton
          onClick={currentTracksFunc}
          className={active === "ALL TIME" ? "active" : ""}
        >
          <span>ALL TIME</span>
        </TopTracksButton>
        <TopTracksButton
          onClick={currentTracksFunc}
          className={active === "6 MONTHS" ? "active" : ""}
        >
          <span>6 MONTHS</span>
        </TopTracksButton>
        <TopTracksButton
          onClick={currentTracksFunc}
          className={active === "4 WEEKS" ? "active" : ""}
        >
          <span>4 WEEKS</span>
        </TopTracksButton>
      </SectionHeadingStyle>
      {savedtracks.map((objTrack) => (
        <Link
          to={`/tracks/${objTrack.id}`}
          key={objTrack.name.replace(" ", "").toLowerCase()}
        >
          <SavedTracks>
            <MusicIcon />
            <img
              src={objTrack.album.images[2].url}
              height="50px"
              width="50px"
              alt={objTrack.name}
            />
            <TracksNameSection>
              <h4>{objTrack.name}</h4>
              {objTrack.artists.map((objArtist, index) => (
                <a
                  key={objArtist.name.replace(" ", "").toLowerCase()}
                  href={objArtist.external_urls.spotify}
                  className="styledLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArtistNames>
                    {" "}
                    {objArtist.name}
                    {index < objTrack.artists.length - 1 ? (
                      <span>,</span>
                    ) : (
                      <span> </span>
                    )}
                  </ArtistNames>
                </a>
              ))}
              <ArtistNames>
                &nbsp;&middot;&nbsp;&nbsp;
                {objTrack.album.name}
              </ArtistNames>
            </TracksNameSection>
            <TimeStyle>{formatDuration(objTrack.duration_ms)}</TimeStyle>
          </SavedTracks>
        </Link>
      ))}
      <ShowButtonDiv>
        <ShowButton onClick={showMoreTracks}>
          SHOW {buttonSavedTracks.toUpperCase() + "  "}
          <i
            className={`fas fa-chevron-${
              buttonSavedTracks === "more" ? "down" : "up"
            }`}
          ></i>
        </ShowButton>
      </ShowButtonDiv>
    </TracksStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default TopTrackSection;
