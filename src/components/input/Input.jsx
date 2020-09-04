import React from "react";
import S from "../../elements";
const Input = ({ label, min, max, step, onChange, value }) => {
  return (
    <S.InputGroup>
      <S.InputLabel htmlFor={label}>{label}</S.InputLabel>
      <S.Input
        type="range"
        id={label}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
      />
    </S.InputGroup>
  );
};

export default Input;
