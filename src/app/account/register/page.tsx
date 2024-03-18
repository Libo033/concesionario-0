import React from "react";
import styles from "../page.module.css";
import RegisterForm from "@/componentes/account/RegisterForm";
import Image from "next/image";

const Register = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.Main_ImgContainer}>
        <Image src={"/image/login.svg"} alt="login" width={90} height={90} />
      </div>
      <p className={styles.Main_Title}>Registrarse</p>
      <RegisterForm />
    </div>
  );
};

export default Register;
