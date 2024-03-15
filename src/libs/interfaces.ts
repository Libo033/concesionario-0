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
  informacion: {
    combustible: string;
    motor: string;
    transmision: string;
    general: {
      titulo: string;
      data: string[];
    };
    exterior: {
      titulo: string;
      data: string[];
    };
    seguridad: {
      titulo: string;
      data: string[];
    };
    modificaciones: {
      titulo: string;
      data: string[];
    };
    equip_confort: {
      titulo: string;
      data: string[];
    };
    entretenimiento: {
      titulo: string;
      data: string[];
    };
    otros: {
      titulo: string;
      data: string[];
    };
  };
}
