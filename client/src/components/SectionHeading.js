import React from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";

const { colors, fontSize } = theme;

const SectionHeadingStyle = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeeAllLink = styled.span`
  color: ${colors.fontgrey};
  letter-spacing: 1.76px;
  font-size: ${fontSize.sm};
`;

const SectionHeading = (props) => {
  return (
    <SectionHeadingStyle>
      <a className="styledLink" href="#">
        <h2>{props.heading}</h2>
      </a>
      <a className="styledLink" href="#">
        <SeeAllLink>SEE ALL</SeeAllLink>
      </a>
    </SectionHeadingStyle>
  );
};

export default SectionHeading;
