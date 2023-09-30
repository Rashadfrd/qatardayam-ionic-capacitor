import React from "react";
import "./Contact.css";
import { IonButton, IonButtons, IonInput, IonItem, IonLabel, IonTextarea } from "@ionic/react";
import Layout from "../../components/layout/Layout";

const Contact: React.FC = () => {
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    console.log('test')
  }
  return (
    <Layout>
        <form className="ion-padding" onSubmit={handleSubmit}>
        <IonItem className="ion-margin-top">
          <IonLabel position="floating">Ad</IonLabel>
          <IonInput type="text" placeholder="John"></IonInput>
        </IonItem>
        <IonItem className="ion-margin-top">
          <IonLabel position="floating">Soyad</IonLabel>
          <IonInput type="text" placeholder="Doe"></IonInput>
        </IonItem>
        <IonItem className="ion-margin-top">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            placeholder="jonhdoe@gmail.com"
          ></IonInput>
        </IonItem>
        <IonItem
          counter
          counterFormatter={(inputLength, maxLength) =>
            `${maxLength - inputLength} characters remaining`
          }
          className="ion-margin-top"
        >
          <IonLabel position="floating">Mesaj</IonLabel>
          <IonTextarea
            placeholder="Hi, glad to see you"
            autoGrow={true}
            maxlength={200}
          ></IonTextarea>
        </IonItem>
          <IonButton type="submit" expand="block" className="ion-margin-top">Göndər</IonButton>
      </form>
    </Layout>
  );
};

export default Contact;
