import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";

import { api } from "../../services/api";

import {
  TitleSection,
  SearchBar,
  TopicContainer,
  Loading,
} from "../../components/ui";

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

const AddLesson: React.FC = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [seletedSubject, setSelectedSubject] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<Keyable>({});

  const history = useHistory();

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
      .catch((err) => {
        setShowLoading(false);
        console.log("err in call rote subject/list");
      });
  };

  const getTopics = async (subjectId: string) => {
    setShowLoading(true);

    await api
      .get(`topic/list/${subjectId}`)
      .then((response) => {
        setTopicList(response.data);
      })
      .catch((err) => {
        setShowLoading(false);

        console.log("err in call rote", `topic/list/${subjectId}`);
      });

    setShowLoading(false);
  };

  const getFiltredTopics = async (text: string) => {
    if (!text) {
      getTopics(seletedSubject);
      return;
    }

    setShowLoading(true);

    await api
      .get(`topic/list/${seletedSubject}`)
      .then((response) => {
        setTopicList(response.data);
      })
      .catch((err) =>
        console.log("err in call rote", `topic/list/${seletedSubject}`)
      );

    setShowLoading(false);
  };

  const debouncedOnChange = debounce(
    (text: string) => getFiltredTopics(text),
    500
  );

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
          <option value={subject.id} key={subject.id}>
            {subject.name}
          </option>
        ))}
      </StyledComboBox>
      {seletedSubject && (
        <>
          <p>Tópicos</p>
          <SearchBar
            placeholder="Exemplo: Revolta da Vacina"
            onChange={(e: Keyable) => debouncedOnChange(e.target.value)}
          />
          <StyledContentBox>
            {topicList?.map((topic: Keyable) => (
              <TopicContainer
                key={topic.id}
                data={topic}
                setSelectedTopic={setSelectedTopic}
                isSelected={selectedTopic.id == topic.id}
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
