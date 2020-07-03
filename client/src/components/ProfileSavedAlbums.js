import React from "react";
import SectionHeading from "./SectionHeading";
import {
  SavedTracks,
  SectionSong,
  SectionSongArtists,
  ArtistNames,
  ImageDiv,
  HeadingBlock,
} from "../style/SpotifyBlock";
import { Link } from "@reach/router";

const ProfileSavedAlbums = (props) => {
  return (
    <SavedTracks>
      <SectionHeading heading="Saved Albums" link="/albumsandshows" />
      {props.albums ? (
        props.albums.items.slice(0, 6).map((objTrack) => (
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
                  <Link
                    key={objArtist.name.replace(" ", "").toLowerCase()}
                    to={`/artist/${objArtist.id}`}
                    className="styledLink"
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
                  </Link>
                ))}
              </SectionSongArtists>
            </SectionSong>
          </a>
        ))
      ) : (
        <h1>No Data</h1>
      )}
    </SavedTracks>
  );
};

export default ProfileSavedAlbums;
