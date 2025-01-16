import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
