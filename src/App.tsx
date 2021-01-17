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
import SearchPage from "./pages/Search";

interface PrivateRouteParams {
  component: React.FC;
  path: string;
  exact: boolean;
}

const App: React.FC = () => {
  const [tabActive, setTabActive] = useState<string>("Home");

  //control o acesso as rotas privadas por login
  const PrivateRoute: React.FC<PrivateRouteParams> = ({
    component,
    path,
    exact,
  }) => {
    if (isAuthenticated()) {
      console.log("entrou aqui home 2");
      return (
        <Route
          component={isAuthenticated() ? component : Login}
          path={path}
          exact={exact}
        />
      );
    } else {
      console.log("entrou aqui login 2");
      return <Redirect to={"/Login"} />;
    }
  };

  const CheckLogin: React.FC = () => {
    if (isAuthenticated()) {
      console.log("entrou aqui home");
      return <Redirect to={"/Home"} />;
    } else {
      console.log("entrou aqui login");
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

          <IonTabs onIonTabsDidChange={(e) => setTabActive(e.detail.tab)}>
            <IonRouterOutlet>
              <PrivateRoute path="/Home" component={Home} exact={true} />

              <PrivateRoute path="/Library" component={Library} exact={true} />

              <PrivateRoute
                path="/AddLesson"
                component={AddLesson}
                exact={true}
              />

              <PrivateRoute
                path="/Search"
                component={SearchPage}
                exact={true}
              />
            </IonRouterOutlet>

            <IonTabBar color="primaryBlue" slot="bottom">
              <IonTabButton tab="Home" href="/Home" style={{ padding: "5px" }}>
                <img
                  src={`../assets/vectors/home_icon${
                    tabActive == "Home" ? "_active" : ""
                  }.svg`}
                />
              </IonTabButton>
              <IonTabButton
                tab="AddLesson"
                href="/AddLesson"
                style={{ padding: "5px" }}
              >
                <img
                  src={`../assets/vectors/addlesson_icon${
                    tabActive == "AddLesson" ? "_active" : ""
                  }.svg`}
                />
              </IonTabButton>

              <IonTabButton
                style={{ padding: "5px" }}
                tab="Library"
                href="/Library"
              >
                <img
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
