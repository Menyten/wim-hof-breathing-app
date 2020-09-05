import React, { useState } from "react";
import S from "./elements";
import Main from "./components/main";
import Settings from "./components/settings";

const App = () => {
  const [settings, setSettings] = useState(false);
  const [totalRounds, setTotalRounds] = useState(3);
  const [breathingSpeed, setBreathingSpeed] = useState(1500);
  const [totalBreaths, setTotalBreaths] = useState(30);
  const [breathHoldTime, setBreathHoldTime] = useState(60000);

  return (
    <S.Background>
      <S.Container>
        <S.Title>Wim Hof Breathing</S.Title>
        <Main
          setSettings={setSettings}
          initialTotalRounds={totalRounds}
          initialBreathingSpeed={breathingSpeed}
          initialTotalBreaths={totalBreaths}
          initialBreathHoldTime={breathHoldTime}
        />
        <Settings
          open={settings}
          setSettings={setSettings}
          totalRounds={totalRounds}
          breathingSpeed={breathingSpeed}
          totalBreaths={totalBreaths}
          breathHoldTime={breathHoldTime}
          setTotalRounds={setTotalRounds}
          setBreathingSpeed={setBreathingSpeed}
          setTotalBreaths={setTotalBreaths}
          setBreathHoldTime={setBreathHoldTime}
        />
      </S.Container>
    </S.Background>
  );
};

export default App;
