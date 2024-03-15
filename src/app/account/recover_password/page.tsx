"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

const RecoverPassword = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  return (
    <div className={styles.Recover}>
      <div className={styles.Recover_ImgContainer}>
        <Image
          className={styles.Recover_Img}
          src={"/image/login.svg"}
          alt="login"
          width={90}
          height={90}
        />
      </div>
      <h1 className={styles.Recover_Title}>Olvidaste tu constraseña?</h1>
      <span className={styles.Recover_SubTitle}>
        No te preocupes, te mandaremos las instrucciones para que cambies tu
        costraseña.
      </span>
      {emailSent ? (
        <div className={styles.Recover_Sent}>
          <Image src={"/image/check.png"} alt="check" width={78} height={78} />
          <p>Email enviado exitosamente!</p>
        </div>
      ) : (
        <form className={styles.Recover_Form}>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth={true}
              type="email"
              required
            />
          </div>
          <Button type="submit" variant="contained">
            ENVIAR
          </Button>
        </form>
      )}
      <div className={styles.Recover_SignInContainer}>
        <Link href={"/account/login"}>Volver a inicio de sesion</Link>
      </div>
    </div>
  );
};

export default RecoverPassword;
