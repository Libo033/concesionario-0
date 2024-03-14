"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ICar } from "@/libs/interfaces";

const CarCard: React.FC<ICar> = (props) => {
  const r = useRouter();

  return (
    <article
      onClick={() => r.push(`/comprar/${props._id}`)}
      className={styles.CarCard}
    >
      <div className={styles.CarCard_Image}>
        <Image
          src={props.imagenes[0]}
          alt={props.marca}
          width={800}
          height={800}
        />
        <p className={styles.CarCard_Price}>
          {props.moneda} {Intl.NumberFormat().format(props.precio)}
        </p>
      </div>
      <div className={styles.CarCard_Info}>
        <p className={styles.CarCard_InfoMain}>
          {props.marca} {props.modelo} {props.ano}
        </p>
        <p className={styles.CarCard_InfoSecond}>
          {props.breve_info.slice(0, 60)}
        </p>
        <p className={styles.CarCard_InfoKm}>{props.km}km</p>
        <p className={styles.CarCard_InfoUbi}>
          {props.localidad}, {props.provincia}
        </p>
      </div>
    </article>
  );
};

export default CarCard;
