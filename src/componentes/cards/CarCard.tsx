import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { ICarCard } from "@/libs/interfaces";

const CarCard: React.FC<ICarCard> = (props) => {
  return (
    <article className={styles.CarCard}>
      <div className={styles.CarCard_Image}>
        <Image src={props.image} alt={props.main} width={800} height={800} />
      </div>
      <div className={styles.CarCard_Info}>
        <p className={styles.CarCard_InfoMain}>{props.main.slice(0, 27)}</p>
        <p className={styles.CarCard_InfoSecond}>{props.second.slice(0, 60)}</p>
        <p className={styles.CarCard_InfoKm}>{props.km}km</p>
        <p className={styles.CarCard_InfoUbi}>{props.ubi}</p>
      </div>
    </article>
  );
};

export default CarCard;
