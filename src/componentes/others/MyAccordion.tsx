import React from "react";
import styles from "./page.module.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

interface IMyAccordion {
  titulo: string;
  data: string[];
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
}

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

const MyAccordion: React.FC<IMyAccordion> = (opt) => {
  return (
    <>
      {opt.data.length > 0 && (
        <Accordion
          expanded={opt.expanded === opt.titulo}
          onChange={opt.handleChange(opt.titulo)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <p className={styles.BasicInfo_AccordionTitle}>{opt.titulo}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.BasicInfo_Datos}>
              {opt.data.map((d) => (
                <p key={d} className={styles.BasicInfo_Dato}>
                  · {d}
                </p>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default MyAccordion;
