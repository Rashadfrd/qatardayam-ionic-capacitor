import React, { useState } from "react";
import "./Login.css";
import { IonContent, IonPage } from "@ionic/react";
import AuthLayout from "../layout/Layout";

const Login: React.FC = () => {
  const [learnMore, setLearnMore] = useState<boolean>(false);
  return (
    <AuthLayout registered = {true}>
      <form className="form">
        <div className="form-item">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-item">
          <input type="password" placeholder="Şifrə" />
        </div>
        <button type="submit" className="submit-btn">
          Daxil Ol
        </button>
      </form>
      <p>
        Hesabınız yoxdur? <span>Qeydiyyat</span>
      </p>

      {learnMore && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat
          blanditiis est, iusto consequuntur laudantium.
        </p>
      )}
      <span onClick={() => setLearnMore(!learnMore)}>
        {learnMore ? "show less" : "learn more"}
      </span>
    </AuthLayout>
  );
};

export default Login;
