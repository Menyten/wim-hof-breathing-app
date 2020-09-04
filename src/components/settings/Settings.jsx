import React from "react";
import S from "../../elements";
import Input from "../input";
import formatTimeLeft from "../../utils/formatTimeLeft";

const Settings = ({
  open,
  setSettings,
  totalRounds,
  breathingSpeed,
  totalBreaths,
  breathHoldTime,
  setTotalRounds,
  setBreathingSpeed,
  setTotalBreaths,
  setBreathHoldTime,
}) => {
  return (
    <S.Settings open={open}>
      <S.SettingsTitle>Settings</S.SettingsTitle>
      <Input
        label={`Rounds: ${totalRounds}`}
        value={totalRounds}
        min="1"
        max="10"
        onChange={(e) => setTotalRounds(e.target.value)}
      />
      <Input
        label={`Breathing Speed: ${breathingSpeed / 1000}s`}
        value={breathingSpeed}
        min="1000"
        max="10000"
        step="500"
        onChange={(e) => setBreathingSpeed(e.target.value)}
      />
      <Input
        label={`Breath Hold Time: ${formatTimeLeft(breathHoldTime)}`}
        value={breathHoldTime}
        min="1000"
        max="300000"
        step="1000"
        onChange={(e) => setBreathHoldTime(e.target.value)}
      />
      <Input
        label={`Breaths Per Round: ${totalBreaths}`}
        value={totalBreaths}
        min="1"
        max="50"
        onChange={(e) => setTotalBreaths(e.target.value)}
      />
      <S.PrimaryButton fullWidth bottom onClick={() => setSettings(false)}>
        Close
      </S.PrimaryButton>
    </S.Settings>
  );
};

export default Settings;
