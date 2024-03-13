"use client";
import styles from "./page.module.css";
import CarCard from "@/componentes/cards/CarCard";
import { KeyboardArrowDown } from "@mui/icons-material";
import { ClickAwayListener, Tooltip } from "@mui/material";
import { useState } from "react";

const carsToSell = [
  {
    _id: "1",
    main: "Nissan Silvia 2001",
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
    second: "Version GT-A en excelente estado. Tapizado interior nuevo.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709923929/06-concesionario/ue3mbtaokdce9fnohaeh.jpg",
    km: 87000,
    ubi: "Luis Guillon, Buenos Aires",
    price: 22500,
    exchange: "U$D",
  },
];

const ToolTipOptions: React.FC<{ handleSetValue: (value: string) => void }> = ({
  handleSetValue,
}) => {
  return (
    <div className={styles.ToolTipOptions}>
      <p onClick={() => handleSetValue("Menor precio")}>Menor precio</p>
      <p onClick={() => handleSetValue("Mayor precio")}>Mayor precio</p>
      <p onClick={() => handleSetValue("Mas antiguos")}>Mas antiguos</p>
      <p onClick={() => handleSetValue("Mas recientes")}>Mas recientes</p>
      <p onClick={() => handleSetValue("Menos km")}>Menos km</p>
      <p onClick={() => handleSetValue("Mas km")}>Mas km</p>
      <p onClick={() => handleSetValue("default")}>reset</p>
    </div>
  );
};

export default function Home() {
  const [cars, setCars] = useState(carsToSell);
  const [value, setValue] = useState<string>("default");
  const [toolTip, setToolTip] = useState<boolean>(false);

  const handleSetValue = (value: string) => {
    setValue(value);
    switch (value) {
      case "Menor precio":
        break;
      case "Mayor precio":
        break;
      case "Mas antiguos":
        break;
      case "Mas recientes":
        break;
      case "Menos km":
        break;
      case "Mas km":
        break;
      case "default":
        break;
      default:
        break;
    }
  };

  return (
    <div onScroll={() => setToolTip(false)} className={styles.Home}>
      <div className={styles.Order}>
        <ClickAwayListener onClickAway={() => setToolTip(false)}>
          <Tooltip
            title={<ToolTipOptions handleSetValue={handleSetValue} />}
            open={toolTip}
          >
            <p
              onClick={() => setToolTip(!toolTip)}
              className={styles.Order_Container}
            >
              Ordenar: <span className={styles.Order_Span}>{value}</span>
              <KeyboardArrowDown
                sx={{ margin: "0", fontSize: "21px", color: "#1976d2" }}
              />
            </p>
          </Tooltip>
        </ClickAwayListener>
      </div>
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
