import React, { ReactNode } from "react";
import "./Layout.css";
import logo from "../../../assets/images/qatardayamyeniyeni.png";
import { IonContent, IonPage } from "@ionic/react";

interface ILayoutProps {
  children: ReactNode;
  registered: boolean;
}

const AuthLayout: React.FC<ILayoutProps> = ({ children, registered }) => {
  return (
    <IonPage>
      <IonContent>
        <div className="layout">
          <div className="layout-top">
            <img src={logo} alt="" />
          </div>

          <div className="layout-bottom">
            <div className="card">
              <h2 className="title">{registered ? "Giriş" : "Qeydiyyat"}</h2>
              {children}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AuthLayout;
