import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 30px 50px;
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  color: #4caf50;
  font-size: 2rem;
`;

// Animation to change opacity
const fadeAnimation = keyframes`
  0% { opacity: 1; }
  20% { opacity: 1; }
  25% { opacity: 0; }
  95% { opacity: 0; }
  100% { opacity: 1; }
`;

export const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: ${fadeAnimation} 15s infinite;
  opacity: 0;
  animation-delay: ${({ delay }) => delay}s;
`;
