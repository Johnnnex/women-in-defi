import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'

const Donation = () => {
  return (
    <>
      <HeadComp title="Women in DeFi || Donation" />
      <main className="">
        <section className="pt-[113px] pb-[99px] justify-between flex items-center max-w-[1272px] w-[85%] mx-auto">
          <div className="w-[49%]">
          <h3 className="mb-[16px] wow fadeInDown text-[#110138] font-[600] text-[40px] leading-[52px]">
              Attend A WID Event
          </h3>
          <p className="text-[#666481] wow fadeIn mb-[32px] text-[18px] font-[400] leading-[26px]">
              Be a part of any of our online or offline events including twitter spaces, webinars, defi training, skill-up program, codes,charts and cocktails, and several more!
          </p>
          <button className="btn-generic wow fadeIn">View Upcoming Events</button>
          </div>
          <figure className="relative wow bounceIn h-[491px] w-[45%] max-w-[540px]">
            <Image 
                src="/images/Frame-14.png" 
                alt="section-img" 
                priority 
                fill
            />
          </figure>
        </section>
      </main>
    </>
  )
}

export default Donation
