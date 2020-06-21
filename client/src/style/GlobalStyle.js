import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import CircularStdBlackWoff from "../fonts/CircularStd-Black.woff";
import CircularStdBlackWoff2 from "../fonts/CircularStd-Black.woff2";
const { colors, fontSize } = theme;

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std'), local('CircularStd'),
    url(${CircularStdBlackWoff}) format('woff'),
    url(${CircularStdBlackWoff2}) format('woff');
  }

    html {
        background-color: ${colors.black};
    }

    body {
        font-family: 'Circular Std';
        background-color: ${colors.bodygrey};
        margin: 0px;
        height: 100vh;
        font-weight: 700;
        font-size: ${fontSize.base};
        line-height: 20px;
        letter-spacing: 0.015em;
        color: ${colors.fontgrey};
    }

    * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        letter-spacing: -0.04em;
        color: ${colors.white};
    }

    .title {
        font-size: ${fontSize.title};
        font-weight: 900;
        &:hover {
            color: ${colors.green};
            text-decoration: none;
        }
    }

    a.unStyledLink {
        :hover {
            text-decoration: none;
        }
    }

    a.styledLink {
        &:hover {
            text-decoration: underline;
            text-decoration-color: ${colors.white};
        }
    }
`;

export default GlobalStyle;
