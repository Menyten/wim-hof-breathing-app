import React from "react";
import formatTimeLeft from "../../utils/formatTimeLeft";
import S from "../../elements";

const Countdown = ({ time }) => (
  <S.CountdownTime>{formatTimeLeft(time)}</S.CountdownTime>
);

export default Countdown;
