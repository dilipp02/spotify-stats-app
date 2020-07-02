import React, { useState } from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";

const { colors, fontSize, spacing, transition } = theme;

const AudioFeaturesDiv = styled.div`
  line-height: 32px;
  span {
    font-size: ${fontSize.l};
    color: ${colors.green};
    float: right;
  }
`;

const AudioFeaturesRange = styled.div`
  margin: 8px 0px;
  background-color: ${colors.backgroundgrey};
  border-radius: 30px;
  height: 16px;
  width: 75%;
  float: right;
  position: relative;
  .progressbar {
    width: 0%;
  }
`;

const AudioFeaturesRangeProgress = styled.div`
  height: 100%;
  width: 0%;
  background-color: ${colors.green};
  border-radius: 30px;
  transition: ${transition};
  &:hover {
    background-color: ${colors.highlightgreen};
  }
`;

const Progress = styled.h6`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  line-height: 16px;
`;

const AudioFeatures = (props) => {
  return (
    <AudioFeaturesDiv>
      {props.name}
      <AudioFeaturesRange>
        <AudioFeaturesRangeProgress
          className="progressbar"
          style={{ width: `${props.feature * 100}%` }}
        ></AudioFeaturesRangeProgress>
        <Progress>{props.feature}</Progress>
      </AudioFeaturesRange>
    </AudioFeaturesDiv>
  );
};

export default AudioFeatures;
