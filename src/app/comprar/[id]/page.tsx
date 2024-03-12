"use client";
import React from "react";
import styles from "../page.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperComprar from "@/componentes/others/SwiperComprar";
import { Button } from "@mui/material";

const car = {
  _id: "4",
  brand: "Honda",
  model: "S2000",
  year: "2007",
  second: "Perfecto estado. Detalles minimos. Transimision manual.",
  image: [
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924045/06-concesionario/odzpz9qecs0ui6xxe83f.jpg",
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180918/06-concesionario/ijyreqzvnkt7380urshi.jpg",
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180922/06-concesionario/xm6fc926dvmfm0is83cq.jpg",
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180925/06-concesionario/xruzscfhhi3otpv6h7n1.jpg",
  ],
  km: 24000,
  province: "Buenos Aires",
  localidad: "Nuñes",
};

const ComprarID = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.ComprarID}>
      <div className={styles.ComprarID_Top}>
        <SwiperComprar images={car.image} alt={car.brand} />
        <div className={styles.SideDataCard}>
          <p className={styles.SideDataCard_Title}>
            {car.brand} {car.model}
          </p>
          <p className={styles.SideDataCard_Info}>
            {Intl.NumberFormat().format(car.km)}km • {car.province}
          </p>
          <p className={styles.SideDataCard_Top}>Precio contado</p>
          <p className={styles.SideDataCard_Precio}>
            U$D {Intl.NumberFormat().format(24000)}
          </p>
          <p className={styles.SideDataCard_Top}>Año</p>
          <p className={styles.SideDataCard_Bottom}>{car.year}</p>
          <p className={styles.SideDataCard_Top}>Motor</p>
          <p className={styles.SideDataCard_Bottom}>2.2L</p>
          <p className={styles.SideDataCard_Top}>Transmision</p>
          <p className={styles.SideDataCard_Bottom}>Manual</p>
          <Button sx={{ marginBlock: "18px" }} variant="contained">
            contactar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComprarID;

// <Image src={car.image[0]} alt={car.main} width={800} height={800} />
