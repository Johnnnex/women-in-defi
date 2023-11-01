import React, { useState } from 'react'
import Image from 'next/image'
import ImgSlider from './imgSlider'

const EventCard = () => {
    const [ events, setEventState ] = useState("one")
    const imgArrOne = [
        {
          key: 1,
          imgSrc: "/images/frame-cr-6.png",
        },
        {
          key: 2,
          imgSrc: "/images/frame-cr-3.png",
        },
      ]
    const imgArrTwo = [
        {
          key: 1,
          imgSrc: "/images/frame-cr-5.png",
        },
        {
          key: 2,
          imgSrc: "/images/frame-cr-2.png",
        },
      ]
    const imgArrThr = [
        {
          key: 1,
          imgSrc: "/images/frame-cr-4.png",
        },
        {
          key: 2,
          imgSrc: "/images/frame-cr-1.png",
        },
      ]
    const imgArrFour = [
        {
          key: 1,
          imgSrc: "/images/ccc-cr-6.png",
        },
        {
          key: 2,
          imgSrc: "/images/ccc-cr-3.png",
        },
    ]
    const imgArrFive = [
        {
          key: 1,
          imgSrc: "/images/ccc-cr-5.png",
        },
        {
          key: 2,
          imgSrc: "/images/ccc-cr-2.png",
        },
    ]
    const imgArrSix = [
        {
          key: 1,
          imgSrc: "/images/ccc-cr-4.png",
        },
        {
          key: 2,
          imgSrc: "/images/ccc-cr-1.png",
        },
    ]
  return (
    <section className="max-w-[1272px] w-[85%] mx-auto">
        <div className="flex flex-col md:flex-row p-[10px] w-full md:w-fit mx-auto mb-[57px] rounded-[20px] md:rounded-[200px] justify-between bg-[#F9F9FF]">
            <button onClick={() => setEventState("one")} className={`px-[32px] ${events == "one" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Codes Charts and Cocktails Edo 2022</button>
            <button onClick={() => setEventState("two")} className={`px-[32px] ${events == "two" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>International Women&apos;s Day  Celebration 2023</button>
            <button onClick={() => setEventState("three")} className={`px-[32px] ${events == "three" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Codes Charts and Cocktails 2023</button>
        </div>
        <section className={`${events != "one" ? "hidden" : ""} space-y-[16px] md:space-y-0`}>
            <div className="md:grid hidden grid-cols-3 gap-y-[16px] gap-x-[24px]">
                <figure className="rounded-[16px] overflow-hidden w-full relative h-[452px]">
                    <Image 
                        src="/images/frame-cr-6.png"
                        alt="event_images"
                        fill
                        sizes="(max-width: 768px) 100%, 540px"
                    />
                </figure>
                <figure className="rounded-[16px] overflow-hidden w-full relative h-[452px]">
                    <Image 
                        src="/images/frame-cr-5.png"
                        alt="event_images"
                        fill
                        sizes="(max-width: 768px) 100%, 540px"
                    />
                </figure>
                <figure className="rounded-[16px] overflow-hidden w-full relative h-[452px]">
                    <Image 
                        src="/images/frame-cr-4.png"
                        alt="event_images"
                        fill
                        sizes="(max-width: 768px) 100%, 540px"
                    />
                </figure>
                <figure className="rounded-[16px] overflow-hidden w-full relative h-[452px]">
                    <Image 
                        src="/images/frame-cr-3.png"
                        alt="event_images"
                        fill
                        sizes="(max-width: 768px) 100%, 540px"
                    />
                </figure>
                <figure className="rounded-[16px] overflow-hidden w-full relative h-[452px]">
                    <Image 
                        src="/images/frame-cr-2.png"
                        alt="event_images"
                        fill
                        sizes="(max-width: 768px) 100%, 540px"
                    />
                </figure>
                <figure className="rounded-[16px] overflow-hidden w-full relative h-[452px]">
                    <Image 
                        src="/images/frame-cr-1.png"
                        alt="event_images"
                        fill
                        sizes="(max-width: 768px) 100%, 540px"
                    />
                </figure>
            </div>
            <ImgSlider 
                imgArr={imgArrOne}
                preferredEffect="fade"
                wantsNav={false}
            />
            <ImgSlider 
                imgArr={imgArrTwo}
                preferredEffect="coverflow"
                wantsNav={false}
            />
            <ImgSlider 
                imgArr={imgArrThr}
                preferredEffect="flip"
                wantsNav={false}
            />
        </section>
        <section className={events != "two" ? "hidden" : ""}>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-y-[16px] md:gap-x-[24px]`}>
                <figure className="w-full relative overflow-hidden rounded-[16px] h-[452px]">
                    <Image 
                        src="/images/wid-event-cr-1.jpeg"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
                <figure className="w-full relative overflow-hidden rounded-[16px] h-[452px]">
                    <Image 
                        src="/images/wid-event-cr-2.jpeg"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
                <figure className="w-full relative overflow-hidden rounded-[16px] h-[452px]">
                    <Image 
                        src="/images/wid-event-cr-3.jpeg"
                        sizes="(max-width: 768px) 100%, 540px"
                        alt="event_images"
                        fill
                    />
                </figure>
            </div>
        </section>
        <section className={`${events != "three" ? "hidden" : ""} space-y-[16px] md:space-y-0`}>
            <div className="md:grid hidden grid-cols-3 gap-y-[16px] gap-x-[24px]">
                <figure className="w-full relative h-[452px]">
                    <Image 
                        src="/images/ccc-6.png"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
                <figure className="w-full relative h-[452px]">
                    <Image 
                        src="/images/ccc-5.png"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
                <figure className="w-full relative h-[452px]">
                    <Image 
                        src="/images/ccc-4.png"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
                <figure className="w-full relative h-[452px]">
                    <Image 
                        src="/images/ccc-3.png"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
                <figure className="w-full relative h-[452px]">
                    <Image 
                        src="/images/ccc-2.png"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
                <figure className="w-full relative h-[452px]">
                    <Image 
                        src="/images/ccc-1.png"
                        alt="event_images"
                        sizes="(max-width: 768px) 100%, 540px"
                        fill
                    />
                </figure>
            </div>
            <ImgSlider 
                imgArr={imgArrFour}
                preferredEffect="slide"
                wantsNav={false}
            /> 
            <ImgSlider 
                imgArr={imgArrFive}
                preferredEffect="slide"
                wantsNav={false}
            /> 
            <ImgSlider 
                imgArr={imgArrSix}
                preferredEffect="slide"
                wantsNav={false}
            /> 
        </section>
    </section>
  )
}

export default EventCard
