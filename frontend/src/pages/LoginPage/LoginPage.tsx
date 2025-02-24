import React, { useState } from "react";
import styles from './LoginPage.module.scss';
import LoginForm from "../../components/Auth/components/LoginForm/LoginForm";
import { PAGE_NAME } from "./utils/consts";
import RegisterForm from "../../components/Auth/components/RegisterForm/RegisterForm";
import clsx from "clsx";

const LoginPage = () => {
  const [isLoginActive, setIsLoginActive] = useState<boolean>(true);

  const setActivePage = (pageName: PAGE_NAME) => {
    if (pageName === PAGE_NAME.LOGIN) {
      setIsLoginActive(true);

      return;
    }
    setIsLoginActive(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={clsx("panel", styles.panelsContainer)}>
        <div className="gradient-logo" data-text="Kanbique">Kanbique</div>
        <LoginForm isActive={isLoginActive} />
        <RegisterForm isActive={!isLoginActive} />
        <div className={styles.formSwitch}>
          <button
            className={clsx({ [styles.activeButton]: isLoginActive })}
            onClick={() => setActivePage(PAGE_NAME.LOGIN)}
          >
            {PAGE_NAME.LOGIN}
          </button>
          <button
            className={clsx({ [styles.activeButton]: !isLoginActive })}
            onClick={() => setActivePage(PAGE_NAME.REGISTER)}
          >
            {PAGE_NAME.REGISTER}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
