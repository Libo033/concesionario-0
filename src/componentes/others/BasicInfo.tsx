"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { IBasicInfo } from "@/libs/interfaces";
import MyAccordion from "./MyAccordion";
import Image from "next/image";

const BasicInfo: React.FC<IBasicInfo> = ({ info }) => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={styles.BasicInfo}>
      <p className={styles.BasicInfo_Title}>Principal</p>
      <div className={styles.BasicInfo_Principal}>
        <div className={styles.BasicInfo_Container}>
          <Image
            src={"/image/engine.svg"}
            alt="engine"
            width={450}
            height={450}
          />
          <p>Motor: {info.motor}</p>
        </div>
        <div className={styles.BasicInfo_Container}>
          <Image src={"/image/gas.svg"} alt="gas" width={450} height={450} />
          <p>Tipo de combustible: {info.combustible}</p>
        </div>
        <div className={styles.BasicInfo_Container}>
          <Image
            src={"/image/gearbox.svg"}
            alt="gearbox"
            width={450}
            height={450}
          />
          <p>Transmision: {info.transmision}</p>
        </div>
      </div>
      <p className={styles.BasicInfo_Title}>Caracteristicas</p>
      <div className={styles.BasicInfo_Accordion}>
        <MyAccordion
          titulo={info.general.titulo}
          data={info.general.data}
          expanded={expanded}
          handleChange={handleChange}
        />
        <MyAccordion
          titulo={info.exterior.titulo}
          data={info.exterior.data}
          expanded={expanded}
          handleChange={handleChange}
        />
        <MyAccordion
          titulo={info.seguridad.titulo}
          data={info.seguridad.data}
          expanded={expanded}
          handleChange={handleChange}
        />
        <MyAccordion
          titulo={info.modificaciones.titulo}
          data={info.modificaciones.data}
          expanded={expanded}
          handleChange={handleChange}
        />
        <MyAccordion
          titulo={info.equip_confort.titulo}
          data={info.modificaciones.data}
          expanded={expanded}
          handleChange={handleChange}
        />
        <MyAccordion
          titulo={info.entretenimiento.titulo}
          data={info.entretenimiento.data}
          expanded={expanded}
          handleChange={handleChange}
        />
        <MyAccordion
          titulo={info.otros.titulo}
          data={info.otros.data}
          expanded={expanded}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
