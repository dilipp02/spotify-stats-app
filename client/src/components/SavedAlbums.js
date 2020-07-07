import React, { useState } from "react";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  ImageDiv,
  HeadingBlock,
} from "../style/SpotifyBlock";
import { TracksStyle, ShowButtonDiv, ShowButton } from "../style/TracksStyle";
import { SectionHeadingStyle, SectionTitleDiv } from "../style/HeadingStyles";
import { Link } from "@reach/router";
import NoData from "./NoData";

const SavedAlbums = (props) => {
  const [savedAlbums, setSavedAlbums] = useState(
    props.albums.items.slice(0, 6)
  );
  const [buttonSavedTracks, setButtonSavedTracks] = useState("more");

  function showMoreTracks() {
    if (buttonSavedTracks === "more") {
      setSavedAlbums(props.albums.items);
      setButtonSavedTracks("less");
    } else {
      setSavedAlbums(props.albums.items.slice(0, 6));
      setButtonSavedTracks("more");
    }
  }

  return (
    <TracksStyle>
      <SavedTracks>
        <SectionHeadingStyle>
          <SectionTitleDiv>
            <h2>Saved Albums</h2>
          </SectionTitleDiv>
        </SectionHeadingStyle>
        {savedAlbums.length ? (
          savedAlbums.map((objTrack) => (
            <Link to={`/album/${objTrack.album.id}`} key={objTrack.album.id}>
              <SectionSong>
                <ImageDiv>
                  <img
                    src={objTrack.album.images[1].url}
                    alt={objTrack.album.name}
                  />
                </ImageDiv>
                <SectionSongArtists>
                  <HeadingBlock>{objTrack.album.name}</HeadingBlock>
                  {objTrack.album.artists.map((objArtist, index) => (
                    <a
                      key={objArtist.id}
                      href={objArtist.external_urls.spotify}
                      className="styledLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArtistNames>
                        {" "}
                        {objArtist.name}
                        {index < objTrack.album.artists.length - 1 ? (
                          <span>,</span>
                        ) : (
                          <span> </span>
                        )}
                      </ArtistNames>
                    </a>
                  ))}
                </SectionSongArtists>
              </SectionSong>
            </Link>
          ))
        ) : (
          <NoData
            type="album"
            desc="Follow your first album"
            spotifyLink="https://open.spotify.com/search"
            btnName="Find Albums"
          />
        )}
      </SavedTracks>
      <ShowButtonDiv>
        {savedAlbums.length ? (
          <ShowButton onClick={showMoreTracks}>
            SHOW {buttonSavedTracks.toUpperCase() + "  "}
            <i
              className={`fas fa-chevron-${
                buttonSavedTracks === "more" ? "down" : "up"
              }`}
            ></i>
          </ShowButton>
        ) : (
          <div></div>
        )}
      </ShowButtonDiv>
    </TracksStyle>
  );
};

export default SavedAlbums;
