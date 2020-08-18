import React from "react";
import styled, { keyframes } from "styled-components";
const breathIn = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(5);
  }
`;

const breathOut = keyframes`
  from {
    transform: scale(5);
  }

  to {
    transform: scale(1);
  }
`;
const StyledBackground = styled.div`
  background-color: #1184e8;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.section`
  height: 100%;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #99fadc;
  animation: ${breathIn} 2s ease-in-out infinite;
  animation-direction: alternate;
`;

const Test = () => {
  return (
    <StyledBackground>
      <StyledContainer>
        <StyledTitle>Hej</StyledTitle>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Test;
