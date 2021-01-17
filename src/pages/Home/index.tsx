import { IonPage } from "@ionic/react";
import * as React from "react";
import { SearchBar } from "../../components/ui";

import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <IonPage>
      <S.StyledContent
        color="content-background-light"
        className="ion-padding ion-text-center"
      >
        <S.Header>
          <S.TitleSearch>
            <span>Olá Hugo,</span>Buscar Matéria
          </S.TitleSearch>
          <SearchBar onChange={() => null} placeHolder="Digite sua busca" />
        </S.Header>
      </S.StyledContent>
    </IonPage>
  );
};

export default Home;
