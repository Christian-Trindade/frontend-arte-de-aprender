import * as React from "react";
import { useState, useEffect } from "react";
import { IonPage, IonGrid, IonRow, IonCol, IonAlert } from "@ionic/react";
import { useHistory } from "react-router-dom";

import { isAuthenticated, create } from "../../services/auth";

import { Loading, ButtonPrimary, TitleSection } from "../../components/ui";

import { InputLogin, StyledContent } from "./components/ui";

function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const CreateAccount: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeted, setPasswordRepeted] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [sendRecovery, setsendRecovery] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/Opportunities/home");
    }
  }, []);

  const handleCreate = async () => {
    if (!name) {
      setMessage("Digite seu nome!");
      setIserror(true);
      return;
    }

    if (!email) {
      setMessage("Digite um e-mail!");
      setIserror(true);
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Seu e-mail é inválido!");
      setIserror(true);
      return;
    }

    if (!password) {
      setMessage("Digite uma senha!");
      setIserror(true);
      return;
    }

    if (password.length < 6) {
      setMessage("Senha Muito Curta!");
      setIserror(true);
      return;
    }

    if (passwordRepeted != password) {
      setMessage("As senhas ão diferentes!");
      setIserror(true);
    }

    const loginData = {
      name,
      email,
      password,
      profile: "novo",
    };

    setShowLoading(true);

    let responseLogin = await create(loginData);

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
                <img src="/assets/vectors/logo-text-white.svg" />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <TitleSection>Crie Sua Conta</TitleSection>
              </IonCol>
            </IonRow>

            <IonRow id="formRow">
              <IonCol>
                <InputLogin
                  type="text"
                  value={name}
                  placeholder={"Digite seu nome"}
                  onChange={(e: any) => setName(e.target.value!)}
                />
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
                <InputLogin
                  placeholder={"Digite sua senha novamente"}
                  type="password"
                  value={passwordRepeted}
                  onChange={(e: any) => setPasswordRepeted(e.target.value!)}
                />
              </IonCol>
            </IonRow>

            <IonRow id="rowButtonLogin">
              <IonCol>
                <ButtonPrimary
                  color="primarias-rosa"
                  expand="full"
                  onClick={handleCreate}
                >
                  Criar Conta
                </ButtonPrimary>
              </IonCol>
            </IonRow>

            <IonRow
              id="rowCreateAccount"
              onClick={() => history.push("/Login")}
            >
              <IonCol>
                <div id="label">Já tem conta?</div>
                <div>Entre!</div>
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
            message={"Criando sua conta..."}
            spinner="circles"
            mode="ios"
          />
        </div>
      </StyledContent>
    </IonPage>
  );
};

export default CreateAccount;
