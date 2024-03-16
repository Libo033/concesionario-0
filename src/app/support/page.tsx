import React from "react";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";

const Support = () => {
  return (
    <div className={styles.Support}>
      <p className={styles.Support_Title}>Soporte</p>
      <div className={styles.Support_Container}>
        <form className={styles.Support_Form}>
          <TextField fullWidth label="Razon" variant="outlined" />
          <TextField
            fullWidth
            label="Mensaje"
            multiline
            rows={6}
            variant="outlined"
          />
          <Button fullWidth variant="contained">
            enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Support;
