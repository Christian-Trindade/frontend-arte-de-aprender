import * as React from "react";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { isAuthenticated } from "./services/auth";

import Home from "./pages/Home";
import Library from "./pages/Library";
import AddLesson from "./pages/AddLesson";
import ReadResume from "./pages/AddLesson/ReadResume";
import ChoiceBeat from "./pages/AddLesson/ChoiceBeat";

import SearchPage from "./pages/Search";

import CreateAccount from "./pages/Login/CreateAccount";
import Login from "./pages/Login";

// globals css
import "./app.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

interface PrivateRouteParams {
  component: React.FC;
  path: string;
  exact: boolean;
}

let tabActive = "Home";

const App: React.FC = () => {
  // const [tabActive, setTabActive] = useState<string>("Home");

  //control o acesso as rotas privadas por login
  const PrivateRoute: React.FC<PrivateRouteParams> = ({
    component,
    path,
    exact,
  }) => {
    if (isAuthenticated()) {
      return (
        <Route
          component={isAuthenticated() ? component : Login}
          path={path}
          exact={exact}
        />
      );
    } else {
      return <Redirect to={"/Login"} />;
    }
  };

  const CheckLogin: React.FC = () => {
    if (isAuthenticated()) {
      return <Redirect to={"/Home"} />;
    } else {
      return <Redirect to={"/Login"} />;
    }
  };

  return (
    <IonApp style={{ backgroundColor: "#eee" }}>
      <IonReactRouter>
        <Switch>
          <Route
            path="/Login"
            component={Login}
            render={() => <CheckLogin />}
            exact={true}
          />

          <Route
            path="/CreateAccount"
            component={CreateAccount}
            render={() => <CheckLogin />}
            exact={true}
          />

          <Route path="/" render={() => <CheckLogin />} exact={true} />

          <IonTabs
            onIonTabsDidChange={(e) => {
              const tabs = ["home", "addlesson", "library"];

              tabs.forEach((tabItem: string) => {
                let tab = document.getElementById(tabItem);

                if (tab) {
                  if (tabItem == e.detail.tab) {
                    tab.setAttribute(
                      "src",
                      `../assets/vectors/${e.detail.tab}_icon_active.svg`
                    );
                  } else {
                    tab.setAttribute(
                      "src",
                      `../assets/vectors/${tabItem}_icon.svg`
                    );
                  }
                }
              });
            }}
          >
            <IonRouterOutlet>
              <PrivateRoute path="/Home" component={Home} exact={true} />

              <PrivateRoute path="/Library" component={Library} exact={true} />

              <PrivateRoute
                path="/AddLesson"
                component={AddLesson}
                exact={true}
              />

              <PrivateRoute
                path="/ReadResume/:id"
                component={ReadResume}
                exact={true}
              />

              <PrivateRoute
                path="/ChoiceBeat/:id"
                component={ChoiceBeat}
                exact={true}
              />

              <PrivateRoute
                path="/SearchPage"
                component={SearchPage}
                exact={true}
              />
            </IonRouterOutlet>

            <IonTabBar color="primaryBlue" slot="bottom">
              <IonTabButton tab="home" href="/Home" style={{ padding: "5px" }}>
                <img
                  id="home"
                  src={`../assets/vectors/home_icon${
                    tabActive == "Home" ? "_active" : ""
                  }.svg`}
                />
              </IonTabButton>
              <IonTabButton
                tab="addlesson"
                href="/AddLesson"
                style={{ padding: "5px" }}
              >
                <img
                  id="addlesson"
                  src={`../assets/vectors/addlesson_icon${
                    tabActive == "AddLesson" ? "_active" : ""
                  }.svg`}
                />
              </IonTabButton>

              <IonTabButton
                style={{ padding: "5px" }}
                tab="library"
                href="/Library"
              >
                <img
                  id="library"
                  src={`../assets/vectors/library_icon${
                    tabActive == "Library" ? "_active" : ""
                  }.svg`}
                />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
