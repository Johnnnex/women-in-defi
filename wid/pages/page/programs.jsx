import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'
import ProgramToggle from '@/reusable components/programs-toggle'
import Testimonial from '@/reusable components/testimonial'

const Programs = () => {
  return (
    <>
      <HeadComp title="Women In DeFi || Programs" />
      <main className="pt-[80px]">
        <section className="pt-[113px] pb-[44px] justify-between flex items-center max-w-[1272px] w-[85%] mx-auto">
          <div className="w-[49%]">
          <h3 className="mb-[16px] wow fadeInDown text-[#110138] font-[600] text-[40px] leading-[52px]">
            Programs
          </h3>
          <p className="text-[#666481] wow fadeIn text-[18px] font-[400] leading-[26px]">
            All of our programs are thoughtfully crafted to empower African girls and women in the Blockchain space, equipping them with the essential technical and career skills necessary to advance in their respective domains. We operate as a non-profit organization, dedicated to supporting women in the Web3 community.
          </p>
          </div>
          <figure className="relative wow bounceIn h-[491px] w-[45%] max-w-[540px]">
            <Image 
                src="/images/programs.png" 
                alt="hero-img" 
                priority 
                fill
            />
          </figure>
        </section>
        <ProgramToggle />
        <section className="py-[62px] bg-[#0673EF]">
          <h3 className="font-[600] leading-[52px] wow fadeInDown text-[32px] text-white text-center mb-[40px]">Our Community Partners</h3>
          <div className="flex fadeIn wow w-fit items-center gap-[60px] mx-auto">
            <figure className="w-[194px] h-[55px] relative">
              <Image
                src="/images/propel.png"
                alt="patner-img"
                fill
              />
            </figure>
            <figure className="w-[185px] h-[58px] relative">
              <Image
                src="/images/tma.png"
                alt="patner-img"
                fill
              />
            </figure>
            <figure className="w-[71px] h-[71px] relative">
              <Image
                src="/images/rethinkable.png"
                alt="patner-img"
                fill
              />
            </figure>
          </div>
        </section>
        <Testimonial />
      </main>
    </>
  )
}

export default Programs
