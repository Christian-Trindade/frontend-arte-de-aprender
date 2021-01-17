import React, { useEffect, useState, useRef } from "react";
import {
  IonBackButton,
  IonButtons,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import * as S from "./styles";
import { Keyable } from "../../types/Keyable";
import { api } from "../../services/api";
import { useHistory, useParams } from "react-router";

interface Props {
  location?: any;
}

interface UrlParams {
  id: string;
}

type Prop = {
  id: string;
};

const ListLesson: React.FC<Props> = ({ location }) => {
  const beat = useRef<HTMLAudioElement>(null);
  const baseRyhmeUrl = "https://plataform-music.s3-sa-east-1.amazonaws.com";

  const history = useHistory();
  //const { id } = useParams<UrlParams>();

  const { id, data } = location.state;

  console.warn(id, data);
  const [list, setList] = useState([]);
  const [lessonFocus, setLessonFocus] = useState({});

  const [isPlaying, setIsPlaying] = useState(false);

  let indexLesson: number = 0;

  const chooseLesson = (lesson: Keyable) => {
    // setLessonFocus(lesson);
    console.warn("Escolha", lesson);
    if (beat.current) {
      beat.current.pause();
      beat.current.src = `${baseRyhmeUrl}/topic/${data.id}/user/${lesson.user_id}/${lesson.url}`;
      beat.current.loop = false;
      beat.current.play();
      setIsPlaying(true);
    }
  };

  const getLessons = async (id: any) => {
    console.warn("o id", id);
    let response: Keyable = await api.get(`/audio/list-topic/${id}`);

    const resumeBox = document.getElementById("resume-box");
    if (resumeBox) {
      resumeBox.innerHTML = data.resume;
    }

    console.warn(response.data);
    return response.data;
  };

  useEffect(() => {
    let mounted = true;
    getLessons(data.id).then((resp) => {
      if (mounted) {
        setList(resp);
        if (resp.length > 0) {
          let lesson = resp[0];
          if (beat.current) {
            beat.current.src = `${baseRyhmeUrl}/topic/${data.id}/user/${lesson.user_id}/${lesson.url}`;
          }
        }
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const togglePlay = () => {
    if (beat.current) {
      if (isPlaying) {
        setIsPlaying(false);
        beat.current.pause();
      } else {
        setIsPlaying(true);
        beat.current.play();
      }
    }
  };

  const ctrlLesson = (isNext: boolean) => {
    let size: number = list.length;

    if (isNext) {
      if (size > indexLesson + 1) {
        indexLesson += 1;
      } else {
        return false;
      }
    } else {
      if (indexLesson > 0) {
        indexLesson -= 0;
      }
    }

    let lesson = list[indexLesson];

    console.warn("Lesson@@@@@", lesson);
    chooseLesson(lesson);
  };

  return (
    <IonPage>
      <S.StyledContent
        color="content-background-light"
        className="ion-text-center"
      >
        <S.BoxTop>
          <h1>Resumo</h1>
          <div className="container">
            <S.BoxTumbnails>
              <img
                src={`https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/${data.subject_id}/${data.image}`}
                alt=""
                width="130"
                height="130"
              />
            </S.BoxTumbnails>
            <S.BoxText>
              <h2>{data.name}</h2>
              <span id="resume-box"></span>
            </S.BoxText>
          </div>
        </S.BoxTop>
        <S.Container>
          <S.TitleSectionUI color={"var(--ion-color-texto-preto)"}>
            Aulas
          </S.TitleSectionUI>

          <S.ListContainer>
            <ul>
              {list.length > 0 ? (
                list.map((el: Keyable, index) => {
                  return (
                    <li key={el.id} onClick={() => chooseLesson(el)}>
                      <div>
                        <p>
                          {index + 1}. {el.title}
                        </p>
                        <p className="description">Autor: {el.user_name}</p>
                      </div>
                    </li>
                  );
                })
              ) : (
                <p
                  onClick={() => history.push("/AddLesson")}
                  style={{ fontSize: "2rem" }}
                >
                  Ainda não temos nada para mostrar nesse tópico. <br />
                  <br />
                  <span style={{ color: "var(--ion-color-primarias-rosa)" }}>
                    Grave agora uma explicação!
                  </span>
                </p>
              )}
            </ul>
          </S.ListContainer>
        </S.Container>
        <audio
          style={{ opacity: 0 }}
          src="/beats/beat.webm"
          id="beat"
          ref={beat}
          controls
        />
      </S.StyledContent>
      <IonFooter>
        <S.BoxFooter>
          <S.ArrowImage
            src="assets/vectors/arrow-left.svg"
            onClick={() => ctrlLesson(false)}
            style={{ opacity: list.length > 0 ? 1 : 0.5 }}
          />
          <S.ButtonPlayMain onClick={() => togglePlay()}>
            {isPlaying ? (
              <img
                src="assets/vectors/pause.svg"
                alt=""
                width="20"
                height="20"
              />
            ) : (
              <img
                src="assets/vectors/play.svg"
                alt=""
                width="20"
                height="20"
                style={{ paddingLeft: "0.2rem" }}
              />
            )}
          </S.ButtonPlayMain>
          <S.ArrowImage
            src="assets/vectors/arrow-right.svg"
            onClick={() => ctrlLesson(true)}
            style={{ opacity: list.length > 0 ? 1 : 0.5 }}
          />
        </S.BoxFooter>
      </IonFooter>
    </IonPage>
  );
};

export default ListLesson;
