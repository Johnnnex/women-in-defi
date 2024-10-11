import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HeadComp from "@/layout/HeadComp";
import CountDown from "@/reusable components/count-down";
import Chapters from "@/reusable components/chapters";
import Connect from "@/reusable components/connect-w-us";
import Testimonial from "@/reusable components/testimonial";
import ImgSlider from "@/reusable components/imgSlider";

const Homepage = () => {
  const { push } = useRouter();
  const imgArr = [
    {
      key: 1,
      imgSrc: "/images/hero-slider.png",
    },
    {
      key: 2,
      imgSrc: "/images/her-img-q-2.png",
    },
    {
      key: 3,
      imgSrc: "/images/hero-img-q-1-cr.png",
    },
  ];
  const donateFnc = () => {
    const currLcn = new URL(window.location);
    currLcn.searchParams.set("donate", true);
    push(currLcn);
  };
  return (
    <>
      <HeadComp title="Women In DeFi || Home" />
      <main className="">
        <section className="hero md:pt-[244px] pt-[150px]">
          <section className="max-w-[1272px] md:w-[85%] w-[90%] pb-[30px] md:pb-[120px] mx-auto">
            <h1 className="text-[#110138] wow fadeInDown text-[24px] md:text-[52px] font-[600] leading-[40px] md:leading-[68px] md:text-center mb-[16px]">
              Empowering Women Globally Through Decentralised Finance
            </h1>
            <p className="text-[#666481] wow fadeInDown md:text-[18px] text-[16px] mb-[32px] md:mb-[40px] font-[400] leading-[28px] md:text-center">
              Women in DeFi is raising the next generation of leading ladies in
              the Blockchain space.
            </p>
            <div className="flex gap-[16px] md:gap-[24px] mb-[24px] md:mb-0 flex-col md:flex-row wow fadeIn md:w-fit w-full mx-auto">
              <button onClick={donateFnc} className="btn-trans w-full md:w-fit">
                Donate Now
              </button>
              <a
                href="https://forms.gle/sVHUHnF9bz42BJui7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-generic hover:bg-transparent w-full md:w-fit">
                  Join Community
                </button>
              </a>
            </div>
            <section className="md:block hidden">
              <div className="pt-[80px] wow fadeIn flex justify-between w-full">
                <figure className="w-[24%] bg-no-repeat bg-[url('/images/index-her-img.png')] bg-cover bg-center rounded-[16px] overflow-hidden h-[390px] relative"></figure>
                <div className="w-[24%] flex h-[390px] flex-col justify-between">
                  <figure className="w-full bg-no-repeat bg-[url('/images/hero-img-q-5.jpeg')] bg-cover bg-center h-[49%] rounded-[100px] overflow-hidden relative"></figure>
                  <figure className="w-full bg-no-repeat bg-[url('/images/hero-img-q-4.jpeg')] bg-cover bg-center rounded-[100px] overflow-hidden h-[49%] relative"></figure>
                </div>
                <div className="w-[24%] flex h-[390px] flex-col justify-between">
                  <figure className="w-full bg-no-repeat bg-[url('/images/her-img-q-3.png')] bg-cover bg-center h-[39%] rounded-[16px] overflow-hidden relative"></figure>
                  <figure className="w-full bg-no-repeat bg-[url('/images/her-img-q-2.png')] bg-cover bg-center h-[59%] rounded-[16px] overflow-hidden relative"></figure>
                </div>
                <div className="w-[24%] bg-no-repeat bg-[url('/images/hero-img-q-1.jpeg')] bg-cover bg-center h-[390px] rounded-[16px] overflow-hidden relative"></div>
              </div>
            </section>
            <ImgSlider
              imgArr={imgArr}
              wantsNav={false}
              preferredEffect="cube"
            />
          </section>
        </section>
        <section
          id="about"
          className="md:pt-[113px] pt-[70px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto"
        >
          <div className="md:w-[49%] border border-[#0673EF] md:border-0 rounded-[24px] md:rounded-none p-[20px] md:p-0">
            <h3
              className="md:mb-[16px] text-center md:textl
             mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]"
            >
              About Us
            </h3>
            <p className="text-[#666481] text-center md:text-left wow fadeIn text-[16px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              Women in Defi is a non-profit organization dedicated to promoting
              knowledge and empowerment among women in the areas of Blockchain
              Technology and Decentralized Finance. Our fundamental approach is
              to provide our community members with high-quality mentorship that
              focuses on their individual areas of expertise within the
              Blockchain Technology domain.
            </p>
          </div>
          <figure className="relative bg-no-repeat bg-[url('/images/frame-q-13.png')] bg-cover bg-center wow fadeIn h-[491px] rounded-[24px] md:rounded-[100px] overflow-hidden md:w-[45%] max-w-[540px]"></figure>
        </section>
        <section className="flex flex-col py-[46px] md:py-0 md:flex-row gap-[24px] max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <div className="md:p-[32px] py-[32px] px-[16px] h-fit bg-[#FCFFF9] flex-1">
            <h4 className="text-[#110138] text-center md:text-left leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[24px] md:text-[32px]">
              Mission
            </h4>
            <p className="text-[#666481] wow fadeIn text-center md:text-left text-[16px] font-[400] leading-[30px] md:leading-[42px]">
              We envision a thriving, inclusive community of women in the
              Blockchain space, where diverse talents and perspective converge
              to revolutionize the Web3 landscape. <br />
              Through mentorship, education, and collaboration, we strive to
              break down barriers, fostering innovation and leading the way
              towards a more equitable digital future.
            </p>
          </div>
          <div className="md:p-[32px] py-[32px] px-[16px] bg-[#F9F9FF] flex-1">
            <h4 className="text-[#110138] text-center md:text-left leading-[42px] wow fadeInDown mb-[16px] font-[500] text-[24px] md:text-[32px]">
              Vision
            </h4>
            <p className="text-[#666481] text-center md:text-left wow fadeIn text-[16px] font-[400] leading-[30px] md:leading-[42px]">
              We aim to educate 2,000,000 girls and women about blockchain
              technology, fostering understanding, creating opportunities, and
              nurturing future leaders in the blockchain space.
            </p>
          </div>
        </section>
        <section className="bg-[#0673EF] pt-[55px] md:pt-[86px] pb-[69px]">
          <div className="max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
            <div className="flex wow fadeIn mb-[32px] md:mb-[56px] items-center leading-[42px] text-white">
              <h3 className="mr-[8px] text-[24px] md:text-[32px] font-[600]">
                Core Values
              </h3>
              🥳
            </div>
            <div className="md:mb-[32px] mb-[16px] flex flex-wrap md:flex-nowrap gap-[16px] md:gap-[50px]">
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Advocacy
              </button>
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Empathy
              </button>
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Sustainability
              </button>
              <button className="p-[10px] wow fadeInDown border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Support
              </button>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-[16px] md:gap-[50px]">
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Empowerment
              </button>
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Inclusivity
              </button>
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Education
              </button>
              <button className="p-[10px] wow fadeInUp border-[#FFFFFFCC] border text-[#FFFFFFCC] text-[18px] md:text-[24px] font-[500] leading-[42px] rounded-[16px]">
                Collaboration
              </button>
            </div>
          </div>
        </section>
        <section className="py-[81px]">
          <h3 className="md:w-[35%] w-[90%] mb-[68px] text-[#110138] md:text-[40px] text-[24px] font-[600] leading-[40px] md:leading-[60px] text-center mx-auto">
            Our Approach To Making A Difference
          </h3>
          <div className="grid w-fit md:gap-x-[60px] grid-cols-1 mx-auto mb-[28px] space-y-[28px] md:space-y-0 md:mb-[51px] md:grid-cols-2">
            <div className="md:w-[474px] mx-auto w-[90%] relative overflow-hidden pt-[300px]">
              <div className="w-full absolute overflow-hidden top-0 h-[485px] rounded-[24px]">
                <figure className="relative bg-no-repeat bg-[url('/images/making-a-diff-1.png')] bg-cover bg-center h-full w-full"></figure>
              </div>
              <div className="p-[20px] relative z-[2] rounded-[24px] border border-[#0673EF] bg-white">
                <h4 className="mb-[16px] text-[22px] font-[600] text-[#110138]">
                  EDUCATION
                </h4>
                <p className="mb-[32px] text-[#666481] leading-[30px] font-[400] text-[16px]">
                  Embark on or enhance your Web3 journey by joining our academy
                  programs, including Defi training and Skill Up Program, under
                  the guidance of seasoned mentors.
                </p>
                <div className="ml-auto w-fit">
                  <Link href="/programs">
                    <button className="py-[20px] text-[#0673EF] font-[500] md:text-[18px] text-[16px] hover:no-underline items-center underline flex">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M9.40997 20.4201L15.93 13.9001C16.7 13.1301 16.7 11.8701 15.93 11.1001L9.40997 4.58008"
                          stroke="#0673EF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-[474px] mx-auto w-[90%] relative overflow-hidden pt-[300px]">
              <div className="w-full absolute overflow-hidden top-0 h-[485px] rounded-[24px]">
                <figure className="relative bg-no-repeat bg-[url('/images/making-a-diff-2.png')] bg-cover bg-center h-full w-full"></figure>
              </div>
              <div className="p-[20px] relative z-[2] rounded-[24px] border border-[#0673EF] bg-white">
                <h4 className="mb-[16px] text-[22px] font-[600] text-[#110138]">
                  EVENTS
                </h4>
                <p className="mb-[32px] text-[#666481] leading-[30px] font-[400] text-[16px]">
                  Join us for a range of events, both online and in-person,
                  which may include Twitter spaces, webinars, Codes, Charts and
                  Cocktails, and many others.
                </p>
                <div className="ml-auto w-fit">
                  <Link href="/events">
                    <button className="py-[20px] text-[#0673EF] font-[500] md:text-[18px] text-[16px] hover:no-underline items-center underline flex">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M9.40997 20.4201L15.93 13.9001C16.7 13.1301 16.7 11.8701 15.93 11.1001L9.40997 4.58008"
                          stroke="#0673EF"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[474px] w-[90%] mx-auto relative overflow-hidden pt-[300px]">
            <div className="w-full absolute overflow-hidden top-0 h-[485px] rounded-[24px]">
              <figure className="relative bg-no-repeat bg-[url('/images/making-a-diff-3.png')] bg-cover bg-center h-full w-full"></figure>
            </div>
            <div className="p-[20px] relative z-[2] rounded-[24px] border border-[#0673EF] bg-white">
              <h4 className="mb-[16px] text-[22px] font-[600] text-[#110138]">
                CHAPTERS
              </h4>
              <p className="mb-[32px] text-[#666481] leading-[30px] font-[400] text-[16px]">
                Join our community and engage with over 3000+ fellow African
                women in the Web3 space, hailing from various corners of the
                continent.
              </p>
              <div className="ml-auto w-fit">
                <Link href="/chapters">
                  <button className="py-[20px] text-[#0673EF] font-[500] md:text-[18px] text-[16px] hover:no-underline items-center underline flex">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M9.40997 20.4201L15.93 13.9001C16.7 13.1301 16.7 11.8701 15.93 11.1001L9.40997 4.58008"
                        stroke="#0673EF"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CountDown />
        <section className="md:pt-[113px] pt-[40px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col-reverse md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <figure className="relative bg-no-repeat bg-[url('/images/patner-img.png')] bg-cover bg-center wow fadeIn rounded-[24px] overflow-hidden md:rounded-[100px] h-[491px] md:w-[45%] max-w-[540px]"></figure>
          <div className="md:w-[49%] border border-[#0673EF] md:border-0 rounded-[24px] md:rounded-none p-[20px] md:p-0">
            <h3 className="md:mb-[16px] mb-[10px] md:text-left wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              Embracing Partnerships and Collaborations
            </h3>
            <p className="text-[#666481] md:text-left wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              Actively looking forward to embracing partners and corporations
              who concur with our vision and are willing to impact lives.
            </p>
            <a href="mailto:partnership@womenindefi.org?subject=Partnership Request with WID">
              <button className="btn-generic wow fadeIn">
                Partner With Us
              </button>
            </a>
          </div>
        </section>
        <section className="md:py-[62px] py-[36px] bg-[#0673EF]">
          <h3 className="font-[600] leading-[52px] wow fadeInDown text-[24px] md:text-[32px] text-white text-center mb-[24px] md:mb-[40px]">
            Partners
          </h3>
          <div className="overflow-x-auto">
            <div className="flex fadeIn wow md:w-fit w-max items-center md:justify-between gap-[24px] md:gap-[60px] md:mx-auto">
              <figure className="md:w-[194px] w-[200px] h-[24px] md:h-[55px] relative">
                <Image src="/images/metaschool.png" alt="patner-img" fill />
              </figure>
              <figure className="md:w-[194px] w-[85px] h-[24px] md:h-[55px] relative">
                <Image src="/images/propel.png" alt="patner-img" fill />
              </figure>
              <figure className="md:w-[185px] w-[130px] h-[40px] md:h-[58px] relative">
                <Image src="/images/tma.png" alt="patner-img" fill />
              </figure>
              <figure className="md:w-[71px] w-[45px] md:h-[71px] h-[45px] relative">
                <Image src="/images/rethinkable.png" alt="patner-img" fill />
              </figure>
            </div>
          </div>
        </section>
        <section className="md:pt-[113px] pt-[40px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
          <div className="md:w-[49%] border border-[#0673EF] md:border-0 rounded-[24px] md:rounded-none p-[20px] md:p-0">
            <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
              Supporting The Women-In-Defi Cause
            </h3>
            <p className="text-[#666481] wow fadeIn text-[16px] mb-[32px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
              Help sponsor our events and initiatives to empower more African
              women in Blockchain Technology via a donation or more. This
              donation will go a long way supporting our numerous initiatives
              and facilitating our events and programs across our several
              chapters.
            </p>
            <Link href="/donation#donation-tab">
              <button className="btn-trans wow fadeIn">Donate Now</button>
            </Link>
          </div>
          <figure className="relative bg-no-repeat bg-[url('/images/support.png')] bg-cover bg-center wow fadeIn rounded-[24px] overflow-hidden md:rounded-[100px] h-[491px] md:w-[45%] max-w-[540px]"></figure>
        </section>
        <Testimonial />
        <section className="md:pt-[54px] max-w-[1272px] md:w-[85%] w-[90%] mx-auto pt-[30px]">
          <h3 className="md:text-[40px] text-[24px] text-center mb-[16px] font-[600] text-[#110138]">
            Picture Stories
          </h3>
          <p className="text-center mx-auto md:w-[35%] w-[90%] mb-[74px] text-[#666481] text-[18px] font-[400] leading-[26px]">
            View some of our amazing events and the amazing moments
          </p>
          <div className="flex flex-col md:flex-row  gap-[16px] justify-between mb-[59px] w-[90%] mx-auto">
            <figure className="relative bg-no-repeat bg-[url('/images/picture-stories-2.png')] bg-cover bg-center md:w-[30%] h-[452px] rounded-[16px] overflow-hidden"></figure>
            <figure className="relative bg-no-repeat bg-[url('/images/picture-stories-1.png')] bg-cover bg-center md:w-[30%] h-[452px] rounded-[16px] overflow-hidden"></figure>
            <figure className="relative bg-no-repeat bg-[url('/images/ccc-cr-6.png')] bg-cover bg-center md:w-[30%] h-[452px] rounded-[16px] overflow-hidden"></figure>
          </div>
          <div className="w-[90%] mx-auto">
            <div className="ml-auto w-fit">
              <a
                href="https://drive.google.com/drive/folders/1oglXz-N4YJRUwSpGSwvTF2HfZ80SaV0i"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-trans flex items-center">
                  View More Pictures
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M8.91003 20.4201L15.43 13.9001C16.2 13.1301 16.2 11.8701 15.43 11.1001L8.91003 4.58008"
                      stroke="#0673EF"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* <Connect /> */}
      </main>
    </>
  );
};

export default Homepage;
