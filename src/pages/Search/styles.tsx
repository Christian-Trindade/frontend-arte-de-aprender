import styled from "styled-components";
import { IonContent } from "@ionic/react";

export const Header = styled.header``;

export const StyledContent = styled(IonContent)``;

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
