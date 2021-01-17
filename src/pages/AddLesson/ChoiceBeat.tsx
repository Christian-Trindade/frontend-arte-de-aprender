import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { IonAlert } from "@ionic/react";

import { api } from "../../services/api";

import { TitleSection, MusicPlayer, Loading } from "../../components/ui";

import {
  Container,
  StyledComboBox,
  NextButton,
  NextButtonContainer,
} from "./components/ui";

interface Keyable {
  [key: string]: any;
}

interface UrlParams {
  id: string;
}

const baseBeatUrl = "https://plataform-music.s3-sa-east-1.amazonaws.com/beats/";

const baseBeatImg =
  "https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/beats/";

const ChoiceBeat: React.FC = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [seletedCategory, setSeletedCategory] = useState("");
  const [beatList, setBeatList] = useState([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [selectedBeat, setSelectedBeatd] = useState<Keyable>({});
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const history = useHistory();
  const { id } = useParams<UrlParams>();

  useEffect(() => {
    setShowLoading(true);
    getCategory();
  }, []);

  useEffect(() => {
    setBeatList([]);
    setSelectedBeatd({});
    getBeats(seletedCategory);
  }, [seletedCategory]);

  const getCategory = async () => {
    api
      .get("beat-category/list-all")
      .then((response) => {
        setCategoryList(response.data);
        setSeletedCategory(response.data[0].id);
        getBeats(response.data[0].id);
      })
      .catch((err) => console.log("err in call rote beat-category/list-all"));
  };

  const getBeats = async (categoryBeatId: string) => {
    setShowLoading(true);

    await api
      .get(`beat/list-category/${categoryBeatId}`)
      .then((response) => {
        setBeatList(response.data);
        setSelectedBeatd(response.data[0]);
      })
      .catch((err) =>
        console.log("err in call rote", `beat/list-category/${categoryBeatId}`)
      );

    setShowLoading(false);
  };

  const getBeatById = (id: string) => {
    beatList.map((beat: Keyable) => {
      if (beat.id == id) {
        setSelectedBeatd(beat);
      }
    });
  };

  const goToRec = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        history.push(`/RecLesson/${selectedBeat.id}/${id}`);
      })
      .catch((err) => {
        setMessage("Você precisa permitir o microfone para gravar sua aula");
        setIserror(true);
        console.log(err);
      });
  };

  return (
    <Container>
      <TitleSection color="var(--ion-color-texto-preto)">
        Escolha um Beat
      </TitleSection>

      <StyledComboBox
        name="category-select"
        onChange={(e) => setSeletedCategory(e.target.value)}
      >
        {categoryList.map((category: Keyable) => (
          <option value={category.id}>{category.name}</option>
        ))}
      </StyledComboBox>

      {beatList.length > 0 && (
        <StyledComboBox
          name="beat-select"
          onChange={(e: Keyable) => {
            getBeatById(e.target.value);
          }}
        >
          {beatList.map((beat: Keyable) => (
            <option value={beat.id}>{beat.name}</option>
          ))}
        </StyledComboBox>
      )}

      <br />
      <br />

      <MusicPlayer
        data={{
          selectedBeat,
          baseBeatUrl,
          image: `${baseBeatImg}${selectedBeat.image}`,
        }}
      />

      <NextButtonContainer>
        <NextButton
          shape="round"
          color="primarias-rosa-fraco"
          onClick={() => goToRec()}
        >
          Próximo
        </NextButton>
      </NextButtonContainer>

      <IonAlert
        isOpen={iserror}
        onDidDismiss={() => setIserror(false)}
        header={"Opa! esqueceu algo?"}
        message={message}
        buttons={["OK"]}
        mode="ios"
      />

      <Loading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Carregando..."}
        spinner="circles"
        mode="ios"
      />
    </Container>
  );
};

export default ChoiceBeat;
