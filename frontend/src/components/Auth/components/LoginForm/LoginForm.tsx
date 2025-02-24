import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import styles from '../../LoginPage.module.scss';
import clsx from 'clsx';
import { loginSchema } from "../utils/helpers";

interface ILoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = ({ isActive }: { isActive: boolean }) => {
  const { register, formState: { errors: formError } } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  return (
      <div className={clsx(styles.panel, styles.loginPanel, isActive && styles.active)}>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <div className={styles.formInputs}>
            <div className={styles.flexField}>
              <input {...register("email")} placeholder="Enter email..." type="email" />
              {formError.email?.message && <p className={styles.error}>{formError.email?.message}</p>}
            </div>
            <div className={styles.flexField}>
              <input {...register("password")} placeholder="Enter password..." type="password" />
              {formError.password?.message && <p className={styles.error}>{formError.password?.message}</p>}
            </div>
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
      </div>
  );
};

export default LoginForm;
