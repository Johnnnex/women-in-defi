import React from 'react'
import Image from 'next/image'

const AttendEvent = () => {
  return (
    <section className="md:pt-[113px] pt-[40px] md:pb-[99px] pb-[29px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
        <div className="md:w-[49%]">
          <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              Attend A WID Event
          </h3>
          <p className="text-[#666481] wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              Be a part of any of our online or offline events including twitter spaces, webinars, defi training, skill-up program, codes,charts and cocktails, and several more!
          </p>
          <button className="btn-generic md:w-fit w-full wow fadeIn">View Upcoming Events</button>
        </div>
        <figure className="relative wow bounceIn h-[491px] md:w-[45%] max-w-[540px]">
          <Image 
              src="/images/Frame-14.png" 
              alt="section-img" 
              priority 
              fill
          />
        </figure>
    </section>
  )
}

export default AttendEvent
