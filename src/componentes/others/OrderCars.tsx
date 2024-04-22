"use client";
import React, { SetStateAction, useEffect } from "react";
import styles from "./page.module.css";
import { ClickAwayListener, Tooltip } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

interface IOrderCars {
  value: string;
  handleSetValue: (value: string) => void;
  setToolTip: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

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

const OrderCars: React.FC<IOrderCars> = ({
  handleSetValue,
  open,
  setToolTip,
  value,
}) => {
  useEffect(() => {
    if (open) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setToolTip(false);
  };

  return (
    <div className={styles.Order}>
      <ClickAwayListener onClickAway={() => setToolTip(false)}>
        <div>
          <Tooltip
            id="dropdownOrderCars"
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={<ToolTipOptions handleSetValue={handleSetValue} />}
            open={open}
            PopperProps={{
              disablePortal: true,
            }}
          >
            <p
              onClick={() => setToolTip(!open)}
              className={styles.Order_Container}
            >
              Ordenar: <span className={styles.Order_Span}>{value}</span>
              <KeyboardArrowDown
                sx={{ margin: "0", fontSize: "21px", color: "#1976d2" }}
              />
            </p>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default OrderCars;
