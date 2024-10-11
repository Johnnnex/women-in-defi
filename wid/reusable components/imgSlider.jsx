import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCube,
  A11y,
  Autoplay,
  EffectFlip,
  EffectFade,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css";

const ImgSlider = ({ imgArr, wantsNav, preferredEffect }) => {
  const renderImg = imgArr.map(({ key, imgSrc }) => {
    return (
      <SwiperSlide key={key}>
        <figure
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`h-[425px] bg-no-repeat bg-cover bg-center rounded-[24px] overflow-hidden relative w-full`}
        ></figure>
      </SwiperSlide>
    );
  });
  return (
    <section className="md:hidden">
      <Swiper
        className="w-[100%] h-fit"
        modules={[
          Navigation,
          A11y,
          Autoplay,
          EffectCube,
          EffectFlip,
          EffectFade,
          EffectCoverflow,
          EffectCards,
        ]}
        grabCursor={true}
        navigation={wantsNav == true && true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cubeEffect={
          preferredEffect == "cube" && {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }
        }
        effect={preferredEffect}
        spaceBetween={50}
        slidesPerView={1}
      >
        {renderImg}
      </Swiper>
    </section>
  );
};

export default ImgSlider;
