import React, { useState, ReactNode } from "react";
import {
IonBackButton, IonButtons,IonContent,IonHeader,IonIcon,IonLabel,IonModal,IonPage,IonRow,IonToolbar,useIonRouter,
} from "@ionic/react";
import logo from "../../assets/images/qatardayamyeniyeni.png";
import "./Layout.css";
import { useLocation } from "react-router";
import { chevronBackOutline, notificationsOutline } from "ionicons/icons";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const router = useIonRouter();
  const location = useLocation();
  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color={"primary"}>
            {location.pathname !== "/home" && (
              <IonButtons slot="start" className="backBtn">
                <IonBackButton icon={chevronBackOutline}></IonBackButton>
              </IonButtons>
            )}
            <IonRow class="ion-align-items-center ion-justify-content-between ion-padding">
              <div className="header-inner-left">
                <h2
                  onClick={() => {
                    router.push("/home");
                  }}
                  className="ion-text-uppercase"
                >
                  Qatardayam
                </h2>
                <img className="logoImg" src={logo} alt="" />
              </div>
              <IonIcon
                icon={notificationsOutline} // Use the notification icon
                size="large"
                style={{ cursor: "pointer" }}
                className="ion-margin-start"
                onClick={openModal}
              />
            </IonRow>
            <IonModal
              isOpen={showModal}
              onDidDismiss={closeModal}
              trigger="open-modal"
              initialBreakpoint={0.25}
              breakpoints={[0, 0.25, 0.5, 0.75]}
              handleBehavior="cycle"
            >
              <IonContent className="ion-padding">
                <div className="ion-margin-top">
                  <IonLabel>
                    Click the handle above to advance to the next breakpoint.
                  </IonLabel>
                </div>
              </IonContent>
            </IonModal>
          </IonToolbar>
        </IonHeader>
        <IonContent>{children}</IonContent>
      </IonPage>
    </>
  );
};

export default Layout;
