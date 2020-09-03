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
  font-size: 2rem;
  font-weight: 700;
  color: #99fadc;
  margin: 2rem 0 12rem 0;
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
  border: none;
  border-radius: 5px;
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
  height: 40vh;
  bottom: ${({ open }) => (open ? 0 : "-1000px")};
  border-radius: 5px 5px 0 0;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
`;

export default {
  Background,
  Container,
  Title,
  Circle,
  CircleText,
  CountdownTime,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  Settings,
};
