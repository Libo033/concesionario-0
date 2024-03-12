import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ISwiper {
  images: string[];
  alt: string;
}

const SwiperComprar: React.FC<ISwiper> = ({ images, alt }) => {
  return (
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
        {images.length > 0 &&
          images.map((img) => (
            <SwiperSlide key={img}>
              <Image
                className={styles.Swiper_Image}
                src={img}
                alt={alt}
                width={1200}
                height={1200}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperComprar;
