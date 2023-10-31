import React from 'react'
import AttendEvent from '@/reusable components/attend-an-event'
import HeadComp from '@/layout/HeadComp'
import EventCard from '@/reusable components/events-toggle'
import Connect from '@/reusable components/connect-w-us'

const Events = () => {
  return (
    <>
      <HeadComp title="Women In DeFi || Events" />
      <main className="pt-[40px]">
        <AttendEvent />
        <section className="py-[54px] bg-white">
          <h3 className="text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[52px] text-center mb-[16px]">Previous Events</h3>
          <p className="md:leading-[26px] leading-[30px] md:w-[30%] w-[90%] mx-auto font-[400] text-[16px] md:text-[18px] text-[#666481] text-center mb-[24px] md:mb-[57px]">View some of our amazing events and the amazing moments</p>
          <EventCard />
        </section>
        {/* <Connect /> */}
      </main>
    </>
  )
}

export default Events
