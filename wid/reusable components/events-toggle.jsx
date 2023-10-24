import React from 'react'
import Image from 'next/image'

const EventCard = () => {
  return (
    <section className="max-w-[1272px] w-[85%] mx-auto">
        <div className="flex p-[10px] mb-[57px] rounded-[200px] justify-between bg-[#F9F9FF]">
            <button className="px-[32px] py-[16px] text-[#110138] leading-[24px] font-[500] bg-white bx-shadw rounded-[200px]">Codes Charts and Cocktails Edo 2022</button>
            <button className="px-[32px] text-[#666481] leading-[24px] font-[400] py-[16px]">International Women’s Day  Celebration 2023</button>
            <button className="px-[32px] text-[#666481] leading-[24px] font-[400] py-[16px]">Codes Charts and Cocktails 2023</button>
        </div>
        <section className="grid grid-cols-3 gap-y-[16px] gap-x-[24px]">
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
    </section>
  )
}

export default EventCard
