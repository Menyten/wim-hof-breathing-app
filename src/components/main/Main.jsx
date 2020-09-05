import React, { useState, useEffect } from "react";
import S from "../../elements";
import BreathingCircle from "../breathingCircle";
import Countdown from "../countdown";

const Main = ({
  setSettings,
  initialTotalRounds,
  initialBreathingSpeed,
  initialTotalBreaths,
  initialBreathHoldTime,
}) => {
  const [running, setRunning] = useState(false);
  const [breathIn, setBreathIn] = useState(false);
  const [timeoutId, setTimeoutId] = useState(0);
  const [totalRounds, setTotalRounds] = useState(initialTotalRounds);
  const [currentRound, setCurrentRound] = useState(1);
  const [breathingSpeed, setBreathingSpeed] = useState(initialBreathingSpeed);
  const [totalBreaths, setTotalBreaths] = useState(initialTotalBreaths);
  const [breathCount, setBreathCount] = useState(1);

  const [countdown, setCountdown] = useState(false);
  const [breathHoldTime, setBreathHoldTime] = useState(initialBreathHoldTime);

  const [breathInHoldCountdown, setBreathInHoldCountdown] = useState(false);
  const [breathInHoldTime, setBreathInHoldTime] = useState(15000);

  useEffect(() => {
    setTotalRounds(initialTotalRounds);
    setBreathingSpeed(initialBreathingSpeed);
    setTotalBreaths(initialTotalBreaths);
    setBreathHoldTime(initialBreathHoldTime);
  }, [
    initialTotalRounds,
    initialBreathingSpeed,
    initialTotalBreaths,
    initialBreathHoldTime,
  ]);

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
      setTimeout(() => {
        setCountdown(false);
        setBreathInHoldCountdown(true);
      }, 1000);
    }
  }, [countdown, breathHoldTime]);

  useEffect(() => {
    if (!breathInHoldCountdown) return;
    if (breathInHoldTime) {
      setTimeout(() => setBreathInHoldTime(breathInHoldTime - 1000), 1000);
    } else {
      if (currentRound < totalRounds) {
        setTimeout(() => {
          resetValues();
          setCurrentRound(currentRound + 1);
        }, 1000);
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
    setBreathHoldTime(initialBreathHoldTime);
    setBreathInHoldTime(15000);
  };

  const startSession = () => setRunning(true);
  const stopSession = () => {
    setRunning(false);
    resetValues();
  };

  const openSettings = () => setSettings(true);

  return (
    <>
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
          <S.PrimaryButton fullWidth onClick={stopSession}>
            Stop
          </S.PrimaryButton>
        )}

        {!running && (
          <S.SecondaryButton onClick={openSettings}>Settings</S.SecondaryButton>
        )}
      </S.ButtonContainer>
    </>
  );
};

export default Main;
