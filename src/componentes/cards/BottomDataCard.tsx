import React from "react";
import styles from "./page.module.css";

interface IBottomDataCard {
  brand: string;
  model: string;
  exchange: string;
  price: number;
}

const BottomDataCard: React.FC<IBottomDataCard> = (props) => {
  return (
    <div className={styles.BottomData}>
      <p className={styles.BottomData_Title}>
        {props.brand} {props.model}
      </p>
      <p className={styles.BottomData_Top}>Precio contado</p>
      <p className={styles.BottomData_Price}>
        {props.exchange} {Intl.NumberFormat().format(props.price)}
      </p>
    </div>
  );
};

export default BottomDataCard;
