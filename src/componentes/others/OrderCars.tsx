import React, { SetStateAction } from "react";
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
  return (
    <div className={styles.Order}>
      <ClickAwayListener onClickAway={() => setToolTip(false)}>
        <Tooltip
          title={<ToolTipOptions handleSetValue={handleSetValue} />}
          open={open}
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
      </ClickAwayListener>
    </div>
  );
};

export default OrderCars;
