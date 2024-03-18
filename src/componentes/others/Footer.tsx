"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  return (
    <>
      {!path.includes("account") && (
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
            <Link href={"/vender"}>Vender un auto</Link>
            <Link href={"/"}>Preguntas frecuentes</Link>
          </div>
          <div className={styles.Footer_Mid}>
            <p>Informacion</p>
            <Link href={"/quejas"}>Libro de quejas</Link>
            <Link href={"/support"}>Soporte</Link>
            <a>Defensa al consumidor</a>
          </div>
          <div className={styles.Footer_Mid}>
            <div className={styles.Footer_Social}>
              <a
                rel="noreferrer nofollow"
                target="_blank"
                href="https://facebook.com/"
              >
                <Image
                  src={"/image/facebook.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                rel="noreferrer nofollow"
                target="_blank"
                href="https://instagram.com/"
              >
                <Image
                  src={"/image/ig.svg"}
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <Link href={"/terms-of-use"}>Terminos de uso</Link>
            <Link href={"/privacy-policy"}>Politica de privacidad</Link>
            <a
              href="https://autogestion.produccion.gob.ar/consumidores"
              rel="noreferrer nofollow"
              target="_blank"
            >
              Defensa al consumidor
            </a>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
