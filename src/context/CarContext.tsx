"use client";
import { ICar } from "@/libs/interfaces";
import { createContext, useState, useEffect } from "react";

interface ICarContext {
  loadCars: boolean;
  cars: ICar[];
}

const defaultCars: ICar[] = [
  {
    _id: "1",
    marca: "nissan",
    modelo: "Silvia",
    km: 6700,
    ano: 2001,
    breve_info: "Motor sin modificaciones. Muy buen estado en general.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924143/06-concesionario/p7zkdo1tgnvd07guefpa.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Capital Federal",
    precio: 16000,
    moneda: "U$D",
  },
  {
    _id: "2",
    marca: "Nissan",
    modelo: "180SX",
    km: 30000,
    ano: 1998,
    breve_info: "Pintura original en excelente estado. Llantas OZ nuevas.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924138/06-concesionario/xkdlq4krldnrbdqkz5io.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Capital Federal",
    precio: 12000,
    moneda: "U$D",
  },
  {
    _id: "3",
    marca: "Subaru",
    modelo: "Impreza STI",
    km: 12000,
    ano: 2010,
    breve_info: "Motor sin modificaciones. Muy buen estado en general.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924082/06-concesionario/jgnlcewyppbz9sdkwghb.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Canning",
    precio: 32000,
    moneda: "U$D",
  },
  {
    _id: "4",
    marca: "Honda",
    modelo: "S2000",
    km: 24000,
    ano: 2007,
    breve_info: "Perfecto estado. Detalles minimos. Transimision manual.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924045/06-concesionario/odzpz9qecs0ui6xxe83f.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Nuñes",
    precio: 25000,
    moneda: "U$D",
  },
  {
    _id: "5",
    marca: "Honda",
    modelo: "NSX",
    km: 30000,
    ano: 1991,
    breve_info: "Motor sin modificaciones. Muy buen estado en general.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924018/06-concesionario/mgaxef4yjau6jqtukmhw.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Canning",
    precio: 91000,
    moneda: "U$D",
  },
  {
    _id: "6",
    marca: "Mitsubishi",
    modelo: "Evo VII",
    km: 87000,
    ano: 2002,
    breve_info: "Version GT-A en excelente estado. Tapizado interior nuevo.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709923929/06-concesionario/ue3mbtaokdce9fnohaeh.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Luis Guillon",
    precio: 22500,
    moneda: "U$D",
  },
];

const defaultValue: ICarContext = {
  loadCars: false,
  cars: defaultCars,
};

export const CarContext: React.Context<ICarContext> =
  createContext(defaultValue);

export const CarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [loadCars, setLoadCars] = useState<boolean>(false);
  const [cars, setCars] = useState<ICar[]>(defaultCars);

  useEffect(() => {
    setLoadCars(true);
  }, []);

  return (
    <CarContext.Provider value={{ loadCars, cars }}>
      {children}
    </CarContext.Provider>
  );
};
