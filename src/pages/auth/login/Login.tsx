import React, { useState } from "react";
import "./Login.css";
import AuthLayout from "../layout/Layout";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import { TLoginSchema, loginSchema } from "../../../schemas";
import { Link } from "react-router-dom";


export type TLoginInputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, },
  } = useForm<TLoginSchema>({resolver:zodResolver(loginSchema)})

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    reset()
  }

  const [learnMore, setLearnMore] = useState<boolean>(false);
  return (
    <AuthLayout registered={true}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <input autoComplete="off" type="email" placeholder="Email" {...register('email')} />
        </div>
          {errors.email && <p>{errors.email.message}</p>}
        <div className="form-item">
          <input type="password" placeholder="Şifrə" {...register('password')} />
        </div>
          {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" className="submit-btn">
          Daxil Ol
        </button>
      </form>
      <p>
        Hesabınız yoxdur? <Link to={'/register'}>Qeydiyyat</Link>
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
