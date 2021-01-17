import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";

import { api } from "../../services/api";

import { TitleSection, SearchBar, Loading } from "../../components/ui";

import {
  Container,
  StyledComboBox,
  StyledContentBox,
  NextButton,
  NextButtonContainer,
} from "./components/ui";

interface Keyable {
  [key: string]: any;
}

const ChoiceBeat: React.FC = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [seletedCategory, setSeletedCategory] = useState("");
  const [beatList, setBeatList] = useState([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<Keyable>({});

  const history = useHistory();

  useEffect(() => {
    setShowLoading(true);
    getCategory();
  }, []);

  useEffect(() => {
    setBeatList([]);
    setSelectedTopic({});
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
      })
      .catch((err) =>
        console.log("err in call rote", `beat/list-category/${categoryBeatId}`)
      );

    setShowLoading(false);
  };

  //   const getFiltredTopics = async (text: string) => {
  //     if (!text) {
  //       getTopics(seletedSubject);
  //       return;
  //     }

  //     setShowLoading(true);

  //     await api
  //       .get(`topic/list/${seletedSubject}`)
  //       .then((response) => {
  //         setTopicList(response.data);
  //       })
  //       .catch((err) =>
  //         console.log("err in call rote", `topic/list/${seletedSubject}`)
  //       );

  //     setShowLoading(false);
  //   };

  //   const debouncedOnChange = debounce(
  //     (text: string) => getFiltredTopics(text),
  //     500
  //   );

  return (
    <Container>
      <TitleSection color="var(--ion-color-texto-preto)">
        Escolha um Beat
      </TitleSection>

      <StyledComboBox
        name="material-select"
        onChange={(e) => setSeletedCategory(e.target.value)}
      >
        {categoryList.map((subject: Keyable) => (
          <option value={subject.id}>{subject.name}</option>
        ))}
      </StyledComboBox>

      {/* {seletedSubject && (
        <>
          <p>Tópicos</p>
          <SearchBar
            placeholder="Exemplo: Revolta da Vacina"
            onChange={(e: Keyable) => debouncedOnChange(e.target.value)}
          />
          <StyledContentBox>
            {topicList?.map((topic: Keyable) => (
              <TopicContainer
                data={{ ...topic, categoryId: seletedSubject }}
                setSelectedTopic={setSelectedTopic}
                selectedTopic={selectedTopic}
              />
            ))}
          </StyledContentBox>
          <NextButtonContainer>
            <NextButton
              disabled={Object.keys(selectedTopic).length == 0}
              shape="round"
              color="primarias-rosa-fraco"
              onClick={() => history.push(`ReadResume/${selectedTopic.id}`)}
            >
              Próximo
            </NextButton>
          </NextButtonContainer>
        </>
      )} */}

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
