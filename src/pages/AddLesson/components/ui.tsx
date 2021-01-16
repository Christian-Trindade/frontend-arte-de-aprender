import styled, { keyframes } from "styled-components";

const enterAnimation = keyframes`
 0% { margin-left: 100vw;}
 100% {margin-left: 0vw;}
`;

export const Container = styled.div`
  animation-name: ${enterAnimation};
  animation-duration: 0.3s;
  padding: 7vh 3vw 0vh 3vw;
`;
