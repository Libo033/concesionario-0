"use client";
import OrderCars from "@/componentes/others/OrderCars";
import styles from "./page.module.css";
import CarCard from "@/componentes/cards/CarCard";
import { useContext, useState } from "react";
import { CarContext } from "@/context/CarContext";
import { Skeleton } from "@mui/material";

export default function Home() {
  const { loadCars, cars, filterBy } = useContext(CarContext);
  const [value, setValue] = useState<string>("default");
  const [toolTip, setToolTip] = useState<boolean>(false);

  const handleSetValue = (value: string) => {
    setValue(value);
    filterBy(value);
    setToolTip(false);
  };

  return (
    <div onScroll={() => setToolTip(false)} className={styles.Home}>
      <OrderCars
        value={value}
        handleSetValue={handleSetValue}
        setToolTip={setToolTip}
        open={toolTip}
      />
      <section className={styles.Home_Cars}>
        {loadCars ? (
          cars.length > 0 &&
          cars.map((car) => <CarCard key={car._id} {...car} />)
        ) : (
          <>
            <Skeleton
              sx={{ width: "100%", height: "390px" }}
              variant="rounded"
            />
            <Skeleton
              sx={{ width: "100%", height: "390px" }}
              variant="rounded"
            />
            <Skeleton
              sx={{ width: "100%", height: "390px" }}
              variant="rounded"
            />
            <Skeleton
              sx={{ width: "100%", height: "390px" }}
              variant="rounded"
            />
          </>
        )}
      </section>
    </div>
  );
}
