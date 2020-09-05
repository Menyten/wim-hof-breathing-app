import styled, { keyframes } from "styled-components";

const breathingAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(10);
  }
`;

const Background = styled.div`
  background-color: #1184e8;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #99fadc;
  margin: 2rem 0 12rem 0;
`;

const Text = styled.p`
  color: #99fadc;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Circle = styled.section`
  background-color: #99fadc;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  animation: ${breathingAnimation} ${({ time }) => time}ms ease-in-out infinite;
  animation-direction: alternate;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountdownTime = styled.p`
  color: #99fadc;
  font-size: 3rem;
`;

const CircleText = styled.p`
  color: #1184e8;
  font-size: 0.125rem;
  font-weight: 700;
`;

const ButtonContainer = styled.section`
  margin: auto 0 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const PrimaryButton = styled.button`
  background-color: #99fadc;
  color: #1184e8;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  border: 1px solid #1184e8;
  border-radius: 5px;
  ${({ fullWidth }) => (fullWidth ? "width: 100%;" : "")}
  ${({ fullWidth }) => (fullWidth ? "margin: 0 0.5rem;" : "")}
  ${({
    bottom,
  }) => (bottom ? "margin-top: auto;" : "")}
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #99fadc;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 7px 31px;
  border: 1px solid #99fadc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Settings = styled.section`
  position: absolute;
  background-color: #99fadc;
  width: 100%;
  height: 100%;
  padding: 0 1rem 1rem;
  bottom: ${({ open }) => (open ? 0 : "-10000px")};
  border-radius: 5px 5px 0 0;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingsTitle = styled.h2`
  color: #1184e8;
  font-weight: 700;
  margin: 1rem 0;
`;

const InputGroup = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  height: 1rem;
  margin: 0;
  background: #1184e8;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 1rem;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    background: #99fadc;
    border-radius: 50%;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: #99fadc;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const InputLabel = styled.label`
  color: #1184e8;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export default {
  Background,
  Container,
  Title,
  Text,
  Circle,
  CircleText,
  CountdownTime,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  Settings,
  SettingsTitle,
  InputGroup,
  Input,
  InputLabel,
};
