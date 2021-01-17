import React, { useCallback, useState, ChangeEventHandler } from "react";
import { IonPage } from "@ionic/react";
import * as S from "./styles";
import { SearchBar, TopicContainer } from "../../components/ui";
import _ from "lodash";
import { Keyable } from "../../types/Keyable";
import { api } from "../../services/api";

const SearchPage: React.FC = () => {
  const [valueSearch, setValueSearch] = useState("");
  const search = async (name: string) => {
    let response: Keyable = await api.post("/topic/search", { name });

    return response.data;
  };

  const debouncedSave = useCallback(
    _.debounce((nextValue) => search(nextValue), 1000),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValueSearch(event.target.value);
    debouncedSave(event.target.value);
  };

  return (
    <IonPage>
      <S.StyledContent
        color="content-background-light"
        className="ion-padding ion-text-center"
      >
        <S.Header>
          <S.TitleSearch>Buscar Matéria</S.TitleSearch>
          <SearchBar onChange={null} placeHolder="Digite sua busca" />
        </S.Header>
        <div>
          <TopicContainer onClick={() => null} data={[]} isSelected />
        </div>
      </S.StyledContent>
    </IonPage>
  );
};

export default SearchPage;
