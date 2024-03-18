import React from "react";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className={styles.RegisterForm}>
      <div className={styles.RegisterForm_Double}>
        <TextField fullWidth variant="outlined" label="NOMBRE" required />
        <TextField fullWidth variant="outlined" label="APELLIDO" required />
      </div>
      <div className={styles.RegisterForm_Simple}>
        <TextField fullWidth variant="outlined" label="EMAIL" required />
      </div>
      <div className={styles.RegisterForm_Simple}>
        <TextField
          fullWidth
          variant="outlined"
          label="VERFICAR EMAIL"
          required
        />
      </div>
      <div className={styles.RegisterForm_Double}>
        <TextField
          fullWidth
          variant="outlined"
          label="CODIGO DE AREA"
          placeholder="11"
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          label="CELULAR"
          placeholder="99999999"
          required
        />
      </div>
      <Button fullWidth sx={{ marginTop: "15px" }} variant="contained">
        Registrarse
      </Button>
    </form>
  );
};

export default RegisterForm;
