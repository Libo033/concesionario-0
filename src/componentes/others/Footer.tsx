import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_Logo}>
        <Image
          src={"/image/LIBO-no-bg.png"}
          alt="libo"
          width={450}
          height={450}
        />
      </div>
      <div className={styles.Footer_Mid}>
        <p>Como funciona</p>
        <Link href={"/"}>Comprar un auto</Link>
        <Link href={"/"}>Vender un auto</Link>
        <Link href={"/"}>Preguntas frecuentes</Link>
      </div>
      <div className={styles.Footer_Mid}>
        <p>Informacion</p>
        <Link href={"/"}>Libro de quejas</Link>
        <Link href={"/"}>Soporte</Link>
        <a>Defensa al consumidor</a>
      </div>
      <div className={styles.Footer_Mid}>
        <Link href={"/"}>Nuestras redes</Link>
        <Link href={"/"}>Terminos de uso</Link>
        <Link href={"/"}>Politica de privacidad</Link>
        <a
          href="https://autogestion.produccion.gob.ar/consumidores"
          rel="noreferrer nofollow"
          target="_blank"
        >
          Defensa al consumidor
        </a>
      </div>
    </footer>
  );
};

export default Footer;
