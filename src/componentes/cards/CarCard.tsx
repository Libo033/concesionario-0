import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const CarCard = () => {
  return (
    <article className={styles.CarCard}>
      <div className={styles.CarCard_Image}>
        <Image
          src={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924143/06-concesionario/p7zkdo1tgnvd07guefpa.jpg"
          }
          alt="auto"
          width={800}
          height={800}
        />
      </div>
      <div className={styles.CarCard_Info}>
        <p className={styles.CarCard_InfoMain}>Nissan Silvia 2000</p>
        <p className={styles.CarCard_InfoSecond}>
          Motor sin modificaciones. Muy buen estado en general.
        </p>
        <p className={styles.CarCard_InfoKm}>67000km</p>
        <p className={styles.CarCard_InfoUbi}>Capital Federal, Buenos Aires</p>
      </div>
    </article>
  );
};

export default CarCard;
