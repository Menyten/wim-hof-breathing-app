import React from "react";
import S from "./../../elements";

const BreathingCircle = ({ running, breathingSpeed, breathCount }) =>
  running ? (
    <S.Circle time={breathingSpeed}>
      <S.CircleText>{breathCount ?? 0}</S.CircleText>
    </S.Circle>
  ) : (
    "Adjust settings and press start"
  );

export default BreathingCircle;
