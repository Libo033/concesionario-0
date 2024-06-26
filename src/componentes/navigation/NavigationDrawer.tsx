"use client";
import React from "react";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavigationDrawer = () => {
  const r = useRouter();

  return (
    <div className={styles.NavigationDrawer}>
      <div className={styles.NavigationDrawer_Button}>
        {true ? (
          <>
            <Button
              fullWidth
              onClick={() => r.push("/dashboard")}
              variant="outlined"
            >
              mi perfil
            </Button>
            <Button
            sx={{marginTop: "12px"}}
              fullWidth
              onClick={() => r.push("/dashboard")}
              variant="outlined"
              color="error"
            >
              cerrar sesion
            </Button>
          </>
        ) : (
          <Button
            fullWidth
            onClick={() => r.push("/account/login")}
            variant="contained"
          >
            ingresar
          </Button>
        )}
      </div>
      <ul className={styles.NavigationDrawer_Ul}>
        <li>
          <Link href={"/"}>Compra un auto</Link>
        </li>
        <li>
          <Link href={"/vender"}>Vende tu auto</Link>
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
