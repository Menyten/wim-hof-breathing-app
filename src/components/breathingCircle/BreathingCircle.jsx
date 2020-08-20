import React from "react";
import S from "./../../elements";

const BreathingCircle = ({ running, breathingTime, breathCount }) => {
  return running ? (
    <S.Circle time={breathingTime}>
      <S.CircleText>{breathCount}</S.CircleText>
    </S.Circle>
  ) : (
    "Adjust settings and press start"
  );
};

export default BreathingCircle;
