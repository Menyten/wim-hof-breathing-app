import React, { useState, useEffect } from "react";
import S from "./elements";
import BreathingCircle from "./components/breathingCircle";
import Countdown from "./components/countdown";

const App = () => {
  const [running, setRunning] = useState(false);
  const [breathIn, setBreathIn] = useState(false);
  const [timeoutId, setTimeoutId] = useState(0);
  const [totalRounds, setTotalRounds] = useState(3);
  const [currentRound, setCurrentRound] = useState(1);
  const [breathingSpeed, setBreathingSpeed] = useState(1500);
  const [totalBreaths, setTotalBreaths] = useState(2);
  const [breathCount, setBreathCount] = useState(1);

  const [countdown, setCountdown] = useState(false);
  const [breathHoldTime, setBreathHoldTime] = useState(2000);

  const [breathInHoldCountdown, setBreathInHoldCountdown] = useState(false);
  const [breathInHoldTime, setBreathInHoldTime] = useState(15000);

  useEffect(() => {
    if (!running) return;
    const handleBreathCountIncrease = () => {
      const id = setTimeout(() => {
        setBreathIn(true);
        setTimeout(() => {
          setBreathIn(false);
          setTimeoutId(handleBreathCountIncrease());
        }, breathingSpeed);
      }, breathingSpeed);
      return id;
    };
    handleBreathCountIncrease();
  }, [running, breathingSpeed, currentRound, totalRounds]);

  useEffect(() => {
    if (countdown || breathInHoldCountdown) {
      clearTimeout(timeoutId);
    }
  }, [timeoutId, countdown, breathInHoldCountdown]);

  useEffect(() => {
    if (!running) return;
    if (breathInHoldCountdown) return;
    if (breathIn) return;
    const incrementBreathCount = () => setBreathCount(breathCount + 1);
    if (breathCount < totalBreaths) {
      incrementBreathCount();
    } else {
      setCountdown(true);
    }
    /* eslint-disable-next-line */
  }, [breathIn]);

  useEffect(() => {
    if (!countdown) return;
    if (breathHoldTime) {
      setTimeout(() => setBreathHoldTime(breathHoldTime - 1000), 1000);
    } else {
      setCountdown(false);
      setBreathInHoldCountdown(true);
    }
  }, [countdown, breathHoldTime]);

  useEffect(() => {
    if (!breathInHoldCountdown) return;
    if (breathInHoldTime) {
      setTimeout(() => setBreathInHoldTime(breathInHoldTime - 1000), 1000);
    } else {
      if (currentRound < totalRounds) {
        resetValues();
        setCurrentRound(currentRound + 1);
      } else {
        stopSession();
      }
    }
    /* eslint-disable-next-line */
  }, [breathInHoldCountdown, breathInHoldTime]);

  const resetValues = () => {
    setBreathIn(false);
    setCountdown(false);
    setBreathInHoldCountdown(false);
    setBreathCount(1);
    setBreathHoldTime(2000);
    setBreathInHoldTime(15000);
  };

  const startSession = () => setRunning(true);
  const stopSession = () => {
    setRunning(false);
    resetValues();
  };

  return (
    <S.Background>
      <S.Container>
        <S.Title>Wim Hof Breathing</S.Title>
        {!breathInHoldCountdown && !countdown && (
          <BreathingCircle
            running={running}
            breathingSpeed={breathingSpeed}
            breathCount={breathCount}
          />
        )}
        {countdown && <Countdown time={breathHoldTime} />}
        {breathInHoldCountdown && <Countdown time={breathInHoldTime} />}
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
