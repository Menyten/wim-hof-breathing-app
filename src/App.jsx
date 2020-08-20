import React, { useState, useEffect } from "react";
import formatTimeLeft from "./utils/formatTimeLeft";
import S from "./elements";
import BreathingCircle from "./components/breathingCircle";
import Countdown from "./components/countdown";

const App = () => {
  const [running, setRunning] = useState(false);
  const [rounds, setRounds] = useState(3);
  const [currentRound, setCurrentRound] = useState(1);
  const [totalBreaths, setTotalBreaths] = useState(5);
  const [breathCount, setBreathCount] = useState(0);
  const [breathHoldTime, setBreathHoldTime] = useState(60000);
  const [breathing, setBreathing] = useState(true);
  const [breathingTime, setBreathingTime] = useState(1500);
  const [timeouts, setTimeouts] = useState([]);

  useEffect(() => {
    if (breathCount < totalBreaths) {
      breathing && setBreathCount((breathCount) => breathCount + 1);
    }
  }, [breathing]);

  useEffect(() => {
    console.log("BREATHCOUNT", breathCount);
    if (breathCount === totalBreaths) {
      const id = setInterval(() => {
        setBreathHoldTime((breathHoldTime) => breathHoldTime - 1000);
      }, 1000);
    }
  }, [breathCount]);

  const changeCircleAnimation = () => {
    addTimeoutToArray(
      setTimeout(() => {
        setBreathing(false);
        addTimeoutToArray(
          setTimeout(() => {
            setBreathing(true);
            changeCircleAnimation();
          }, breathingTime)
        );
      }, breathingTime)
    );
  };

  const addTimeoutToArray = (id) => setTimeouts([...timeouts, id]);
  const clearAllTimeouts = () => {
    timeouts.forEach((id) => clearTimeout(id));
    setTimeouts([]);
  };

  const startSession = () => {
    setRunning(true);
    changeCircleAnimation();
  };
  const stopSession = () => {
    setRunning(false);
    clearAllTimeouts();
  };

  return (
    <S.Background>
      <S.Container>
        <S.Title>Wim Hof Breathing</S.Title>
        {breathCount !== totalBreaths && (
          <BreathingCircle
            running={running}
            breathingTime={breathingTime}
            breathCount={breathCount}
          />
        )}
        {breathCount === totalBreaths && (
          <Countdown breathHoldTime={breathHoldTime} />
        )}
        <S.ButtonContainer>
          {!running && (
            <S.PrimaryButton onClick={startSession}>Start</S.PrimaryButton>
          )}
          {running && (
            <S.PrimaryButton onClick={stopSession}>Stop</S.PrimaryButton>
          )}
          <S.SecondaryButton>Settings</S.SecondaryButton>
        </S.ButtonContainer>
      </S.Container>
    </S.Background>
  );
};

export default App;
