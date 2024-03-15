"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { IBasicInfo } from "@/libs/interfaces";
import MyAccordion from "./MyAccordion";

const BasicInfo: React.FC<IBasicInfo> = ({ info }) => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={styles.BasicInfo}>
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
