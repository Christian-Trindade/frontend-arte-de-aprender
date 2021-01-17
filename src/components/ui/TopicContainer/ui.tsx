import styled from "styled-components";

import { IonItem } from "@ionic/react";

interface TopicContainerProps {
  isSelected: boolean;
}

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
