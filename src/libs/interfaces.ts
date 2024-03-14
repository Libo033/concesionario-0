export interface ICarCard {
  _id: string;
  main: string;
  second: string;
  km: number;
  ubi: string;
  image: string;
  price: number;
  exchange: string;
}

export interface ICar {
  _id: string;
  marca: string;
  modelo: string;
  ano: number;
  km: number;
  breve_info: string;
  precio: number;
  moneda: string;
  imagenes: string[];
  provincia: string;
  localidad: string;
}
