"use client";
import React, { Fragment, useState } from "react";
import styles from "./page.module.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&": {
    borderBottom: `1px solid #1976d260`,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(255, 255, 255)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: "6px",
}));

const caracteristicas = [
  {
    titulo: "General",
    data: [
      "Nafta",
      "Levantavidrios electrico",
      "Motor 2.2L",
      "Caja manual 6 velocidades",
      "24000km",
      "Service hecho reciente",
      "4 cubiertas nuevas",
    ],
  },
  { titulo: "Exterior", data: [] },
  { titulo: "Seguridad", data: ["Frenos ABS", "Airbag"] },
  {
    titulo: "Modificaciones",
    data: [
      "Tratamiento de pintura",
      "Amortiguadores racing HKI",
      "Volante Momo",
    ],
  },
  { titulo: "Equipamiento y confort", data: [] },
  { titulo: "Entretenimiento", data: [] },
  { titulo: "Otros", data: ["2 llaves originales", "Volante original"] },
];

const BasicInfo = () => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={styles.BasicInfo}>
      <p className={styles.BasicInfo_Title}>Caracteristicas</p>
      <div className={styles.BasicInfo_Accordion}>
        {caracteristicas.map((c) => (
          <Fragment key={c.titulo}>
            {c.data.length > 0 && (
              <Accordion
                expanded={expanded === c.titulo}
                onChange={handleChange(c.titulo)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <p className={styles.BasicInfo_AccordionTitle}>{c.titulo}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.BasicInfo_Datos}>
                    {c.data.map((d) => (
                      <p key={d} className={styles.BasicInfo_Dato}>
                        · {d}
                      </p>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default BasicInfo;
