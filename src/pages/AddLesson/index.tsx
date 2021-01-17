import * as React from "react";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { TitleSection, SearchBar, Loading } from "../../components/ui";

import {
  Container,
  StyledComboBox,
  StyledContentBox,
  NextButton,
  NextButtonContainer,
} from "./components/ui";

import TopicContainer from "./components/TopicContainer";

interface Keyable {
  [key: string]: any;
}

const AddLesson: React.FC = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [seletedSubject, setSelectedSubject] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<Keyable>({});

  useEffect(() => {
    setShowLoading(true);
    getCategory();
  }, []);

  useEffect(() => {
    setTopicList([]);
    setSelectedTopic({});
    getTopics(seletedSubject);
  }, [seletedSubject]);

  const getCategory = async () => {
    api
      .get("subject/list")
      .then((response) => {
        setSubjectList(response.data);
        setSelectedSubject(response.data[0].id);
        getTopics(response.data[0].id);
      })
      .catch((err) => console.log("err in call rote subject/list"));
  };

  const getTopics = async (subjectId: string) => {
    setShowLoading(true);

    await api
      .get(`topic/list/${subjectId}`)
      .then((response) => {
        setTopicList(response.data);
      })
      .catch((err) =>
        console.log("err in call rote", `topic/list/${subjectId}`)
      );

    setShowLoading(false);
  };

  return (
    <Container>
      <TitleSection color="var(--ion-color-texto-preto)">
        Adicionar
      </TitleSection>
      <StyledComboBox
        name="material-select"
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        {subjectList.map((subject: Keyable) => (
          <option value={subject.id}>{subject.name}</option>
        ))}
      </StyledComboBox>
      {seletedSubject && (
        <>
          <p>Tópicos</p>
          <SearchBar placeHolder="Exemplo: Revolta da Vacina" />
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
            >
              Próximo
            </NextButton>
          </NextButtonContainer>
        </>
      )}

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

export default AddLesson;
