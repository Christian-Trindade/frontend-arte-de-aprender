import React, { useEffect, useState } from "react";
import { IonPage, IonRow } from "@ionic/react";

import { SearchBar } from "../../components/ui";
import RoundButtonHome from "../../components/ui/RoundButtonHome";
import { api } from "../../services/api";
import hexToRgbA from "../../utils/hextorgba";

import * as S from "./styles";
import BoxSpotline from "../../components/ui/BoxSpotline";
import { Keyable } from "../../types/Keyable";

const Home: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [best, setBest] = useState([]);

  const getCategory = async () => {
    let response: Keyable = await api.get("/subject/list");
    console.warn("@@@@@@@@@@@=>", response);
    let temp = response?.data?.map((elem: Keyable) => {
      return {
        ...elem,
        shadow: hexToRgbA(elem.color),
      };
    });
    setCategories(temp);
  };
  const getBest = async () => {
    let response: Keyable = await api.get("/audio/list-best");

    setBest(response.data);
  };

  useEffect(() => {
    getCategory();
    getBest();
  }, []);

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
          <SearchBar placeholder="Digite sua busca" />
        </S.Header>
        <S.TitleSectionUI color={"var(--ion-color-texto-preto)"}>
          Categorias
        </S.TitleSectionUI>
        <IonRow>
          {categories.length > 0
            ? categories.map((el: Keyable) => (
                <RoundButtonHome
                  background={el.color}
                  shadow={`0px 4px 5px ${el.shadow}`}
                  title={el.name}
                  key={el.name}
                />
              ))
            : [1, 2, 3, 4, 5, 6].map((el) => (
                <RoundButtonHome skeleton={true} key={el} />
              ))}
        </IonRow>

        <S.TitleSectionUI color={"var(--ion-color-texto-preto)"}>
          Aula Destaque
        </S.TitleSectionUI>

        <S.ScrollHorizontalDiv>
          {best.length > 0
            ? best.map((el: Keyable) => (
                <BoxSpotline
                  key={el.audio_id}
                  tumbnail={`https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/${el.subject_id}/${el.image}`}
                  data={el.audio}
                />
              ))
            : [0, 1, 2, 3, 4, 5, 6].map((el) => (
                <BoxSpotline key={el} skeleton={true} />
              ))}
        </S.ScrollHorizontalDiv>
      </S.StyledContent>
    </IonPage>
  );
};

export default Home;
