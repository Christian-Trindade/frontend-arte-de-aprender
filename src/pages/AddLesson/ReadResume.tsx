import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Loading } from "../../components/ui";

import {
  ResumeContainer,
  ResumeContentBox,
  NextButton,
  NextButtonContainer,
  HeaderResumeBox,
  ResumeImage,
} from "./components/ui";

interface Keyable {
  [key: string]: any;
}

interface UrlParams {
  id: string;
}

const baseImageUrl =
  "https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/";

const ReadResume: React.FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [data, setData] = useState<Keyable>({});

  const { id } = useParams<UrlParams>();
  const history = useHistory();

  useEffect(() => {
    getTopicData();
  }, []);

  const getTopicData = async () => {
    setShowLoading(true);
    api
      .get(`topic/view/${id}`)
      .then((response) => {
        setData(response.data);

        const box = document.getElementById("resume-box");
        const resumeBox = document.getElementById("content-box");

        if (box && resumeBox) {
          box.innerHTML = response.data.content;
          resumeBox.innerHTML = response.data.resume;
        }
      })
      .catch((err) => console.log(`err in call rote topic/view/${id}`));

    setShowLoading(false);
  };

  return (
    <ResumeContainer>
      <HeaderResumeBox>
        <div className="title">Resumo</div>
        <div className="content">
          <div>
            <ResumeImage
              src={`${baseImageUrl}${data.subject_id}/${data.image}`}
            />
          </div>
          <div className="text-container">
            <div className="subjectTitle">{data.name}</div>
            <div id="content-box" />
          </div>
        </div>
      </HeaderResumeBox>
      <ResumeContentBox id="resume-box"></ResumeContentBox>
      <NextButtonContainer>
        <NextButton
          //   disabled={Object.keys(selectedTopic).length == 0}
          shape="round"
          color="primarias-rosa-fraco"
          onClick={() => history.push(`/ChoiceBeat/${id}`)}
        >
          Próximo
        </NextButton>
      </NextButtonContainer>{" "}
      <Loading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Carregando..."}
        spinner="circles"
        mode="ios"
      />
    </ResumeContainer>
  );
};

export default ReadResume;
