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

export const StyledComboBox = styled(ComboBox)`
  margin-top: 2.4vh;
`;

export const StyledContentBox = styled(ContentBox)`
  margin-top: 2.4vh;
  height: 40vh;
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
export const TopicContainerDiv = styled(IonItem)<TopicContainerProps>`
  background-color: ${(props) =>
    props.isSelected
      ? "var(--ion-color-texto-cinza-input)"
      : "var(--ion-color-texto-branco)"};
  margin-bottom: 2vh;
  display: flex;

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
  }

  .qnt {
  }

  &:active {
    opacity: 0.6;
  }

  &:hover {
    background-color: var(--ion-color-texto-cinza-input);
  }
`;

export const TopicImage = styled.img`
  max-height: 8vh;
  border-radius: 2vh;
  margin-right: 4vw;
`;
