import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button, Divider, TextField } from "@mui/material";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className={styles.LoginForm}>
      <div className={styles.LoginForm_Logo}>
        <Image
          src={"/image/LIBO-no-bg.png"}
          alt="libo automotores"
          width={450}
          height={450}
        />
        <h1>Libo Automotores</h1>
      </div>
      <div className={styles.LoginForm_Init}>
        <p>Iniciar Sesion</p>
      </div>
      <div className={styles.LoginForm_Container}>
        <TextField fullWidth label="Email" type="email" variant="outlined" />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          variant="outlined"
        />
      </div>
      <Button sx={{ marginTop: "12px" }} fullWidth variant="contained">
        ingresar
      </Button>
      <div className={styles.LoginForm_LinksContainer}>
        <Link className={styles.link_a} href={"/account/recover_password"}>
          Olvidaste tu contraseña?
        </Link>
        <Link className={styles.link_a} href={"/account/register"}>
          Registrarse!
        </Link>
      </div>
      <Divider sx={{ paddingBlock: "10px" }} />
      <div className={styles.LoginButtonGroup}>
        <button>
          <Image
            className={styles.LoginButtonGroup_Logo}
            src={"/image/google.svg"}
            alt="google"
            width={45}
            height={45}
          />
          GOOGLE
        </button>
        <button>
          <Image
            className={styles.LoginButtonGroup_Logo}
            src={"/image/facebook.svg"}
            alt="facebook"
            width={45}
            height={45}
          />
          FACEBOOK
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
