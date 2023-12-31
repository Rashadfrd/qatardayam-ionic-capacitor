import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/home/Home";
import { homeOutline, settingsOutline } from "ionicons/icons";
import './App.css'

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
import Settings from "./pages/settings/Settings";
import Contact from "./pages/contact/Contact";
import SingleRoute from "./pages/singleroute/SingleRoute";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

setupIonicReact();

const App: React.FC = () => {
  const handleTheme = () => {
    const theme = localStorage.getItem("darkmode");

    if (theme) {
      document.body.classList.toggle("dark", JSON.parse(theme));
    }
  };

  useEffect(() => {
    handleTheme();
  }, []);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet animated>
            <Route exact path="/home" component={Home} />
            <Route exact path="/route/:id" component={SingleRoute} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="radio" href="/settings">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
