import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import AuthService from "./AuthService";
import React from "react";
import { schema } from "./utils/helpers";
import styles from './LoginForm.module.scss'
import clsx from 'clsx';

interface ILoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors: formError} } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ILoginFormInputs) => {
    try {
      await AuthService.login(data.email, data.password);
      setLoginError(null);
    } catch (error) {
      setLoginError("Invalid email or password");
      console.error(error)
    }
  };

  return (
    <div className={clsx('panel', styles.wrapper)}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.flexField}>
            <input {...register("email")}  placeholder="Enter email..." type="email" />
            <p className={styles.error}>{formError.email?.message}</p>
        </div>
        <div className={styles.flexField}>
            <input {...register("password")} placeholder="Enter password..." type="password" />
            <p className={styles.error}>{formError.password?.message}</p>
        </div>
        {loginError && <p className={styles.error}>{loginError}</p>}
        <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default LoginForm;
