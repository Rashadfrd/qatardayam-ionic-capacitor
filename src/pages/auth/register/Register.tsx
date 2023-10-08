import React from "react";
import "./Register.css";
import { IonContent, IonPage } from "@ionic/react";
import AuthLayout from "../layout/Layout";

const Register: React.FC = () => {
  return (
    <AuthLayout registered = {false}>
      <form className="form">
        <div className="form-item">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-item">
          <input type="password" placeholder="Şifrə" />
        </div>
        <div className="form-item">
          <input type="password" placeholder="Şifrə təsdiq" />
        </div>
        <button type="submit" className="submit-btn">
          Qeydiyyatdan Keç
        </button>
      </form>
      <p>
        Hesabınız var? <span>Giriş</span>
      </p>
    </AuthLayout>
  );
};

export default Register;
