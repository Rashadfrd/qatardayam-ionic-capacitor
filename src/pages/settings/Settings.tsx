import './Settings.css';
import Layout from '../../components/layout/Layout';
import { IonIcon, IonItem, IonLabel, IonList, IonToggle, useIonRouter } from '@ionic/react';
import { languageOutline, moonOutline, callOutline } from "ionicons/icons";

const Settings: React.FC = () => {
  const router = useIonRouter()
  return (
    <Layout>
      <IonList>
        <IonItem>
          <IonIcon icon={languageOutline} className="ion-margin-end ion-padding-vertical" />
          <IonLabel>Dili dəyiş</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={moonOutline} className="ion-margin-end ion-padding-vertical" />
          <IonLabel>Dark Mode </IonLabel>
          <IonToggle />
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
