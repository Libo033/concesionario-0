"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Button, Drawer, InputAdornment, TextField } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";
import Image from "next/image";
import NavigationDrawer from "./NavigationDrawer";

const NavigationBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

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
        <Menu onClick={() => setToggleDrawer(true)} sx={{ fontSize: "39px" }} />
      </div>
      <div className={styles.NavigationBar_Search2}>
        <TextField
          fullWidth
          autoComplete="off"
          placeholder="Buscar por marca o modelo."
          size="small"
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
      <Drawer
        anchor="top"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <NavigationDrawer />
      </Drawer>
    </nav>
  );
};

export default NavigationBar;
