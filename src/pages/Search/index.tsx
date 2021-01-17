import React from "react";
import { IonPage } from "@ionic/react";
import * as S from "./styles";
import { SearchBar } from "../../components/ui";

const SearchPage: React.FC = () => {
  return (
    <IonPage>
      <S.StyledContent
        color="content-background-light"
        className="ion-padding ion-text-center"
      >
        <S.Header>
          <S.TitleSearch>Buscar Matéria</S.TitleSearch>
          <SearchBar onChange={() => null} placeholder="Digite sua busca" />
        </S.Header>
      </S.StyledContent>
    </IonPage>
  );
};

export default SearchPage;
