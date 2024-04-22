import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { Button, Divider } from "@mui/material";

const NavigationDropdown = () => {
  return (
    <div className={styles.NavigationDropdown}>
      <Link href={"/dashboard"}>Mi Perfil</Link>
      <Divider />
      <Button color="error" variant="contained">
        cerrar sesion
      </Button>
    </div>
  );
};

export default NavigationDropdown;
