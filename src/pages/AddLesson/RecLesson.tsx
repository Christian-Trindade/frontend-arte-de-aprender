import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IonAlert } from "@ionic/react";

import { api } from "../../services/api";
import { getUserData } from "../../services/auth";

import { TitleSection, Loading } from "../../components/ui";

import {
  Container,
  NextButton,
  NextButtonContainer,
  RecContainer,
} from "./components/ui";

interface Keyable {
  [key: string]: any;
}

interface UrlParams {
  beatId: string;
  topicId: string;
}

let rec: Keyable = {};
let blob: Blob;

const baseBeatUrl = "../assets/beats/";

let recTimer: NodeJS.Timeout;

const RecLesson: React.FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [beatData, setBeatData] = useState<Keyable>({});
  const [recStarted, setRecStarted] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isListen, setIsListen] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(5);
  const [title, setTitle] = useState<string>("Se Prepare!");
  const [userData, setUserData] = useState<Keyable>(JSON.parse(getUserData()));
  const [description, setDescription] = useState<string>(
    "Em 5 segundos comece a gravar sua aula."
  );

  const history = useHistory();
  const { beatId, topicId } = useParams<UrlParams>();
  const beat = useRef<HTMLAudioElement>(null);
  const recordedAudio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    getBeatData();

    window.onbeforeunload = exitPage;
    function exitPage() {}
  }, []);

  const getBeatData = async () => {
    api
      .get(`beat/view/${beatId}`)
      .then((response) => {
        setBeatData(response.data);
        startTimer();
      })
      .catch((err) => console.log("err in call rote beat-category/list-all"));
  };

  const listenOrSend = () => {
    if (isListen) {
      sendLesson();
    } else {
      if (beat.current) {
        beat.current.pause();
      }
      rec.stop();
      clearInterval(recTimer);
      setIsListen(true);
      setTitle("Ouvindo");
      setDescription("Ouça sua Aula!");
      setRecStarted(true);
    }
  };

  const sendLesson = async () => {
    if (!recordedAudio.current) return;

    setShowLoading(true);

    let formData = new FormData();
    formData.append("audio", blob, "chrisaudio.mp3");
    formData.append("topic_id", topicId);
    formData.append("beat_id", beatId);
    formData.append("user_id", userData.id);
    formData.append("title", "teste");

    await api
      .post("audio/create", formData)
      .then((response) => {
        setIsFinished(true);
      })
      .catch((err) => console.log(err, "audio/create"));

    setShowLoading(false);
  };

  const getStream = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        if (beat.current) {
          let audioChunks: any = [];

          let audioContext = new window.AudioContext();
          let microphone = audioContext.createMediaStreamSource(stream);

          let backgroundMusic = audioContext.createMediaElementSource(
            beat.current
          );

          let gainNodeBeat = audioContext.createGain();
          backgroundMusic.connect(gainNodeBeat);
          gainNodeBeat.gain.setValueAtTime(0.25, audioContext.currentTime);

          // envia o beat de volta ao audio element
          gainNodeBeat.connect(audioContext.destination);

          let mixedOutput = audioContext.createMediaStreamDestination();

          microphone.connect(mixedOutput);
          gainNodeBeat.connect(mixedOutput);

          let streamBeat = mixedOutput.stream;

          rec = new MediaRecorder(streamBeat);

          rec.ondataavailable = (e: Keyable) => {
            audioChunks.push(e.data);
            if (rec.state == "inactive") {
              blob = new Blob(audioChunks, { type: "audio/x-mpeg-3" });

              if (recordedAudio.current) {
                recordedAudio.current.src = URL.createObjectURL(blob);
                recordedAudio.current.autoplay = true;
              }
            }
          };

          rec.start();
          setIsRecording(true);

          let timer = 0;
          recTimer = setInterval(() => {
            timer++;
            setTimer(timer);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const startTimer = () => {
    if (beat?.current) {
      beat.current.play();
    }

    let timer = 5;
    const startTimer = setInterval(() => {
      timer--;
      if (timer == 0) {
        setTitle("Gravando");
        setDescription("Cante sua aula e compartilhe conhecimentos");
        setRecStarted(true);
        clearInterval(startTimer);
        getStream();
      }
      setTimer(timer);
    }, 1000);
  };

  return (
    <Container>
      <TitleSection color="var(--ion-color-texto-preto)">
        Grave sua Aula!
      </TitleSection>

      <RecContainer isStarted={recStarted && !isListen}>
        <img className="micSvg" src="/assets/vectors/mic.svg" />
        <div className="timer">{timer}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div>
          <audio
            ref={beat}
            id="beat"
            className="beat"
            crossOrigin="Anonymous"
            src={`${baseBeatUrl}${beatData.url}`}
          />

          <audio
            ref={recordedAudio}
            id="recordedAudio"
            src="testando"
            crossOrigin="Anonymous"
            className="beat"
          />
        </div>
      </RecContainer>

      <NextButtonContainer>
        <NextButton
          disabled={!isRecording}
          shape="round"
          color="primarias-rosa-fraco"
          onClick={() => listenOrSend()}
        >
          {isListen ? "Enviar" : "Parar/ouvir"}
        </NextButton>
      </NextButtonContainer>

      <IonAlert
        isOpen={isFinished}
        onDidDismiss={() => {
          history.push("/Home");
          window.location.reload();
        }}
        header={"Opa! Aula Enviada!"}
        message={"Sua Aula Foi enviada"}
        buttons={["OK"]}
        mode="ios"
      />

      <Loading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Enviando aula..."}
        spinner="circles"
        mode="ios"
      />
    </Container>
  );
};

export default RecLesson;
