import styled from "styled-components/macro";
import theme from "../style/theme";

const { colors, fontSize, spacing } = theme;

export const SavedTracks = styled.div`
  margin: ${spacing.xxl} 0px;
  display: grid;
  gap: ${spacing.base};
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
`;

export const SectionSong = styled.div`
  background-color: ${colors.backgroundgrey};
  border-radius: 16px;
  padding: ${spacing.base};
  font-size: ${fontSize.m};
  img {
    max-height: 100%;
    width: 100%;
    position: absolute;
  }
  &:hover {
    img {
      opacity: 0.5;
    }
  }
`;

export const SectionSongArtists = styled.div`
  min-height: 62px;
  margin-top: ${spacing.base};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.fontgrey};
`;

export const ArtistNames = styled.span`
  color: ${colors.fontgrey};
  font-size: ${fontSize.sm};
`;

export const ImageDiv = styled.div`
  padding-bottom: 100%;
  position: relative;
`;

export const HeadingBlock = styled.h4`
  margin-bottom: ${spacing.l};
`;
