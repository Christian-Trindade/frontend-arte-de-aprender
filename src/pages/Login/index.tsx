import * as React from "react";
import { useState, useEffect } from "react";
import { IonPage, IonGrid, IonRow, IonCol, IonAlert } from "@ionic/react";
import { useHistory } from "react-router-dom";

import { isAuthenticated, login } from "../../services/auth";

import { Loading, ButtonPrimary, TitleSection } from "../../components/ui";

import { InputLogin, StyledContent } from "./components/ui";

function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [sendRecovery, setsendRecovery] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/Opportunities/home");
    }
  }, []);

  const handleLogin = async () => {
    if (!email) {
      setMessage("Digite um e-mail");
      setIserror(true);
      return;
    }
    if (validateEmail(email) === false) {
      setMessage("Seu e-mail é inválido");
      setIserror(true);
      return;
    }

    if (!password || password.length < 6) {
      setMessage("Senha incorreta");
      setIserror(true);
      return;
    }

    const userData = {
      email,
      password,
    };

    setShowLoading(true);

    let responseLogin = await login(userData);

    if (responseLogin) {
      setShowLoading(false);
      history.push("/home");
    } else {
      setMessage("Dados incorretos");
      setIserror(true);
      setShowLoading(false);
    }
  };

  return (
    <IonPage>
      <StyledContent
        color="content-background"
        className="ion-padding ion-text-center"
      >
        <div id="container">
          <IonGrid className="gridContainer">
            <IonRow id="logoContainer">
              <IonCol>
                <img
                  src="/assets/vectors/logo-text-white.svg"
                  alt="A logo do projeto, um livro em branco"
                />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <TitleSection>Entre</TitleSection>
              </IonCol>
            </IonRow>

            <IonRow id="formRow">
              <IonCol>
                <InputLogin
                  type="email"
                  value={email}
                  placeholder={"Digite seu e-mail"}
                  onChange={(e: any) => setEmail(e.target.value!)}
                />
                <InputLogin
                  placeholder={"Digite sua senha"}
                  type="password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value!)}
                />
              </IonCol>
            </IonRow>

            <IonRow id="rowForgotPassword">
              <IonCol>Esqueceu a senha?</IonCol>
            </IonRow>

            <IonRow id="rowButtonLogin">
              <IonCol>
                <ButtonPrimary
                  color="primarias-rosa"
                  expand="full"
                  onClick={handleLogin}
                >
                  Entrar
                </ButtonPrimary>
              </IonCol>
            </IonRow>

            <IonRow
              id="rowCreateAccount"
              onClick={() => history.push("/CreateAccount")}
            >
              <IonCol>
                <div id="label">Não tem conta?</div>
                <div>Crie agora!</div>
              </IonCol>
            </IonRow>
            {sendRecovery && (
              <IonRow id="rowCheckBox">
                <p id="confirmMessage">
                  Uma mensagem foi enviada para o e-mail cadastrado
                </p>
              </IonRow>
            )}
          </IonGrid>
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
            message={"Entrando..."}
            spinner="circles"
            mode="ios"
          />
        </div>
      </StyledContent>
    </IonPage>
  );
};

export default Login;
