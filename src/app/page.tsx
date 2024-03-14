"use client";
import OrderCars from "@/componentes/others/OrderCars";
import styles from "./page.module.css";
import CarCard from "@/componentes/cards/CarCard";
import { useState } from "react";

const carsToSell = [
  {
    _id: "1",
    main: "Nissan Silvia 2001",
    year: 2001,
    second: "Motor sin modificaciones. Muy buen estado en general.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924143/06-concesionario/p7zkdo1tgnvd07guefpa.jpg",
    km: 67000,
    ubi: "Capital Federal, Buenos Aires",
    price: 16000,
    exchange: "U$D",
  },
  {
    _id: "2",
    main: "Nissan 180SX 1998",
    year: 1998,
    second: "Pintura original en excelente estado. Llantas OZ nuevas.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924138/06-concesionario/xkdlq4krldnrbdqkz5io.jpg",
    km: 30000,
    ubi: "Capital Federal, Buenos Aires",
    price: 12000,
    exchange: "U$D",
  },
  {
    _id: "3",
    main: "Subaru Impreza STI 2010",
    year: 2010,
    second: "Motor sin modificaciones. Muy buen estado en general.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924082/06-concesionario/jgnlcewyppbz9sdkwghb.jpg",
    km: 12000,
    ubi: "Canning, Buenos Aires",
    price: 32000,
    exchange: "U$D",
  },
  {
    _id: "4",
    main: "Honda S2000 2007",
    year: 2007,
    second: "Perfecto estado. Detalles minimos. Transimision manual.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924045/06-concesionario/odzpz9qecs0ui6xxe83f.jpg",
    km: 24000,
    ubi: "Nuñes, Buenos Aires",
    price: 25000,
    exchange: "U$D",
  },
  {
    _id: "5",
    main: "Honda NSX 1991",
    year: 1991,
    second: "Motor sin modificaciones. Muy buen estado en general.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924018/06-concesionario/mgaxef4yjau6jqtukmhw.jpg",
    km: 30000,
    ubi: "Canning, Buenos Aires",
    price: 91000,
    exchange: "U$D",
  },
  {
    _id: "6",
    main: "Mitsubishi Evo VII 2002",
    year: 2002,
    second: "Version GT-A en excelente estado. Tapizado interior nuevo.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709923929/06-concesionario/ue3mbtaokdce9fnohaeh.jpg",
    km: 87000,
    ubi: "Luis Guillon, Buenos Aires",
    price: 22500,
    exchange: "U$D",
  },
];

export default function Home() {
  const [cars, setCars] = useState(carsToSell);
  const [value, setValue] = useState<string>("default");
  const [toolTip, setToolTip] = useState<boolean>(false);

  const handleSetValue = (value: string) => {
    setValue(value);
    switch (value) {
      case "Menor precio":
        setCars(carsToSell.sort((a, b) => a.price - b.price));
        break;
      case "Mayor precio":
        setCars(carsToSell.sort((a, b) => b.price - a.price));
        break;
      case "Mas antiguos":
        setCars(carsToSell.sort((a, b) => a.year - b.year));
        break;
      case "Mas recientes":
        setCars(carsToSell.sort((a, b) => b.year - a.year));
        break;
      case "Menos km":
        setCars(carsToSell.sort((a, b) => a.km - b.km));
        break;
      case "Mas km":
        setCars(carsToSell.sort((a, b) => b.km - a.km));
        break;
      case "default":
        setCars(carsToSell.sort((a, b) => parseInt(a._id) - parseInt(b._id)));
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
        {cars.length > 0 &&
          cars.map((car) => (
            <CarCard
              key={car.image}
              _id={car._id}
              main={car.main}
              second={car.second}
              image={car.image}
              km={car.km}
              ubi={car.ubi}
              price={car.price}
              exchange={car.exchange}
            />
          ))}
      </section>
    </div>
  );
}
