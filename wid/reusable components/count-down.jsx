import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const CountDown = () => {
    const [hydrationState, setHyState] = useState(false)
  return (
    <section className="bg-[#0673EF] text-white py-[38px]">
        <div className="max-w-[1272px] flex items-center w-[85%] gap-[32px] mx-auto">
            <h2 className="font-[600] text-[40px] leading-[52px] pr-[100px] border-r border-[#FFFFFF36] py-[16px]">
                Our <br />
                Reach So <br />
                Far
            </h2>
            <ScrollTrigger className="flex-1 justify-between flex" onEnter={()=> setHyState(true)} onExit={()=> setHyState(false)}>
                <div className="">
                    <p className="font-[600] text-[40px] leading-[52px] mb-[8px]">
                        {hydrationState == true ? <CountUp start={0} end={7} /> : "0"}
                    </p>
                    <span className="text-[20px] font-[500]">
                        Defi <br />
                        Cohorts
                    </span>
                </div>
                <div className="">
                    <p className="font-[600] text-[40px] leading-[52px] mb-[8px]">
                        {hydrationState == true ? <CountUp start={0} end={3000} /> : "0"}+
                    </p>
                    <span className="text-[20px] font-[500]">
                        Community <br />
                        Members
                    </span>
                </div>
                <div className="">
                    <p className="font-[600] text-[40px] leading-[52px] mb-[8px]">
                        {hydrationState == true ? <CountUp start={0} end={3} /> : "0"}+
                    </p>
                    <span className="text-[20px] font-[500]">
                        Physical Events <br />
                        Hosted
                    </span>
                </div>
                <div className="">
                    <p className="font-[600] text-[40px] leading-[52px] mb-[8px]">
                        {hydrationState == true ? <CountUp start={0} end={16} /> : "0"}+
                    </p>
                    <span className="text-[20px] font-[500]">
                        Chapter <br />
                        Locations
                    </span>
                </div>
            </ScrollTrigger>
        </div>
    </section>
  )
}

export default CountDown
