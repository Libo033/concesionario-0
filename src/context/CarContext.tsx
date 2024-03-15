"use client";
import { ICar } from "@/libs/interfaces";
import { createContext, useState, useEffect, ChangeEvent } from "react";

interface ICarContext {
  loadCars: boolean;
  cars: ICar[];
  filterBy: (value: string) => void;
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const defaultCars: ICar[] = [
  {
    _id: "1",
    marca: "Nissan",
    modelo: "Silvia",
    km: 86800,
    ano: 2001,
    breve_info: "Motor sin modificaciones. Muy buen estado en general.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924143/06-concesionario/p7zkdo1tgnvd07guefpa.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710459735/06-concesionario/pbwiqymkoiyggvuqc5hn.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710459739/06-concesionario/vgxue5hkpthfjogpc6cv.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Capital Federal",
    precio: 22000,
    moneda: "U$D",
    informacion: {
      combustible: "nafta",
      transmision: "manual",
      general: {
        titulo: "general",
        data: ["Todo original"],
      },
      exterior: {
        titulo: "exterior",
        data: ["Sin accidentes"],
      },
      seguridad: {
        titulo: "seguridad",
        data: ["Frenos ABS", "Airbags"],
      },
      modificaciones: {
        titulo: "modificaciones",
        data: [],
      },
      equip_confort: {
        titulo: "equipamiento y confort",
        data: [],
      },
      entretenimiento: {
        titulo: "entretenimiento",
        data: [],
      },
      otros: {
        titulo: "otros",
        data: [],
      },
      motor: "2L",
    },
  },
  {
    _id: "2",
    marca: "Nissan",
    modelo: "180SX",
    km: 145000,
    ano: 1998,
    breve_info: "Pintura original en excelente estado. Llantas OZ nuevas.",
    imagenes: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924138/06-concesionario/xkdlq4krldnrbdqkz5io.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460189/06-concesionario/byqo3zl0fzmanpj9iyjo.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460195/06-concesionario/jk4svimr1uxgxiszokla.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460198/06-concesionario/z52x7mlkbkf25nk16jrs.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Capital Federal",
    precio: 15000,
    moneda: "U$D",
    informacion: {
      combustible: "nafta",
      transmision: "automatico",
      general: {
        titulo: "general",
        data: ["Quemacocos"],
      },
      exterior: {
        titulo: "exterior",
        data: ["Sin accidentes"],
      },
      seguridad: {
        titulo: "seguridad",
        data: ["Frenos ABS"],
      },
      modificaciones: {
        titulo: "modificaciones",
        data: ["Llantas de aluminio"],
      },
      equip_confort: {
        titulo: "equipamiento y confort",
        data: ["Aire acondicionado", "Levantavidrios electrico"],
      },
      entretenimiento: {
        titulo: "entretenimiento",
        data: ["Estereo nuevo"],
      },
      otros: {
        titulo: "otros",
        data: ["2 juegos de llaves originales"],
      },
      motor: "2L",
    },
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
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460282/06-concesionario/wdvbmzr5trz6sz2ixibm.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460289/06-concesionario/xux7yedhqpie0uisnpnz.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460291/06-concesionario/xhugemopviwqzylx1yza.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Canning",
    precio: 32000,
    moneda: "U$D",
    informacion: {
      combustible: "nafta",
      transmision: "manual",
      general: {
        titulo: "general",
        data: ["Asientos deportivos"],
      },
      exterior: {
        titulo: "exterior",
        data: [],
      },
      seguridad: {
        titulo: "seguridad",
        data: ["Frenos ABS", "Airbag", "Control de Estabilidad", "Grabadora"],
      },
      modificaciones: {
        titulo: "modificaciones",
        data: ["Sistema anti robo", "Llantas de aluminio"],
      },
      equip_confort: {
        titulo: "equipamiento y confort",
        data: ["A/C", "GPS integrado", "Levantavidrios electrico"],
      },
      entretenimiento: {
        titulo: "entretenimiento",
        data: ["DVD", "Estereo", "TV"],
      },
      otros: {
        titulo: "otros",
        data: [],
      },
      motor: "2L",
    },
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
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180918/06-concesionario/ijyreqzvnkt7380urshi.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180922/06-concesionario/xm6fc926dvmfm0is83cq.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180925/06-concesionario/xruzscfhhi3otpv6h7n1.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Nuñes",
    precio: 25000,
    moneda: "U$D",
    informacion: {
      combustible: "nafta",
      transmision: "manual",
      general: {
        titulo: "general",
        data: [
          "Caja manual 6 velocidades",
          "Service hecho reciente",
          "4 cubiertas nuevas",
        ],
      },
      exterior: {
        titulo: "exterior",
        data: [],
      },
      seguridad: {
        titulo: "seguridad",
        data: ["Frenos ABS", "Airbag"],
      },
      modificaciones: {
        titulo: "modificaciones",
        data: [
          "Tratamiento de pintura",
          "Amortiguadores racing HKI",
          "Volante Momo",
        ],
      },
      equip_confort: {
        titulo: "equipamiento y confort",
        data: ["Levantavidrios electrico"],
      },
      entretenimiento: {
        titulo: "entretenimiento",
        data: [],
      },
      otros: {
        titulo: "otros",
        data: ["2 llaves originales", "Volante original"],
      },
      motor: "2.2L",
    },
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
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460785/06-concesionario/rhwirsbrjffhohi3eh8e.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Canning",
    precio: 91000,
    moneda: "U$D",
    informacion: {
      combustible: "nafta",
      transmision: "manual",
      general: {
        titulo: "general",
        data: ["Volante a la derecha"],
      },
      exterior: {
        titulo: "exterior",
        data: [],
      },
      seguridad: {
        titulo: "seguridad",
        data: ["Frenos ABS", "Airbag"],
      },
      modificaciones: {
        titulo: "modificaciones",
        data: [
          "Llantas de aluminio",
          "Suspesion de competicion",
          "Amortiguadores de competicion",
        ],
      },
      equip_confort: {
        titulo: "equipamiento y confort",
        data: ["Levantavidrios electrico", "A/C"],
      },
      entretenimiento: {
        titulo: "entretenimiento",
        data: [],
      },
      otros: {
        titulo: "otros",
        data: [],
      },
      motor: "2970 cc",
    },
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
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460957/06-concesionario/zekndmly7gcwsyyosdu9.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460960/06-concesionario/a1mstkslvsmrgxpvvuhz.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460964/06-concesionario/rs0dxq3kkgxnl9p2eji4.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710460967/06-concesionario/rp7h0vdhktzgvzj1gwoy.jpg",
    ],
    provincia: "Buenos Aires",
    localidad: "Luis Guillon",
    precio: 22500,
    moneda: "U$D",
    informacion: {
      combustible: "nafta",
      transmision: "automatica",
      general: {
        titulo: "general",
        data: ["Libro de mantenimientos"],
      },
      exterior: {
        titulo: "exterior",
        data: [],
      },
      seguridad: {
        titulo: "seguridad",
        data: ["Frenos ABS", "Airbag"],
      },
      modificaciones: {
        titulo: "modificaciones",
        data: [],
      },
      equip_confort: {
        titulo: "equipamiento y confort",
        data: ["Levantavidrios electrico", "A/C"],
      },
      entretenimiento: {
        titulo: "entretenimiento",
        data: [],
      },
      otros: {
        titulo: "otros",
        data: ["Juego de llaves originales"],
      },
      motor: "2L",
    },
  },
];

