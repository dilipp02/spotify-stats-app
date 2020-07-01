import React, { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import savedalbums from "../samp/savedAlbums.json";
import savedshows from "../samp/savedShows.json";
import { PageStyle } from "../style/PageStyle";
import SavedAlbums from "./SavedAlbums";
import SavedShows from "./SavedShows";

const AlbumsAndShows = () => {
  return savedalbums && savedshows ? (
    <PageStyle>
      <SavedAlbums albums={savedalbums.data} />
      <SavedShows shows={savedshows.data} />
    </PageStyle>
  ) : (
    <LoadingIndicator />
  );
};

export default AlbumsAndShows;
