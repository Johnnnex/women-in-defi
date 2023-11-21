import React from 'react'
import AttendEvent from '@/reusable components/attend-an-event'
import HeadComp from '@/layout/HeadComp'
import EventCard from '@/reusable components/events-toggle'
import Connect from '@/reusable components/connect-w-us'

const Events = () => {
  return (
    <>
      <HeadComp title="Women In DeFi || Events" />
      <main className="">
        <section className="md:pt-[40px] hero pt-[90px]">
          <AttendEvent />
        </section>
        <section className="py-[54px] bg-white">
          <h3 className="text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[52px] text-center mb-[16px]">Previous Events</h3>
          <p className="md:leading-[26px] leading-[30px] md:w-[30%] w-[90%] mx-auto font-[400] text-[16px] md:text-[18px] text-[#666481] text-center mb-[24px] md:mb-[57px]">View some of our amazing events and the amazing moments</p>
          <EventCard />
          <div className="w-[90%] mt-[58px] mx-auto">
            <div className="ml-auto w-fit">
              <button className="btn-trans flex items-center">
                View More Pictures
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M8.91003 20.4201L15.43 13.9001C16.2 13.1301 16.2 11.8701 15.43 11.1001L8.91003 4.58008" stroke="#0673EF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>
        {/* <Connect /> */}
      </main>
    </>
  )
}

export default Events
