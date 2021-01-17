import styled from "styled-components";
import { IonContent } from "@ionic/react";

export const Header = styled.header`
  margin-bottom: 1.5rem;
`;

export const StyledContent = styled(IonContent)`
  border: 0;
`;

export const TitleSearch = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--ion-color-primarias-rosa);
  text-align: left;
  span {
    display: block;
    color: var(--ion-color-texto-preto);
    font-size: 1.4rem;
  }
`;

export const ButtonPlayMain = styled.div`
  background-color: var(--ion-color-primarias-rosa-fraco);
  width: 5rem;
  height: 5rem;
  box-shadow: 0px 4px 4px rgba(235, 122, 142, 0.5);
  border-radius: 100%;
  margin-top: -4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;
