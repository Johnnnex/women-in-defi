import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'
import CountDown from '@/reusable components/count-down'
import Chapters from '@/reusable components/chapters'
import Connect from '@/reusable components/connect-w-us'
import AttendEvent from '@/reusable components/attend-an-event'
import Testimonial from '@/reusable components/testimonial'
import ImgSlider from '@/reusable components/imgSlider'

const Homepage = () => {
  const imgArr = [
    {
      key: 1,
      imgSrc: "/images/hero-img-6.png",
    },
    {
      key: 2,
      imgSrc: "/images/hero-img-2.png",
    },
    {
      key: 3,
      imgSrc: "/images/hero-img-1.png",
    },
  ]
  return (
    <>
      <HeadComp title="Women In DeFi || Home" />
      <main className="md:pt-[244px] pt-[150px]">
        <section className="max-w-[1272px] md:w-[85%] w-[90%] pb-[30px] md:pb-[120px] mx-auto">
          <h1 className="text-[#110138] wow fadeInDown text-[24px] md:text-[52px] font-[600] leading-[40px] md:leading-[68px] md:text-center mb-[16px]">
            Empowering Women Globally Through Decentralised  Finance
          </h1>
          <p className="text-[#666481] wow fadeInDown text-[18px] mb-[32px] md:mb-[40px] font-[400] leading-[28px] md:text-center">
            Women in DeFi raising the next generation of leading ladies in the Blockchain space.
          </p>
          <div className="flex gap-[16px] md:gap-[24px] mb-[24px] md:mb-0 flex-col md:flex-row wow fadeIn md:w-fit w-full mx-auto">
            <button className="btn-trans w-full md:w-fit">Donate Now</button>
            <button className="btn-generic w-full md:w-fit">Join Community</button>
          </div>
          <section className="md:block hidden">
            <div className="pt-[80px] wow fadeIn flex justify-between w-full">
              <figure className="w-[24%] h-[390px] relative">
                <Image 
                  src="/images/hero-img-6.png" 
                  alt="hero-image"  
                  fill
                />
              </figure>
              <div className="w-[24%] flex h-[390px] flex-col justify-between">
                <figure className="w-full h-[49%] relative">
                  <Image 
                    src="/images/hero-img-5.png" 
                    alt="hero-image" 
                    fill 
                  />
                </figure>
                <figure className="w-full h-[49%] relative">
                  <Image 
                    src="/images/hero-img-4.png" 
                    alt="hero-image" 
                    fill 
                  />
                </figure>
              </div>
              <div className="w-[24%] flex h-[390px] flex-col justify-between">
                <figure className="w-full h-[49%] relative">
                  <Image 
                    src="/images/hero-img-3.png" 
                    alt="hero-image"
                    fill 
                  />
                </figure>
                <figure className="w-full h-[49%] relative">
                  <Image 
                    src="/images/hero-img-2.png" 
                    alt="hero-image" 
                    fill 
                  />
                </figure>
              </div>
              <div className="w-[24%] h-[390px] relative">
                <Image 
                  src="/images/hero-img-1.png" 
                  alt="hero-image"  
                  fill
                />
              </div>
            </div>
          </section>
          <ImgSlider
            imgArr={imgArr}
            wantsNav={false}
            preferredEffect="cube"
          />
        </section>
        <CountDown />
        <section id="about" className="md:pt-[113px] pt-[40px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <div className="md:w-[49%]">
            <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              About Us
            </h3>
            <p className="text-[#666481] wow fadeIn text-[16px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              Women in Defi is a non-profit organization dedicated to promoting knowledge and empowerment among women in the areas of Blockchain Technology and Decentralized Finance. Our fundamental approach is to provide our community members with high-quality mentorship that focuses on their individual areas of expertise within the Blockchain Technology domain.
            </p>
          </div>
          <figure className="relative wow bounceIn h-[491px] md:w-[45%] max-w-[540px]">
            <Image 
              src="/images/frame-13.png" 
              alt="section-img" 
              fill
            />
          </figure>
        </section>
        <section className="flex flex-col py-[46px] md:py-0 md:flex-row gap-[24px] max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <div className="md:p-[32px] py-[32px] px-[16px] h-[500px] bg-[#FCFFF9] flex-1">
            <h4 className="text-[#110138] leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[24px] md:text-[32px]">Mission</h4>
            <p className="text-[#666481] wow fadeIn text-[16px] font-[400] leading-[30px] md:leading-[42px]">
              We envision a thriving, inclusive community of women in the Blockchain space, where diverse talents and perspective converge to revolutionize the Web3 landscape. <br />
              Through mentorship, education, and collaboration, we strive to break down barriers, fostering innovation and leading the way towards a more equitable digital future.
            </p>
          </div>
          <div className="md:p-[32px] py-[32px] px-[16px] h-[500px] bg-[#F9F9FF] flex-1">
            <h4 className="text-[#110138] leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[24px] md:text-[32px]">Vision</h4>
            <p className="text-[#666481] wow fadeIn text-[16px] font-[400] leading-[30px] md:leading-[42px]">
              We aim to educate 2,000,000 girls and women about blockchain technology, fostering understanding, creating opportunities, and nurturing future leaders in the blockchain space.
            </p>
          </div>
        </section>
        <section className="bg-[#0673EF] pt-[55px] md:pt-[86px] pb-[69px]">
          <div className="max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
            <div className="flex wow bounceIn mb-[32px] md:mb-[56px] items-center leading-[42px] text-white">
              <h3 className="mr-[8px] text-[24px] md:text-[32px] font-[600]">Core Values</h3>🥳
            </div>
            <div className="md:mb-[32px] mb-[16px] flex flex-wrap md:flex-nowrap gap-[16px] md:gap-[50px]">
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Advocacy</button>
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Empathy</button>
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Sustainability</button>
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Support</button>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-[16px] md:gap-[50px]">
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Empowerment</button>
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Inclusivity</button>
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Education</button>
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[24px] font-[500] leading-[42px] rounded-[16px]">Collaboration</button>
            </div>
          </div>
        </section>
        <AttendEvent />
        <section className="md:pt-[113px] pt-[40px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col-reverse md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <figure className="relative wow bounceIn h-[491px] md:w-[45%] max-w-[540px]">
            <Image 
              src="/images/Frame-15.png" 
              alt="section-img" 
              fill
            />
          </figure>
          <div className="md:w-[49%]">
            <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              Embracing Partnerships and Collaborations
            </h3>
            <p className="text-[#666481] wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              Actively looking forward to embracing partners and corporations who concur with our vision and are willing to impact lives.
            </p>
            <button className="btn-generic wow fadeIn">Partner With Us</button>
          </div>
        </section>
        <section className="md:pt-[113px] pt-[40px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <div className="md:w-[49%]">
            <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              Supporting The Women-In-Defi Cause
            </h3>
            <p className="text-[#666481] wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              Help sponsor our events and initiatives to empower more African women in Blockchain Technology via a donation or more.
              This donation will go a long way supporting our numerous initiatives and facilitating our events and programs across our several chapters.
            </p>
            <button className="btn-trans wow fadeIn">Donate Now</button>
          </div>
          <figure className="relative wow bounceIn h-[491px] md:w-[45%] max-w-[540px]">
            <Image 
              src="/images/Frame-16.png" 
              alt="section-img" 
              fill
            />
          </figure>
        </section>
        <section className="py-[64px] hidden md:block">
          <div className="max-w-[1272px] flex justify-between px-[24px] bg-[#0673EFCC] rounded-[24px] pt-[92px] pb-[70px] md:w-[85%] w-[90%] mx-auto">
            <div className="">
              <h3 className="mb-[25px] wow fadeInDown text-white text-[32px] font-[600] leading-[42px]">Follow Us On Our Social Media</h3>
              <div className="flex gap-[24px] wow fadeInUp items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M26.2033 6.99984C25.305 7.40817 24.3367 7.6765 23.3333 7.80484C24.36 7.1865 25.1533 6.2065 25.5267 5.02817C24.5583 5.6115 23.485 6.01984 22.3533 6.25317C21.4317 5.24984 20.1367 4.6665 18.6667 4.6665C15.925 4.6665 13.685 6.9065 13.685 9.6715C13.685 10.0682 13.7317 10.4532 13.8133 10.8148C9.65999 10.6048 5.96166 8.60984 3.49999 5.58817C3.06833 6.32317 2.82333 7.1865 2.82333 8.0965C2.82333 9.83484 3.69833 11.3748 5.05166 12.2498C4.22333 12.2498 3.45333 12.0165 2.77666 11.6665C2.77666 11.6665 2.77666 11.6665 2.77666 11.7015C2.77666 14.1282 4.50333 16.1582 6.78999 16.6132C6.36999 16.7298 5.92666 16.7882 5.47166 16.7882C5.15666 16.7882 4.84166 16.7532 4.53833 16.6948C5.16833 18.6665 6.99999 20.1365 9.20499 20.1715C7.50166 21.5248 5.34333 22.3182 2.98666 22.3182C2.58999 22.3182 2.19333 22.2948 1.79666 22.2482C4.01333 23.6715 6.64999 24.4998 9.47333 24.4998C18.6667 24.4998 23.7183 16.8698 23.7183 10.2548C23.7183 10.0332 23.7183 9.82317 23.7067 9.6015C24.6867 8.9015 25.5267 8.01484 26.2033 6.99984Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M11.6666 17.5002L17.7216 14.0002L11.6666 10.5002V17.5002ZM25.1533 8.36516C25.305 8.9135 25.41 9.6485 25.48 10.5818C25.5616 11.5152 25.5966 12.3202 25.5966 13.0202L25.6666 14.0002C25.6666 16.5552 25.48 18.4335 25.1533 19.6352C24.8616 20.6852 24.185 21.3618 23.135 21.6535C22.5866 21.8052 21.5833 21.9102 20.0433 21.9802C18.5266 22.0618 17.1383 22.0968 15.855 22.0968L14 22.1668C9.11165 22.1668 6.06665 21.9802 4.86498 21.6535C3.81498 21.3618 3.13831 20.6852 2.84665 19.6352C2.69498 19.0868 2.58998 18.3518 2.51998 17.4185C2.43831 16.4852 2.40331 15.6802 2.40331 14.9802L2.33331 14.0002C2.33331 11.4452 2.51998 9.56683 2.84665 8.36516C3.13831 7.31516 3.81498 6.6385 4.86498 6.34683C5.41331 6.19516 6.41665 6.09016 7.95665 6.02016C9.47331 5.9385 10.8616 5.9035 12.145 5.9035L14 5.8335C18.8883 5.8335 21.9333 6.02016 23.135 6.34683C24.185 6.6385 24.8616 7.31516 25.1533 8.36516Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_18_148)">
                    <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_18_148">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_18_149)">
                    <path d="M18.5236 0H1.47639C1.08483 0 0.709301 0.155548 0.432425 0.432425C0.155548 0.709301 0 1.08483 0 1.47639V18.5236C0 18.9152 0.155548 19.2907 0.432425 19.5676C0.709301 19.8445 1.08483 20 1.47639 20H18.5236C18.9152 20 19.2907 19.8445 19.5676 19.5676C19.8445 19.2907 20 18.9152 20 18.5236V1.47639C20 1.08483 19.8445 0.709301 19.5676 0.432425C19.2907 0.155548 18.9152 0 18.5236 0ZM5.96111 17.0375H2.95417V7.48611H5.96111V17.0375ZM4.45556 6.1625C4.11447 6.16058 3.7816 6.05766 3.49895 5.86674C3.21629 5.67582 2.99653 5.40544 2.8674 5.08974C2.73826 4.77404 2.70554 4.42716 2.77336 4.09288C2.84118 3.7586 3.0065 3.4519 3.24846 3.21148C3.49042 2.97107 3.79818 2.80772 4.13289 2.74205C4.4676 2.67638 4.81426 2.71133 5.12913 2.84249C5.44399 2.97365 5.71295 3.19514 5.90205 3.47901C6.09116 3.76288 6.19194 4.09641 6.19167 4.4375C6.19488 4.66586 6.15209 4.89253 6.06584 5.104C5.97959 5.31547 5.85165 5.50742 5.68964 5.66839C5.52763 5.82936 5.33487 5.95607 5.12285 6.04096C4.91083 6.12585 4.68389 6.16718 4.45556 6.1625ZM17.0444 17.0458H14.0389V11.8278C14.0389 10.2889 13.3847 9.81389 12.5403 9.81389C11.6486 9.81389 10.7736 10.4861 10.7736 11.8667V17.0458H7.76667V7.49306H10.6583V8.81667H10.6972C10.9875 8.22917 12.0042 7.225 13.5556 7.225C15.2333 7.225 17.0458 8.22083 17.0458 11.1375L17.0444 17.0458Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_18_149">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="grid-container wow bounceIn">
              <Image src="/images/img-1.png" height={1} width={50} alt="connect-images" />
              <Image src="/images/img-2.png" height={1} width={50} alt="connect-images" />
              <Image src="/images/img-3.png" height={1} width={50} alt="connect-images" />
              <Image src="/images/img-4.png" height={1} width={50} alt="connect-images" />
              <Image src="/images/img-5.png" height={1} width={50} alt="connect-images" />
              <Image src="/images/img-6.png" height={1} width={50} alt="connect-images" />
              <Image src="/images/img-7.png" height={1} width={50} alt="connect-images" />
              <Image src="/images/img-8.png" height={1} width={50} alt="connect-images" />
            </div>
          </div>
        </section>
        <Testimonial />
        <Chapters />
        {/* <Connect /> */}
      </main>
    </>
  )
}

export default Homepage
