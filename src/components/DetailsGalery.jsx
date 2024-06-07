import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function DetailsGalery({ projectDetails }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className=" max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl ">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperBigImg"
      >
        {projectDetails?.detailImages?.map((singleImg, index) => (
          <SwiperSlide key={index}>
            <img
              src={singleImg}
              alt={projectDetails?.title}
              className="px-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperImgThumbs"
      >
        {projectDetails?.detailImages?.map((singleImg, index) => (
          <SwiperSlide key={index}>
            <img src={singleImg} alt={projectDetails?.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
