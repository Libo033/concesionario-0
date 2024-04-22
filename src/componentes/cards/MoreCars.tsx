"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import CarCard from "./CarCard";
import { CarContext } from "@/context/CarContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const MoreCars = () => {
  const { cars, loadCars } = useContext(CarContext);
  const [q, setQ] = useState(1);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 640) setQ(1);
      if (window.innerWidth >= 640 && window.innerWidth < 800) setQ(2);
      if (window.innerWidth >= 800 && window.innerWidth < 1124) setQ(3);
      if (window.innerWidth >= 1124 && window.innerWidth < 1560) setQ(4);
    }
  }, []);

  return (
    <section className={styles.MoreCars}>
      <p className={styles.MoreCars_P}>Mas autos</p>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={q}
        spaceBetween={30}
        autoplay={{ disableOnInteraction: false }}
        loop={true}
      >
        {cars.map((c) => (
          <SwiperSlide key={c._id}>
            <CarCard {...c} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MoreCars;
