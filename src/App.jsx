import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const breathIn = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(10);
  }
`;

const breathOut = keyframes`
  from {
    transform: scale(10);
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
`;

const StyledCircle = styled.section`
  background-color: #99fadc;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  /* animation: ${breathOut} 3s linear infinite; */
`;

const StyledButtonContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledStartButton = styled.button`
  background-color: #99fadc;
  color: #1184e8;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
`;

const StyledSettingsButton = styled.button`
  background-color: transparent;
  color: #99fadc;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 7px 31px;
  border: 1px solid #99fadc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const App = () => {
  const [running, setRunning] = useState(false);

  const startSession = () => setRunning(true);

  return (
    <StyledBackground>
      <StyledContainer>
        <StyledTitle>Wim Hof Breathing</StyledTitle>
        {running ? <StyledCircle /> : "Press start to start breathing session"}
        <StyledButtonContainer>
          <StyledStartButton onClick={startSession}>Start</StyledStartButton>
          <StyledSettingsButton>Settings</StyledSettingsButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledBackground>
  );
};

export default App;
