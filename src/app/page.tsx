"use client";
import OrderCars from "@/componentes/others/OrderCars";
import styles from "./page.module.css";
import CarCard from "@/componentes/cards/CarCard";
import { useContext, useState } from "react";
import { CarContext } from "@/context/CarContext";
import { Skeleton } from "@mui/material";

export default function Home() {
  const { loadCars, cars: allCars } = useContext(CarContext);
  const [cars, setCars] = useState(allCars);
  const [value, setValue] = useState<string>("default");
  const [toolTip, setToolTip] = useState<boolean>(false);

  const handleSetValue = (value: string) => {
    setValue(value);
    switch (value) {
      case "Menor precio":
        setCars(allCars.sort((a, b) => a.precio - b.precio));
        break;
      case "Mayor precio":
        setCars(allCars.sort((a, b) => b.precio - a.precio));
        break;
      case "Mas antiguos":
        setCars(allCars.sort((a, b) => a.ano - b.ano));
        break;
      case "Mas recientes":
        setCars(allCars.sort((a, b) => b.ano - a.ano));
        break;
      case "Menos km":
        setCars(allCars.sort((a, b) => a.km - b.km));
        break;
      case "Mas km":
        setCars(allCars.sort((a, b) => b.km - a.km));
        break;
      case "default":
        setCars(allCars.sort((a, b) => parseInt(a._id) - parseInt(b._id)));
        break;
      default:
        break;
    }
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
