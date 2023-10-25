import React, { useState } from 'react'
import Image from 'next/image'

const ProgramToggle = () => {
    const [ events, setEventState ] = useState("one")
    return (
      <section className="max-w-[1272px] pt-[67px] pb-[110px] w-[85%] mx-auto">
          <div className="flex p-[10px] w-fit mx-auto mb-[57px] rounded-[200px] justify-between bg-[#F9F9FF]">
              <button onClick={() => setEventState("one")} className={`px-[32px] ${events == "one" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Defi Academy</button>
              <button onClick={() => setEventState("two")} className={`px-[32px] ${events == "two" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Skill Up Program</button>
          </div>
          <section className={`${events != "one" ? "hidden" : ""}`}>
            <h3 className="text-[#110138] font-[500] text-[32px] text-center leading-[52px] mb-[16px]">DeFi Academy</h3>
            <p className="w-[60%] text-[#666481] text-[18px] font-[400] leading-[28px] text-center mx-auto">
                Our DeFi training comprises a three-month cohort-based program aimed at instilling fundamental principles of decentralized finance, ranging from foundational to advanced levels. It is a mandatory training for all community members, as it serves as an introduction to blockchain technology before participants proceed to select their specialized focus.
            </p>
          </section>
          <section className={`${events != "two" ? "hidden" : ""}`}>
            <h3 className="text-[#110138] font-[500] text-[32px] text-center leading-[52px] mb-[16px]">Skill Up</h3>
            <p className="w-[60%] text-[#666481] text-[18px] font-[400] mb-[116px] leading-[28px] text-center mx-auto">
                The "WID Skill Up Program" is an all-encompassing educational initiative, tailored to equip women with the knowledge and skills needed to thrive in the Web3 technology landscape. Our program offers a unique opportunity to not only acquire essential technical skills but also to harness blockchain and DeFi to address pressing socio-economic challenges across Africa. The program highlights fields such as: Smart Contract Development, Product Design, Product Management, and Token Economics.
            </p>
            <h4 className="text-[#110138] font-[500] text-[32px] text-center leading-[52px] mb-[16px]">Past Cohort</h4>
            <p className="w-[60%] text-[#666481] text-[18px] font-[400] mb-[40px] leading-[28px] text-center mx-auto">
                View our past skill up cohort
            </p>
            <div className={`grid grid-cols-3 gap-x-[16px]`}>
                <div className="w-full relative h-[452px]">
                    <Image 
                        src="/images/cohort-1.png"
                        alt="cohort_images"
                        fill
                    />
                </div>
                <div className="w-full relative h-[452px]">
                    <Image 
                        src="/images/cohort-2.png"
                        alt="cohort_images"
                        fill
                    />
                </div>
                <div className="w-full relative h-[452px]">
                    <Image 
                        src="/images/cohort-3.png"
                        alt="cohort_images"
                        fill
                    />
                </div>
            </div>
          </section>
      </section>
    )
}

export default ProgramToggle
