"use client";
import React, { useState } from "react";
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
  "&:not(:last-child)": {
    borderBottom: 0,
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
  borderBottom: `1px solid #1976d260`,
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
  borderTop: "1px solid #1976d260",
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
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={styles.BasicInfo}>
      <p className={styles.BasicInfo_Title}>Caracteristicas</p>
      <div className={styles.BasicInfo_Accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <p className={styles.BasicInfo_AccordionTitle}>General</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <p className={styles.BasicInfo_AccordionTitle}>Exterior</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <p className={styles.BasicInfo_AccordionTitle}>Seguridad</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <p className={styles.BasicInfo_AccordionTitle}>Modificaciones</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <p className={styles.BasicInfo_AccordionTitle}>
              Equipamiento y confort
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <p className={styles.BasicInfo_AccordionTitle}>Entretenimiento</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <p className={styles.BasicInfo_AccordionTitle}>Otros</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default BasicInfo;
