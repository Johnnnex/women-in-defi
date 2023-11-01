import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const EventsModal = ({modalState}) => {
    const { push } = useRouter()
    const removeModal = () => {
        const currLcn = new URL(window.location)
        currLcn.searchParams.delete("event")
        push(currLcn)
    }
  return (
    <section className={`fixed ${ modalState == false ? "scale-0 invisible" : ""} transition-[.4s] z-[2] top-0 left-0 bg-[#00000056] w-full h-[100vh]`}>
        <div className="md:w-[50%] w-[90%] text-center mx-auto relative max-w-[609px] rounded-[16px] bg-[#FBFBFD] py-[100px] px-[16px] md:px-[32px] mt-[15vh]">
            <button onClick={removeModal} className="absolute right-[5%] top-[1rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.4099 12L17.7099 7.71C17.8982 7.5217 18.004 7.2663 18.004 7C18.004 6.7337 17.8982 6.47831 17.7099 6.29C17.5216 6.1017 17.2662 5.99591 16.9999 5.99591C16.7336 5.99591 16.4782 6.1017 16.2899 6.29L11.9999 10.59L7.70994 6.29C7.52164 6.1017 7.26624 5.99591 6.99994 5.99591C6.73364 5.99591 6.47824 6.1017 6.28994 6.29C6.10164 6.47831 5.99585 6.7337 5.99585 7C5.99585 7.2663 6.10164 7.5217 6.28994 7.71L10.5899 12L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50637 17.8781 7.61698 17.8037 7.70994 17.71L11.9999 13.41L16.2899 17.71C16.3829 17.8037 16.4935 17.8781 16.6154 17.9289C16.7372 17.9797 16.8679 18.0058 16.9999 18.0058C17.132 18.0058 17.2627 17.9797 17.3845 17.9289C17.5064 17.8781 17.617 17.8037 17.7099 17.71C17.8037 17.617 17.8781 17.5064 17.9288 17.3846C17.9796 17.2627 18.0057 17.132 18.0057 17C18.0057 16.868 17.9796 16.7373 17.9288 16.6154C17.8781 16.4936 17.8037 16.383 17.7099 16.29L13.4099 12Z" fill="#666481"/>
                </svg>
            </button>
            <Image src="/images/no-event-img.svg" className="w-fit mx-auto" alt="no-event-img" height={1} width={100}/>
            <h4 className="mt-[24px] text-[18px] font-[700] md:text-[24px] mb-[16px]">Oops!</h4>
            <p className="md:text-[16px] text-[15px] font-[500] leading-[20px]">
                We currently do not have any upcoming events, but not to worry you can check back soon.
            </p>
        </div>
    </section>
  )
}

export default EventsModal
