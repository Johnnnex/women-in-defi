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
            Partner With Our Community
          </h3>
          <p className="text-[#666481] wow fadeIn mb-[32px] text-[18px] font-[400] leading-[26px]">
            We partner with Web2/Web3 organizations to provide our community with access to events, protocols, and job opportunities.
          </p>
          <button className="btn-trans wow fadeIn">Partnership Inquiries</button>
          </div>
          <div className="wow bounceIn h-fit grid grid-cols-2 w-fit">
            <figure className="relative w-[216px] h-[212px]">
                <Image 
                src="/images/donate-img-1.png" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative w-[216px] h-[212px]">
                <Image 
                src="/images/donate-img-2.png" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative w-[216px] h-[212px]">
                <Image 
                src="/images/donate-img-3.png" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative w-[216px] h-[212px]">
              <Image 
                src="/images/donate-img-4.png" 
                alt="hero-img"  
                fill
              />              
            </figure>
          </div>
        </section>
      </main>
    </>
  )
}

export default Donation
