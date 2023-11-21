import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'
import ProgramToggle from '@/reusable components/programs-toggle'
import Testimonial from '@/reusable components/testimonial'

const Programs = () => {
  return (
    <>
      <HeadComp title="Women In DeFi || Programs" />
      <main className="">
        <section className="pt-[80px] hero">
          <section className="md:pt-[113px] pt-[70px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
            <div className="md:w-[49%]">
            <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              Programs
            </h3>
            <p className="text-[#666481] wow fadeIn text-[16px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              All of our programs are thoughtfully crafted to empower African girls and women in the Blockchain space, equipping them with the essential technical and career skills necessary to advance in their respective domains. We operate as a non-profit organization, dedicated to supporting women in the Web3 community.
            </p>
            </div>
            <figure className="relative wow bounceIn h-[491px] rounded-[24px] md:rounded-[100px] overflow-hidden md:w-[45%] max-w-[540px]">
              <Image 
                  src="/images/programs-q.png" 
                  alt="hero-img" 
                  priority 
                  sizes="(max-width: 768px) 100%, 540px"
                  fill
              />
            </figure>
          </section>
        </section>
        <ProgramToggle />
        <Testimonial />
      </main>
    </>
  )
}

export default Programs
