import React from "react";
import formatTimeLeft from "../../utils/formatTimeLeft";
import S from "../../elements";

const Countdown = ({ breathHoldTime }) => {
  return <S.CountdownTime>{formatTimeLeft(breathHoldTime)}</S.CountdownTime>;
};

export default Countdown;
