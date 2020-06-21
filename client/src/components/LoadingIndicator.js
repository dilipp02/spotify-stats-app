import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components/macro";

const LoaderStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIndicator = () => {
  return (
    <LoaderStyle>
      <Loader type="Bars" color="#1db954" height={100} width={100} />
    </LoaderStyle>
  );
};

export default LoadingIndicator;
