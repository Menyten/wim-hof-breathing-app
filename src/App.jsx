import React, { useState, useEffect } from "react";
import S from "./elements";
import BreathingCircle from "./components/breathingCircle";
import Countdown from "./components/countdown";

const App = () => {
  const [running, setRunning] = useState(false);
  const [breathIn, setBreathIn] = useState(false);
  const [timeoutId, setTimeoutId] = useState(0);
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
        console.log("object");
        setTimeout(() => {
          setBreathIn(false);
          setTimeoutId(handleBreathCountIncrease());
        }, breathingSpeed);
      }, breathingSpeed);
      return id;
    };
    handleBreathCountIncrease();
    console.log("First Effect");
  }, [running, breathingSpeed]);

  useEffect(() => {
    if (countdown || breathInHoldCountdown) {
      console.log(timeoutId);
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
    console.log("Second Effect");
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
    console.log("Third Effect");
  }, [countdown, breathHoldTime]);

  useEffect(() => {
    if (!breathInHoldCountdown) return;
    if (breathInHoldTime) {
      setTimeout(() => setBreathInHoldTime(breathInHoldTime - 1000), 1000);
    }
    console.log("Fourth Effect");
  }, [breathInHoldCountdown, breathInHoldTime]);

  const startSession = () => setRunning(true);

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
          <S.PrimaryButton onClick={startSession}>Start</S.PrimaryButton>

          <S.SecondaryButton>Settings</S.SecondaryButton>
        </S.ButtonContainer>
      </S.Container>
    </S.Background>
  );
};

export default App;
