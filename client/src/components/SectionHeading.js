import React from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
import { Link } from "@reach/router";

const { colors, fontSize } = theme;

const SectionHeadingStyle = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .seealllink {
    color: ${colors.fontgrey};
    letter-spacing: 1.76px;
    font-size: ${fontSize.sm};
  }
`;

const SectionHeading = (props) => {
  return (
    <SectionHeadingStyle>
      <Link className="styledLink" to={props.link}>
        <h2>{props.heading}</h2>
      </Link>
      <Link className="styledLink seealllink" to={props.link}>
        <span>SEE ALL</span>
      </Link>
    </SectionHeadingStyle>
  );
};

export default SectionHeading;
