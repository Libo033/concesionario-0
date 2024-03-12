import React from "react";
import styles from "./page.module.css";
import { Button } from "@mui/material";

interface ISideDataCard {
  km: number;
  province: string;
  year: number;
  brand: string;
  model: string;
  price: number;
  exchange: string;
  motor: string;
  transmision: string;
}

const SideDataCard: React.FC<ISideDataCard> = (car) => {
  return (
    <div className={styles.SideDataCard}>
      <p className={styles.SideDataCard_Title}>
        {car.brand} {car.model}
      </p>
      <p className={styles.SideDataCard_Info}>
        {Intl.NumberFormat().format(car.km)}km • {car.province}
      </p>
      <p className={styles.SideDataCard_Contado}>Precio contado</p>
      <p className={styles.SideDataCard_Precio}>
        {car.exchange} {Intl.NumberFormat().format(car.price)}
      </p>
      <p className={styles.SideDataCard_Top}>Año</p>
      <p className={styles.SideDataCard_Bottom}>{car.year}</p>
      <p className={styles.SideDataCard_Top}>Motor</p>
      <p className={styles.SideDataCard_Bottom}>{car.motor}</p>
      <p className={styles.SideDataCard_Top}>Transmision</p>
      <p className={styles.SideDataCard_Bottom}>{car.transmision}</p>
      <Button sx={{ marginBlock: "18px" }} variant="contained">
        contactar
      </Button>
    </div>
  );
};

export default SideDataCard;
