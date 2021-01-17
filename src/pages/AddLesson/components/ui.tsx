import styled, { keyframes } from "styled-components";

import { ComboBox, ContentBox, RoundedButton } from "../../../components/ui";

interface NextButtonProps {
  disable?: boolean;
}

interface TopicContainerProps {
  isSelected: boolean;
}

interface RecContainer {
  isStarted: boolean;
}

const enterAnimation = keyframes`
 0% { margin-left: 100vw;}
 100% {margin-left: 0vw;}
`;

const breatheAnimation = keyframes`
 0% {  opacity: 1 }
 50% {  opacity: 0.2 }
 100% {  opacity: 1 }
`;

export const Container = styled.div`
  animation-name: ${enterAnimation};
  animation-duration: 0.3s;
  padding: 7vh 3vw 0vh 3vw;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

  p {
    font-size: 2vh;
  }
`;

export const ResumeContainer = styled.div`
  animation-name: ${enterAnimation};
  animation-duration: 0.3s;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

  p {
    font-size: 2vh;
  }
`;

export const StyledComboBox = styled(ComboBox)`
  margin-top: 2.4vh;
`;

export const StyledContentBox = styled(ContentBox)`
  margin-top: 2.4vh;
  height: 40vh;
`;

export const ResumeContentBox = styled(ContentBox)`
  margin-top: 2.4vh;
  height: 45vh;
  max-height: 45vh;
  width: 93vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -3vh;
`;

export const NextButton = styled(RoundedButton)<NextButtonProps>`
  height: 8vh;
  width: 45vw;
  font-size: 2vh;
`;

export const NextButtonContainer = styled.div`
  width: 45vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7vh;
`;

export const HeaderResumeBox = styled.div`
  background-color: var(--ion-color-content-background);
  width: 100vw;
  height: 30vh;
  padding-top: 7vh;
  padding-left: 4vw;
  padding-right: 4vw;
  text-align: center;

  .content {
    display: flex;
    text-align: start;
  }

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color: var(--ion-color-texto-branco);
    font-size: 2vh;
    margin-bottom: 2vh;
  }

  .subjectTitle {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color: var(--ion-color-texto-branco);
    font-size: 2vh;
  }
  .text-container {
    margin-left: 4vw;
  }

  #content-box {
    color: var(--ion-color-texto-branco);
  }
`;

export const ResumeImage = styled.img`
  border-radius: 2vh;
  max-height: 15vh;
  min-width: 26vw;
`;

export const RecContainer = styled.div<RecContainer>`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4vh;
  text-align: center;

  .beat {
    opacity: 0;
  }

  .micSvg {
    animation-name: ${(props) => (props.isStarted ? breatheAnimation : null)};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .timer {
    margin-top: 2vh;
    color: var(--ion-color-tabs-icone-desativado);
    font-size: 6vh;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
  }

  .title {
    margin-top: 4vh;
    font-size: 4vh;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;

    animation-name: ${(props) => (props.isStarted ? breatheAnimation : null)};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .description {
    margin-top: 2vh;
    color: var(--ion-color-texto-cinza-input);
    font-size: 1.6vh;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
  }
`;
