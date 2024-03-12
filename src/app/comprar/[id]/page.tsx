"use client";
import React from "react";
import styles from "../page.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperComprar from "@/componentes/others/SwiperComprar";
import SideDataCard from "@/componentes/cards/SideDataCard";

const car = {
  _id: "4",
  brand: "Honda",
  model: "S2000",
  year: 2007,
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
  price: 25000,
  exchange: "U$D",
  motor: "2.2L",
  transmision: "Manual",
};

const ComprarID = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.ComprarID}>
      <div className={styles.ComprarID_Top}>
        <SwiperComprar images={car.image} alt={car.brand} />
        <SideDataCard
          km={car.km}
          province={car.province}
          year={car.year}
          brand={car.brand}
          model={car.model}
          price={car.price}
          exchange={car.exchange}
          motor={car.motor}
          transmision={car.transmision}
        />
      </div>
    </div>
  );
};

export default ComprarID;

// <Image src={car.image[0]} alt={car.main} width={800} height={800} />
