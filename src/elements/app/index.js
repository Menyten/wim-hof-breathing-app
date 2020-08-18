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
  height: 100%;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  animation: ${breathingAnimation} 2s ease-in-out infinite;
  animation-direction: alternate;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default {
  Background,
  Container,
  Title,
  Circle,
  CircleText,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
};
