"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "../page.module.css";
import SwiperComprar from "@/componentes/others/SwiperComprar";
import SideDataCard from "@/componentes/cards/SideDataCard";
import BottomDataCard from "@/componentes/cards/BottomDataCard";
import BasicInfo from "@/componentes/others/BasicInfo";
import { CarContext } from "@/context/CarContext";
import { ICar } from "@/libs/interfaces";
import MoreCars from "@/componentes/cards/MoreCars";
import { Divider } from "@mui/material";

const ComprarID = ({ params }: { params: { id: string } }) => {
  const { cars, loadCars } = useContext(CarContext);
  const [car, setCar] = useState<ICar>();

  useEffect(() => {
    if (loadCars) {
      setCar(cars.find((c) => c._id === params.id));
    }
  }, [loadCars]);

  return (
    <div className={styles.ComprarID}>
      {car && (
        <>
          <div className={styles.ComprarID_Top}>
            <SwiperComprar images={car.imagenes} alt={car.marca} />
            <SideDataCard
              km={car.km}
              province={car.provincia}
              year={car.ano}
              brand={car.marca}
              model={car.modelo}
              price={car.precio}
              exchange={car.moneda}
              motor={car.informacion.motor}
              transmision={car.informacion.transmision}
            />
            <BottomDataCard
              brand={car.marca}
              model={car.modelo}
              exchange={car.moneda}
              price={car.precio}
            />
          </div>
          <div className={styles.ComprarID_Bottom}>
            <BasicInfo info={car.informacion} />
          </div>
        </>
      )}
      <Divider sx={{marginBlock: "30px", marginInline:"24px"}} />
      <MoreCars />
    </div>
  );
};

export default ComprarID;
