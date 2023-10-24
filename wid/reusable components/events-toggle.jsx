import React, { useState } from 'react'
import Image from 'next/image'

const EventCard = () => {
    const [ events, setEventState ] = useState("one")
  return (
    <section className="max-w-[1272px] w-[85%] mx-auto">
        <div className="flex p-[10px] mb-[57px] rounded-[200px] justify-between bg-[#F9F9FF]">
            <button onClick={() => setEventState("one")} className={`px-[32px] ${events == "one" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Codes Charts and Cocktails Edo 2022</button>
            <button onClick={() => setEventState("two")} className={`px-[32px] ${events == "two" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>International Women&apos;s Day  Celebration 2023</button>
            <button onClick={() => setEventState("three")} className={`px-[32px] ${events == "three" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Codes Charts and Cocktails 2023</button>
        </div>
        <section className={`grid ${events != "one" ? "hidden" : ""} grid-cols-3 gap-y-[16px] gap-x-[24px]`}>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/frame-6.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/frame-5.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/frame-4.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/frame-3.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/frame-2.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/frame-1.png"
                    alt="event_images"
                    fill
                />
            </div>
        </section>
        <section className={`grid ${events != "two" ? "hidden" : ""} grid-cols-3 gap-y-[16px] gap-x-[24px]`}>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/wid-event-1.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/wid-event-2.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/wid-event-3.png"
                    alt="event_images"
                    fill
                />
            </div>
        </section>
        <section className={`grid ${events != "three" ? "hidden" : ""} grid-cols-3 gap-y-[16px] gap-x-[24px]`}>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/ccc-6.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/ccc-5.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/ccc-4.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/ccc-3.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/ccc-2.png"
                    alt="event_images"
                    fill
                />
            </div>
            <div className="w-full relative h-[452px]">
                <Image 
                    src="/images/ccc-1.png"
                    alt="event_images"
                    fill
                />
            </div>
        </section>
    </section>
  )
}

export default EventCard
