import React from "react";
import "./Register.css";
import AuthLayout from "../layout/Layout";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "../../../schemas";

type TRegisterInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TRegisterSchema>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <AuthLayout registered={false}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <input
            autoComplete="off"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        {errors.email && <p>{errors.email.message}</p>}
        <div className="form-item">
          <input
            type="password"
            placeholder="Şifrə"
            {...register("password")}
          />
          {errors.email && <p>{errors.password?.message}</p>}
        </div>
        <div className="form-item">
          <input
            type="password"
            placeholder="Şifrə təsdiq"
            {...register("confirmPassword")}
          />
          {errors.email && <p>{errors.confirmPassword?.message}</p>}
        </div>
        <button type="submit" className="submit-btn">
          Qeydiyyatdan Keç
        </button>
      </form>
      <p>
        Hesabınız var? <Link to={"/login"}>Giriş</Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
