import styled from "styled-components";

import { IonLoading, IonButton } from "@ionic/react";

import SearchBar from "./Searchbar";
import TopicContainer from "./TopicContainer";
import MusicPlayer from "./MusicPlayer";

interface TitleSectionProps {
  color?: string;
}

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

export const RoundedButton = styled(IonButton)`
  --color: var(--ion-color-texto-branco);
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 3vh;
  text-transform: capitalize;
`;

export const TitleSection = styled.div<TitleSectionProps>`
  box-sizing: border-box;
  text-align: start;
  line-height: 3.5vh;
  padding-left: 4vw;
  height: 3.5vh;
  border-left: 7px solid var(--ion-color-primarias-rosa-fraco);
  font-weight: 600;
  font-size: 3.5vh;
  color: ${(props) =>
    props.color ? props.color : "var(--ion-color-texto-branco)"};
  margin-left: 7px;
`;

export const ComboBox = styled.select`
  width: 100%;
  height: 6vh;
  background: var(--ion-color-content-background-light);
  color: var(--ion-color-texto-cinza-input);
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  border: none;
  padding-left: 2vw;
`;

export const ContentBox = styled.div`
  background: var(--ion-color-content-background-light);
  color: var(--ion-color-texto-cinza-input);
  width: 100%;
  overflow: scroll;
  font-size: 2vh;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
`;

export { SearchBar, TopicContainer, MusicPlayer };
