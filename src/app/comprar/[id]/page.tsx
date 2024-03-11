"use client";
import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const car = {
  _id: "4",
  main: "Honda S2000 2007",
  second: "Perfecto estado. Detalles minimos. Transimision manual.",
  image: [
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709924045/06-concesionario/odzpz9qecs0ui6xxe83f.jpg",
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180918/06-concesionario/ijyreqzvnkt7380urshi.jpg",
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180922/06-concesionario/xm6fc926dvmfm0is83cq.jpg",
    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1710180925/06-concesionario/xruzscfhhi3otpv6h7n1.jpg",
  ],
  km: 24000,
  ubi: "Nuñes, Buenos Aires",
};

const ComprarID = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.ComprarID}>
      <div className={styles.Swiper}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          autoplay={{ disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
        >
          {car.image.length > 0 &&
            car.image.map((img) => (
              <SwiperSlide key={img}>
                <Image
                  className={styles.Swiper_Image}
                  src={img}
                  alt={car.main}
                  width={800}
                  height={800}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ComprarID;

// <Image src={car.image[0]} alt={car.main} width={800} height={800} />
