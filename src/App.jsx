import React, { useState, useEffect } from "react";
import S from "./elements";

const App = () => {
  const [running, setRunning] = useState(false);
  const [rounds, setRounds] = useState(3);
  const [breaths, setBreaths] = useState(30);
  const [breathCount, setBreathCount] = useState(0);
  const [breathHoldTime, setBreathHoldTime] = useState(60000);
  const [breathing, setBreathing] = useState(true);
  const [breathingTime, setBreathingTime] = useState(2000);
  const [timeouts, setTimeouts] = useState([]);
  let test = 0;

  useEffect(() => {
    if (running) {
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
      changeCircleAnimation();
    }
  }, [running, breathingTime]);

  const addTimeoutToArray = (id) => setTimeouts([...timeouts, id]);
  const clearAllTimeouts = () => {
    timeouts.forEach((id) => clearTimeout(id));
    setTimeouts([]);
  };

  const startSession = () => setRunning(true);
  const stopSession = () => {
    clearAllTimeouts();
    setRunning(false);
  };

  return (
    <S.Background>
      <S.Container>
        <S.Title>Wim Hof Breathing</S.Title>
        {running ? (
          <S.Circle>
            <S.CircleText>{breathCount}</S.CircleText>
          </S.Circle>
        ) : (
          "Adjust settings and press start"
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
