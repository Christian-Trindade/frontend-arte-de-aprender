import React, { useEffect, useState } from "react";
import { IonFooter, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import * as S from "./styles";
import { Keyable } from "../../types/Keyable";
import { api } from "../../services/api";

interface Props {}

const ListLesson: React.FC<Props> = () => {
  const [list, setList] = useState([]);
  const [lessonFocus, setLessonFocus] = useState({});

  const [isPlaying, setIsPlaying] = useState(false);

  const chooseLesson = (lesson: object) => {
    setIsPlaying(true);
    setLessonFocus(lesson);
    // let beat: HTMLAudioElement = document.getElementById("beat");

    /*   if (beat) {
      // beat.src = lesson?.url;
      beat.loop = true;
      beat.play();
    }*/
  };

  const getLessons = async (id: number) => {
    let response: Keyable = await api.get(`/audio/list-topic/${id}`);

    console.warn(response.data);
    return response.data;
  };

  useEffect(() => {
    let mounted = true;
    getLessons(26).then((resp) => {
      if (mounted) {
        setList(resp);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);

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
                src="https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/3/era-vargas.jpg"
                alt=""
                width="130"
                height="130"
              />
            </S.BoxTumbnails>
            <S.BoxText>
              <h2>A Revolta de Vacina</h2>
              <p>
                A Revolta da Vacina foi um motim popular ocorrido entre 10 e 16
                de novembro de 1904 na cidade do Rio de Janeiro, então capital
                do Brasil.
              </p>
            </S.BoxText>
          </div>
        </S.BoxTop>
        <S.Container>
          <S.TitleSectionUI color={"var(--ion-color-texto-preto)"}>
            Aulas
          </S.TitleSectionUI>

          <S.ListContainer>
            <ul>
              {/*
                    beat_id: 1
                    created_at: "2021-01-17T15:26:08.000000Z"
                    id: 3
                    title: "teste"
                    topic_id: 26
                    updated_at: "2021-01-17T15:26:08.000000Z"
                    url: null
                    user_id: 4
                    */}
              {list.map((el: Keyable, index) => {
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
              })}
            </ul>
          </S.ListContainer>
        </S.Container>
        <audio
          style={{ opacity: 0 }}
          src="/beats/beat.webm"
          id="beat"
          controls
        />
      </S.StyledContent>
      <IonFooter>
        <S.BoxFooter>
          <S.ArrowImage src="assets/vectors/arrow-left.svg" />
          <S.ButtonPlayMain>
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
          <S.ArrowImage src="assets/vectors/arrow-right.svg" />
        </S.BoxFooter>
      </IonFooter>
    </IonPage>
  );
};

export default ListLesson;
