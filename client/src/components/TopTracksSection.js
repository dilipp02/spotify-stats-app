import React, { useState } from "react";
import styled from "styled-components/macro";
import MusicIcon from "./icons/MusicIcon";
import { formatDuration } from "../utils";
import { Link } from "@reach/router";
import { useEffect } from "react";
import { ArtistNames } from "../style/SpotifyBlock";
import {
  TracksStyle,
  SavedTracks,
  TracksNameSection,
  TimeStyle,
  ShowButtonDiv,
  ShowButton,
  TopTracksButton,
} from "../style/TracksStyle";
import { SectionHeadingStyle, SectionTitleDiv } from "../style/HeadingStyles";

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
    if (e.target.innerText == "ALL TIME")
      setCurrentTracks(props.longtermtracks);
    else if (e.target.innerText == "6 MONTHS")
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

  return (
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
      {savedtracks ? (
        <div>
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
        </div>
      ) : (
        <h1>No data</h1>
      )}
    </TracksStyle>
  );
};

export default TopTrackSection;
