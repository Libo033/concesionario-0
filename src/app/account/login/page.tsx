import React from "react";
import styles from "../page.module.css";
import LoginForm from "@/componentes/account/LoginForm";

const Login = () => {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
};

export default Login;