const defaultValue: ICarContext = {
  loadCars: false,
  cars: defaultCars,
  filterBy: (v: string) => {},
  search: "",
  handleChange: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CarContext: React.Context<ICarContext> =
  createContext(defaultValue);

export const CarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [loadCars, setLoadCars] = useState<boolean>(false);
  const [cars, setCars] = useState<ICar[]>(defaultCars);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setCars(defaultCars);
    } else {
      setCars(
        cars.filter(
          (c) =>
            c.marca.toLowerCase().includes(e.target.value.toLowerCase()) ||
            c.modelo.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const filterBy = (value: string) => {
    switch (value) {
      case "Menor precio":
        setCars(cars.sort((a, b) => a.precio - b.precio));
        break;
      case "Mayor precio":
        setCars(cars.sort((a, b) => b.precio - a.precio));
        break;
      case "Mas antiguos":
        setCars(cars.sort((a, b) => a.ano - b.ano));
        break;
      case "Mas recientes":
        setCars(cars.sort((a, b) => b.ano - a.ano));
        break;
      case "Menos km":
        setCars(cars.sort((a, b) => a.km - b.km));
        break;
      case "Mas km":
        setCars(cars.sort((a, b) => b.km - a.km));
        break;
      case "default":
        setCars(cars.sort((a, b) => parseInt(a._id) - parseInt(b._id)));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setLoadCars(true);
  }, []);

  return (
    <CarContext.Provider
      value={{ loadCars, cars, filterBy, search, handleChange }}
    >
      {children}
    </CarContext.Provider>
  );
};
