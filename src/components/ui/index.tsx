import styled from "styled-components";

import { IonLoading, IonButton } from "@ionic/react";

import SearchBar from "./Searchbar";

export const Loading = styled(IonLoading)`
  --spinner-color: #044360;
  color: #044360;
  --width: 90%;
  --height: 15%;
  --background: #fff;
`;

export const ButtonPrimary = styled(IonButton)`
  --color: var(--ion-color-texto-branco);
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 3vh;
  text-transform: capitalize;
  max-height: 7vh;
`;

export const TitleSection = styled.div`
  box-sizing: border-box;
  text-align: start;
  line-height: 5vh;
  padding-left: 4vw;
  height: 5vh;
  border-left: 7px solid var(--ion-color-primarias-rosa);
  font-weight: 600;
  font-size: 3.5vh;
  color: var(--ion-color-texto-branco);
  margin-left: 7px;
`;

export { SearchBar };
