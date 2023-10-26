import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCube, A11y, Autoplay } from "swiper/modules"
import 'swiper/css/effect-cube';
import "swiper/css/autoplay"
import 'swiper/css/navigation'
import "swiper/css/bundle"
import 'swiper/css'

const ImgSlider = ({imgArr, wantsNav, preferredEffect}) => {
    const renderImg = imgArr.map (({key, imgSrc}) => {
        return (
            <SwiperSlide key={key}>
                <figure className="h-[425px] relative w-full">
                    <Image 
                    src={imgSrc}
                    alt="hero-image"  
                    fill
                    />
                </figure>
            </SwiperSlide>
        )
    })
  return (
    <section className="md:hidden">
        <Swiper
            className="w-[100%] h-fit"
            modules={[Navigation, A11y, Autoplay, EffectCube]}
            grabCursor={true}
            navigation = {wantsNav == true && true} 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            cubeEffect={ preferredEffect == "cube" && {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            effect={preferredEffect}
            spaceBetween={50}
            slidesPerView={1}
        >
            {renderImg}
        </Swiper>
    </section>
  )
}

export default ImgSlider
