import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'
import CountDown from '@/reusable components/count-down'

const Homepage = () => {
  return (
    <>
      <HeadComp title="Women In DeFi || Home" />
      <main className="pt-[244px]">
        <section className="max-w-[1272px] w-[85%] pb-[120px] mx-auto">
          <h1 className="text-[#110138] text-[52px] font-[600] leading-[68px] text-center mb-[16px]">
            Empowering Women Globally Through Decentralised  Finance
          </h1>
          <p className="text-[#666481] text-[18px] mb-[40px] font-[400] leading-[28px] text-center">
            Women in DeFi raising the next generation of leading ladies in the Blockchain space.
          </p>
          <div className="flex gap-[24px] w-fit mx-auto">
            <button className="btn-trans">Donate Now</button>
            <button className="btn-generic">Join Community</button>
          </div>
          <div className="pt-[80px] flex justify-between w-full">
            <div className="w-[24%] h-[390px] relative">
              <Image 
                src="/images/hero-img-6.png" 
                alt="logo" 
                priority 
                fill 
                // sizes="100px"
              />
            </div>
            <div className="w-[24%] flex h-[390px] flex-col justify-between">
              <div className="w-full h-[49%] relative">
                <Image 
                  src="/images/hero-img-5.png" 
                  alt="logo" 
                  priority 
                  fill 
                  // sizes="100px"
                />
              </div>
              <div className="w-full h-[49%] relative">
                <Image 
                  src="/images/hero-img-4.png" 
                  alt="logo" 
                  priority 
                  fill 
                  // sizes="100px"
                />
              </div>
            </div>
            <div className="w-[24%] flex h-[390px] flex-col justify-between">
              <div className="w-full h-[49%] relative">
                <Image 
                  src="/images/hero-img-3.png" 
                  alt="logo" 
                  priority 
                  fill 
                  // sizes="100px"
                />
              </div>
              <div className="w-full h-[49%] relative">
                <Image 
                  src="/images/hero-img-2.png" 
                  alt="logo" 
                  priority 
                  fill 
                  // sizes="100px"
                />
              </div>
            </div>
            <div className="w-[24%] h-[390px] relative">
              <Image 
                src="/images/hero-img-1.png" 
                alt="logo" 
                priority 
                fill 
                // sizes="100px"
              />
            </div>
          </div>
        </section>
        <CountDown />
      </main>
    </>
  )
}

export default Homepage
