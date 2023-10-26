import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'
import Connect from '@/reusable components/connect-w-us'

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
        <section className="flex gap-[24px] max-w-[1272px] w-[85%] mx-auto">
          <div className="p-[32px] h-[500px] text-white bg-[#0673EF] flex-1">
            <h4 className="leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[32px]">Sponsoring A Skill-Up Cohort</h4>
            <p className="wow fadeIn text-[18px] font-[400] mb-[76px] leading-[42px]">
              Have your protocol/infrastructure taught during a Skill up Cohort, co-organize events, support women going to hackathons and Web3 events, provide scholarships to advanced training, or reach out to us on other sponsorship opportunities
            </p>
            <button className="btn-trans-w wow fadeIn">Enquire about Sponsorship</button>
          </div>
          <div className="p-[32px] h-[500px] bg-[#F9F9FF] flex-1">
            <h4 className="text-[#110138] leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[32px]">Organizational Training</h4>
            <p className="text-[#666481] wow fadeIn text-[18px] font-[400] leading-[42px]">
              Is your company or organization interested in providing education on Web3, Crypto, Defi and NFTs for your employees? We provide customized corporate training programs aligned with your Web3 objectives. <br />
              Contact <a href="mailto:sarahidahosa001@gmail.com" className="text-[#0673EF]" rel="noopener noreferrer">sarahidahosa001@gmail.com</a> today to bring your company to speed on crypto.
            </p>
          </div>
        </section>
        <section className="pt-[113px] pb-[99px] justify-between flex items-center max-w-[1272px] w-[85%] mx-auto">
          <div className="w-[49%]">
          <h3 className="mb-[16px] wow fadeInDown text-[#110138] font-[600] text-[40px] leading-[52px]">
            Supporting The Women-In-Defi
          </h3>
          <p className="text-[#666481] wow fadeIn mb-[32px] text-[18px] font-[400] leading-[26px]">
            Help sponsor our events and initiatives to empower more African women in Blockchain technology via a donation or more. <br />
            This donation will go a long way in supporting our numerous initiatives and facilitating our events and programs across several chapters. 
          </p>
          <button className="btn-trans wow fadeIn">Donate Now</button>
          </div>
          <div className="wow bounceIn h-fit grid grid-cols-2 w-fit">
            <figure className="relative w-[216px] h-[212px]">
              <Image 
                src="/images/donation-fr-1.png" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative w-[216px] h-[212px]">
              <Image 
                src="/images/donation-fr-2.png" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative w-[216px] h-[212px]">
              <Image 
                src="/images/donation-fr-3.png" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative w-[216px] h-[212px]">
              <Image 
                src="/images/donation-fr-4.png" 
                alt="hero-img"  
                fill
              />              
            </figure>
          </div>
        </section>
        <Connect />
      </main>
    </>
  )
}

export default Donation
