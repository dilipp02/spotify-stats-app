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
            <a className="styledLink" href="#">
              <h2>Saved Albums</h2>
            </a>
          </SectionTitleDiv>
        </SectionHeadingStyle>
        {savedAlbums ? (
          savedAlbums.map((objTrack) => (
            <a
              href={objTrack.album.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              key={objTrack.album.name.replace(" ", "").toLowerCase()}
            >
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
                      key={objArtist.name.replace(" ", "").toLowerCase()}
                      href={objArtist.external_urls.spotify}
                      className="styledLink"
                      target="_blank"
                      rel="noreferrer"
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
            </a>
          ))
        ) : (
          <h1>No Data</h1>
        )}
      </SavedTracks>
      <ShowButtonDiv>
        {savedAlbums ? (
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
