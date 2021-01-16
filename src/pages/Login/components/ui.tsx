import styled, { keyframes } from "styled-components";

import { IonContent } from "@ionic/react";

const enterAnimation = keyframes`
 0% { margin-left: 100vw;}
 100% {margin-left: 0vw;}
`;

export const StyledContent = styled(IonContent)`
  #container {
    animation-name: ${enterAnimation};
    animation-duration: 0.4s;
  }

  #logoContainer {
    margin-bottom: 2vh;
  }

  .gridContainer {
    padding-top: 4vh;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .checkBoxLogin {
    height: 20px;
    width: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    margin-right: 10px;
    border-radius: 3px;
  }

  .checkBoxLoginActive {
    border: none;
    color: #61ffa5;
    font-size: 1.8rem;
    overflow: unset;
    padding: 0px;
  }

  #rowForgotPassword {
    color: var(--ion-color-primarias-rosa-fraco);
    text-align: end;
    cursor: pointer;
    padding-right: 3vw;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 2vh;
  }

  #confirmMessage {
    color: #61ffa5;
    font-style: italic;
    font-size: 0.9rem;
  }

  #rowButtonLogin {
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
  }

  #rowCreateAccount {
    color: var(--ion-color-primarias-rosa-fraco);
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 2vh;

    #label {
      font-weight: normal;
      color: var(--ion-color-texto-branco);
    }
  }

  #formRow {
    margin-top: 2vh;
  }
`;

export const InputLogin = styled.input`
  --background: #044360;
  --placeholder-color: #fff;
  --placeholder-opacity: 100%;
  --placeholder-font-style: italic;
  color: black;
  font-size: 2.4vh;
  margin-top: 5px;
  width: 95%;
  height: 7vh;
  padding: 1vh 2vw;

  &:focus {
    outline: none !important;
    border-color: var(--ion-color-primarias-rosa);
    box-shadow: 0 0 10px var(--ion-color-primarias-rosa);
  }
`;
