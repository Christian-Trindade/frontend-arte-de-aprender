import styled, { keyframes } from "styled-components";

import { IonItem } from "@ionic/react";

import { ComboBox, ContentBox, RoundedButton } from "../../../components/ui";

interface NextButtonProps {
  disable?: boolean;
}

interface TopicContainerProps {
  isSelected: boolean;
}

const enterAnimation = keyframes`
 0% { margin-left: 100vw;}
 100% {margin-left: 0vw;}
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
