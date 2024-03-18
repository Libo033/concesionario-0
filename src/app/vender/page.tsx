import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Vender = () => {
  return (
    <div className={styles.Vender}>
      <div className={styles.Vender_Info}>
        <p className={styles.Vender_Title}>
          ¿Queres vender tu auto?{" "}
          <Link href={"/account/login"}>Inicia Sesion</Link> y completa toda la
          informacion necesaria para venderlo pronto!
        </p>
      </div>
    </div>
  );
};

export default Vender;
