import React, { useEffect, useState } from "react";
import './Settings.css'
import { IonIcon, IonItem, IonLabel, IonList, IonToggle, useIonRouter } from "@ionic/react";
import Layout from "../../components/layout/Layout";
import { languageOutline, moonOutline, callOutline } from "ionicons/icons";

const Settings: React.FC = () => {
  const router = useIonRouter()
  const[theme, setTheme] = useState<boolean>(false)
  const handleTheme = () => {
    const newTheme:boolean = !theme
    setTheme(newTheme)
    document.body.classList.toggle('dark',newTheme)
    localStorage.setItem('darkmode',JSON.stringify(newTheme))
  }
  
  useEffect(() => {
    const theme = localStorage.getItem("darkmode");

    if (theme) {
      setTheme(JSON.parse(theme))
    }
  }, []);
  return (
    <Layout>
      <IonList>
        <IonItem>
          <IonIcon icon={languageOutline} className="ion-margin-end ion-padding-vertical" />
          <IonLabel>Dili dəyiş</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={moonOutline} className="ion-margin-end ion-padding-vertical" />
          <IonLabel>Dark Mode {theme ? 'on' : 'off'}</IonLabel>
          <IonToggle checked={theme} onIonChange={handleTheme} />
        </IonItem>
        <IonItem>
          <IonIcon icon={callOutline} className="ion-margin-end ion-padding-vertical" />
          <IonLabel onClick={()=>router.push('/contact')}>Əlaqə</IonLabel>
        </IonItem>
      </IonList>
    </Layout>
  );
};

export default Settings;