import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import HeadComp from '@/layout/HeadComp'
import Connect from '@/reusable components/connect-w-us'
import Link from 'next/link'
import DonationModal from '@/reusable components/donation-modal'

const Donation = () => {
  const [modalState, setModalState] = useState(false)
  const { push } = useRouter()
  const donateFnc = () => {
    const currLcn = new URL(window.location)
    currLcn.searchParams.set("donate", true)
    push(currLcn)
  }
  return (
    <>
      <HeadComp title="Women in DeFi || Donation" />
      <main className="">
        <section className="md:pt-[113px] pt-[130px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <div className="md:w-[49%]">
          <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
            Partner With Our Community
          </h3>
          <p className="text-[#666481] wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
            We partner with Web2/Web3 organizations to provide our community with access to events, protocols, and job opportunities.
          </p>
          <a href="mailto:partnership@womenindefi.org?subject=Partnership Request with WID">
            <button className="btn-trans wow fadeIn">Partnership Inquiries</button>
          </a>
          </div>
          <div className="wow bounceIn h-fit grid grid-cols-2 w-full md:w-fit">
            <figure className="relative md:w-[216px] w-[100%] rounded-tl-[10px] overflow-hidden h-[212px]">
                <Image 
                src="/images/donate-img-1.jpeg" 
                alt="hero-img"  
                fill
                priority
                sizes="(max-width: 738px) 40vw, 216px"
              />
            </figure>
            <figure className="relative md:w-[216px] w-[100%] rounded-tr-[10px] overflow-hidden h-[212px]">
                <Image 
                src="/images/donate-img-2.jpeg" 
                alt="hero-img"  
                fill
                priority
                sizes="(max-width: 738px) 40vw, 216px"
              />
            </figure>
            <figure className="relative md:w-[216px] w-[100%] rounded-bl-[10px] overflow-hidden h-[212px]">
                <Image 
                src="/images/donate-img-3.jpeg" 
                alt="hero-img"  
                fill
                priority
                sizes="(max-width: 738px) 40vw, 216px"
              />
            </figure>
            <figure className="relative md:w-[216px] w-[100%] rounded-br-[10px] overflow-hidden h-[212px]">
              <Image 
                src="/images/donate-img-4.jpeg" 
                alt="hero-img"  
                fill
                priority
                sizes="(max-width: 738px) 40vw, 216px"
              />              
            </figure>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-[24px] max-w-[1272px] w-full md:w-[85%] mx-auto">
          <div className="md:p-[32px] px-[16px] py-[32px] h-full text-white bg-[#0673EF] flex-1">
            <h4 className="leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[24px] md:text-[32px]">Sponsoring A Skill-Up Cohort</h4>
            <p className="wow fadeIn text-[16px] md:text-[18px] font-[400] mb-[24px] md:mb-[76px] leading-[32px] md:leading-[42px]">
              Have your protocol/infrastructure taught during a Skill up Cohort, co-organize events, support women going to hackathons and Web3 events, provide scholarships to advanced training, or reach out to us on other sponsorship opportunities
            </p>
            <a href="mailto:programs@womenindefi.org?subject=Request for Sponsorship Details">
              <button className="btn-trans-w wow fadeIn">Enquire about Sponsorship</button>
            </a>
          </div>
          <div className="md:p-[32px] hidden md:block px-[16px] py-[32px] bg-[#F9F9FF] flex-1">
            <h4 className="text-[#110138] leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[24px] md:text-[32px]">Organizational Training</h4>
            <p className="text-[#666481] wow fadeIn text-[16px] md:text-[18px] font-[400] leading-[32px] md:leading-[42px]">
              Is your company or organization interested in providing education on Web3, Crypto, Defi and NFTs for your employees? We provide customized corporate training programs aligned with your Web3 objectives. <br />
              Contact <a href="mailto:sarah@womenindefi.org" className="text-[#0673EF]" rel="noopener noreferrer">sarah@womenindefi.org</a> today to bring your company to speed on crypto.
            </p>
          </div>
        </section>
        <section id="donation-tab" className="md:pt-[113px] pt-[40px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <div className="md:w-[49%]">
          <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
            Supporting The Women-In-Defi
          </h3>
          <p className="text-[#666481] wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
            Help sponsor our events and initiatives to empower more African women in Blockchain technology via a donation or more. <br />
            This donation will go a long way in supporting our numerous initiatives and facilitating our events and programs across several chapters. 
          </p>
          <button onClick={donateFnc} className="btn-trans wow fadeIn">Donate Now</button>
          </div>
          <div className="wow bounceIn h-fit grid grid-cols-2 w-full md:w-fit">
            <figure className="relative md:w-[216px] w-[100%] rounded-tl-[10px] overflow-hidden h-[212px]">
              <Image 
                src="/images/donation-fr-1.jpeg" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative md:w-[216px] w-[100%] rounded-tr-[10px] overflow-hidden h-[212px]">
              <Image 
                src="/images/donation-fr-2.jpeg" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative md:w-[216px] w-[100%] rounded-bl-[10px] overflow-hidden h-[212px]">
              <Image 
                src="/images/donation-fr-3.jpeg" 
                alt="hero-img"  
                fill
              />
            </figure>
            <figure className="relative md:w-[216px] w-[100%] rounded-br-[10px] overflow-hidden h-[212px]">
              <Image 
                src="/images/donation-fr-4.jpeg" 
                alt="hero-img"  
                fill
              />              
            </figure>
          </div>
        </section>
        <div className="md:hidden px-[16px] py-[32px] bg-[#F9F9FF]">
          <h4 className="text-[#110138] leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[24px] md:text-[32px]">Organizational Training</h4>
          <p className="text-[#666481] wow fadeIn text-[16px] md:text-[18px] font-[400] leading-[32px] md:leading-[42px]">
            Is your company or organization interested in providing education on Web3, Crypto, Defi and NFTs for your employees? We provide customized corporate training programs aligned with your Web3 objectives. <br />
            Contact <a href="mailto:sarah@womenindefi.org" className="text-[#0673EF]" rel="noopener noreferrer">sarah@womenindefi.org</a> today to bring your company to speed on crypto.
          </p>
        </div>
        <section className="md:pt-[113px] pt-[40px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col-reverse md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <figure className="relative wow bounceIn rounded-[24px] overflow-hidden md:rounded-[100px] h-[491px] md:w-[45%] max-w-[540px]">
            <Image 
              src="/images/code-q-15.jpeg" 
              alt="section-img" 
              fill
              sizes="(max-width: 768px) 100%, 540px"
            />
          </figure>
          <div className="md:w-[49%]">
            <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              Code of Conduct for Women In Defi Community
            </h3>
            <p className="text-[#666481] wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              We value and respect every member of our community, regardless of background, experience, or expertise. We commit to creating an inclusive environment where everyone feels heard and valued.
            </p>
            <Link href="/page/code-of-conduct">
              <button className="btn-trans wow fadeIn">Read Code of Conduct</button>
            </Link>
          </div>
        </section>
        {/* <Connect /> */}
      </main>
    </>
  )
}

export default Donation
