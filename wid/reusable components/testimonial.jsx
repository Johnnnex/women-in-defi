import React, { useMemo, useState } from 'react'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState({
        one : false,
        two : false,
        three : false,
        four : false,
        five : false,
        six : false,
        seven : false,
        eight : false,
        nine : false,
        ten : false,
    })
    const toggleVisibility = useMemo((val) => {
        switch(val) {
            case "one" :
                setTestimonials({
                    one: true,
                    two: false,
                    three: false,
                    four: false,
                    five: false,
                    six: false,
                    seven: false,
                    eight: false,
                    nine: false,
                    ten: false
                })
                break
            case "two" :
                setTestimonials({
                    one: false,
                    two: true,
                    three: false,
                    four: false,
                    five: false,
                    six: false,
                    seven: false,
                    eight: false,
                    nine: false,
                    ten: false
                })
                break
            case "three" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: true,
                    four: false,
                    five: false,
                    six: false,
                    seven: false,
                    eight: false,
                    nine: false,
                    ten: false
                })
            case "four" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: false,
                    four: true,
                    five: false,
                    six: false,
                    seven: false,
                    eight: false,
                    nine: false,
                    ten: false
                })
                break
            case "five" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: true,
                    six: false,
                    seven: false,
                    eight: false,
                    nine: false,
                    ten: false
                })
                break
            case "six" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: false,
                    six: true,
                    seven: false,
                    eight: false,
                    nine: false,
                    ten: false
                })
                break
            case "seven" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: false,
                    six: false,
                    seven: true,
                    eight: false,
                    nine: false,
                    ten: false
                })
                break
            case "eight" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: false,
                    six: false,
                    seven: false,
                    eight: true,
                    nine: false,
                    ten: false
                })
                break
            case "nine" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: false,
                    six: false,
                    seven: false,
                    eight: false,
                    nine: true,
                    ten: false
                })
                break
            case "ten" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: false,
                    six: false,
                    seven: false,
                    eight: false,
                    nine: false,
                    ten: true
                })
                break
        }
    }, [])
  return (
    <section className="pt-[40px]">
        <h3 className="text-[32px] font-[600] mb-[16px] text-center leading-[42px]">
        WID <span className="text-[#0673EF]">Chapters</span>
        </h3>
        <p className="text-[#666481] text-[18px] font-[400] text-center mb-[40px]">Ready to become a Blockchain Baddie? Join a WID chapter in your region </p>
        <section className="w-[54%] max-w-[819px] mx-auto py-[40px] px-[20px]">
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Lagos State Chapter</h5>
                <button onClick={()=> toggleVisibility("one")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]">https://linktr.ee/widcrs</p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Edo State Chapter</h5>
                <button onClick={()=> toggleVisibility("two")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Akwa Ibom Chapter</h5>
                <button onClick={()=> toggleVisibility("three")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Rivers State Chapter</h5>
                <button onClick={()=> toggleVisibility("four")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Abuja State Chapter </h5>
                <button onClick={()=> toggleVisibility("five")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Ebonyi State Chapter</h5>
                <button onClick={()=> toggleVisibility("six")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Ogun State Chapter</h5>
                <button onClick={()=> toggleVisibility("seven")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Oyo State Chapter</h5>
                <button onClick={()=> toggleVisibility("eight")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481] mb-[24px]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Plateau State Chapter</h5>
                <button onClick={()=> toggleVisibility("nine")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        <div className="border py-[10px] px-[20px] rounded-[8px] border-[#666481]">
            <div className="flex justify-between items-center">
                <h5 className="text-[#110138] text-[24px] font-[500]">WID Anambra State Chapter</h5>
                <button onClick={()=> toggleVisibility("ten")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                    </svg>
                </button>
            </div>
            <p className="text-[#110138] text-[16px] font-[400] pt-[16px]"></p>
        </div>
        </section>
    </section>
  )
}

export default Testimonial
