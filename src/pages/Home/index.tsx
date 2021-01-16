import { IonPage, IonRow } from "@ionic/react";
import * as React from "react";

import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <IonPage>
      <S.StyledContent
        color="content-background-light"
        className="ion-padding ion-text-center"
      >
        <div>
          <S.Header>
            <S.TitleSearch>
              <span>Olá Hugo,</span> Buscar Matéria
            </S.TitleSearch>
          </S.Header>
        </div>
      </S.StyledContent>
    </IonPage>
  );
};

export default Home;
