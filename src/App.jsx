import React, { useState, useEffect } from "react";
import S from "./elements";
import BreathingCircle from "./components/breathingCircle";
import Countdown from "./components/countdown";

const App = () => {
  const [running, setRunning] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(3);
  const [totalBreaths, setTotalBreaths] = useState(2);
  const [breathCount, setBreathCount] = useState(0);
  const [breathHoldTime, setBreathHoldTime] = useState(1000);
  const [breathing, setBreathing] = useState(true);
  const [breathingTime, setBreathingTime] = useState(1500);
  const [timeouts, setTimeouts] = useState([]);
  const [breathHoldIntervalId, setBreathHoldIntervalId] = useState("");

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
      setBreathHoldIntervalId(id);
    }
  }, [breathCount]);

  useEffect(() => {
    console.log("breathHoldTime", breathHoldTime);
    if (!breathHoldTime) {
      if (currentRound === totalRounds) {
        stopSession();
        setCurrentRound(1);
      } else {
        setCurrentRound(currentRound + 1);
      }
      console.log(currentRound);
      setBreathCount(0);
      setBreathHoldTime(1000);
      clearInterval(breathHoldIntervalId);
    }
  }, [breathHoldTime]);

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
