import styled from "styled-components";
import { IonContent } from "@ionic/react";

import { TitleSection } from "../../components/ui";

export const StyledContent = styled(IonContent)``;

export const Header = styled.header``;

export const TitleSectionUI = styled(TitleSection)`
  margin: 1.5rem 0;
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

export const ScrollHorizontalDiv = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: auto;
  display: flex;
  min-height: 10rem;
  padding: 1rem 0;
`;
