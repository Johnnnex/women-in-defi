import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountDown = () => {
  const [hydrationState, setHyState] = useState(false);
  return (
    <section className="bg-[#0673EF] text-white py-[38px]">
      <div className="max-w-[1272px] flex flex-col md:flex-row md:items-center w-[90%] md:w-[85%] gap-[32px] mx-auto">
        <h2 className="font-[600] wow fadeInUp md:block text-[24px] md:text-[40px] md:leading-[52px] leading-[40px] md:pr-[100px] md:border-r border-[#FFFFFF36] md:py-[16px]">
          Our <br className="hidden md:block" />
          Reach So <br className="hidden md:block" />
          Far
        </h2>
        <ScrollTrigger
          className="md:flex-1 wow fadeInDown grid grid-cols-2 md:justify-between md:flex"
          onEnter={() => setHyState(true)}
          onExit={() => setHyState(false)}
        >
          <div>
            <p className="font-[600] text-[18px] md:text-[40px] leading-[52px] mb-[8px]">
              {hydrationState == true ? <CountUp start={0} end={7} /> : "0"}
            </p>
            <span className="md:text-[20px] text-[16px] font-[400] leading-[32px]">
              Defi <br />
              Cohorts
            </span>
          </div>
          <div>
            <p className="font-[600] text-[18px] md:text-[40px] leading-[52px] mb-[8px]">
              {hydrationState == true ? <CountUp start={0} end={3000} /> : "0"}+
            </p>
            <span className="md:text-[20px] text-[16px] font-[400] leading-[32px]">
              Community <br />
              Members
            </span>
          </div>
          <div>
            <p className="font-[600] text-[18px] md:text-[40px] leading-[52px] mb-[8px]">
              {hydrationState == true ? <CountUp start={0} end={3} /> : "0"}+
            </p>
            <span className="md:text-[20px] text-[16px] font-[400] leading-[32px]">
              Physical Events <br />
              Hosted
            </span>
          </div>
          <div>
            <p className="font-[600] text-[18px] md:text-[40px] leading-[52px] mb-[8px]">
              {hydrationState == true ? <CountUp start={0} end={16} /> : "0"}+
            </p>
            <span className="md:text-[20px] text-[16px] font-[400] leading-[32px]">
              Chapter <br />
              Locations
            </span>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default CountDown;
