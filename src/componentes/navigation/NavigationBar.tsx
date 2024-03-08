import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <nav className={styles.NavigationBar}>
      <div className={styles.NavigationBar_Logo}>
        <Image
          src={"/image/LIBO-no-bg.png"}
          alt="LIBO"
          width={500}
          height={500}
        />
      </div>
      <ul className={styles.NavigationBar_Ul}>
        <li>
          <Link href={"/"}>Publicaciones</Link>
        </li>
        <li>
          <Link href={"/"}>Vende tu auto</Link>
        </li>
      </ul>
      <div className={styles.NavigationBar_Search}>
        <TextField
          fullWidth
          autoComplete="off"
          placeholder="Buscar por marca o modelo."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{ backgroundColor: "#fff" }}
        />
      </div>
      <div className={styles.NavigationBar_Login}>
        <Button variant="contained">ingresar</Button>
      </div>
      <div className={styles.NavigationBar_Menu}>
        <Menu sx={{ fontSize: "39px" }} />
      </div>
    </nav>
  );
};

export default NavigationBar;
