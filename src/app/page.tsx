import Image from "next/image";
import styles from "./page.module.css";
import CarCard from "@/componentes/cards/CarCard";

export default function Home() {
  return (
    <div className={styles.Home}>
      <CarCard />
    </div>
  );
}
