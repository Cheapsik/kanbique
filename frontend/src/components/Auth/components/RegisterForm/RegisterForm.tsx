import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from '../../LoginPage.module.scss';
import clsx from 'clsx';
import React from "react";
import { registerSchema } from "../utils/helpers";

interface IRegisterFormInputs {
  email: string;
  password: string;
  username: string;
}

const RegisterForm = ({ isActive }: { isActive: boolean }) => {
  const { register, formState: { errors: formError } } = useForm<IRegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });


  return (
    <div className={clsx(styles.panel, styles.registerPanel, isActive && styles.active)}>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <div className={styles.formInputs}>
            <div className={styles.flexField}>
              <input {...register("username")} placeholder="Enter username..." />
              {formError.username?.message && <p className={styles.error}>{formError.username?.message}</p>}
            </div>
            <div className={styles.flexField}>
              <input {...register("email")} placeholder="Enter email..." type="email" />
              {formError.email?.message && <p className={styles.error}>{formError.email?.message}</p>}
            </div>
            <div className={styles.flexField}>
              <input {...register("password")} placeholder="Enter password..." type="password" />
              {formError.password?.message && <p className={styles.error}>{formError.password?.message}</p>}
            </div>
          </div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;