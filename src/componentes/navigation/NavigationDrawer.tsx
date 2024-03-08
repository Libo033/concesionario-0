import React from "react";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const NavigationDrawer = () => {
  return (
    <div className={styles.NavigationDrawer}>
      <div className={styles.NavigationDrawer_Button}>
        <Button fullWidth variant="contained">
          ingresar
        </Button>
      </div>
      <ul className={styles.NavigationDrawer_Ul}>
        <li>
          <Link href={"/"}>Compra un auto</Link>
        </li>
        <li>
          <Link href={"/"}>Vende tu auto</Link>
        </li>
      </ul>
      <div className={styles.NavigationDrawer_Txt}>
        <Image
          src={"/image/LIBO-no-bg.png"}
          alt="LIBO"
          width={500}
          height={500}
        />
        <p>Tu marketplace de autos favorito.</p>
      </div>
    </div>
  );
};

export default NavigationDrawer;
