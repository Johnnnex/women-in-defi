import React from 'react'
import { useState } from 'react'

const DonationModal = ({removeModal, modalState}) => {
    const [events, setEventState] = useState("one")
  return (
    <section className={`fixed ${ modalState == false ? "scale-0 invisible" : ""} transition-[.4s] z-[2] top-0 left-0 bg-[#00000056] w-full h-[100vh]`}>
        <div className="md:w-[50%] w-[90%] text-center mx-auto relative max-w-[609px] rounded-[16px] bg-white py-[100px] px-[16px] md:px-[32px] mt-[10vh]">
            <button onClick={removeModal} className="absolute right-[5%] top-[1rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.4099 12L17.7099 7.71C17.8982 7.5217 18.004 7.2663 18.004 7C18.004 6.7337 17.8982 6.47831 17.7099 6.29C17.5216 6.1017 17.2662 5.99591 16.9999 5.99591C16.7336 5.99591 16.4782 6.1017 16.2899 6.29L11.9999 10.59L7.70994 6.29C7.52164 6.1017 7.26624 5.99591 6.99994 5.99591C6.73364 5.99591 6.47824 6.1017 6.28994 6.29C6.10164 6.47831 5.99585 6.7337 5.99585 7C5.99585 7.2663 6.10164 7.5217 6.28994 7.71L10.5899 12L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50637 17.8781 7.61698 17.8037 7.70994 17.71L11.9999 13.41L16.2899 17.71C16.3829 17.8037 16.4935 17.8781 16.6154 17.9289C16.7372 17.9797 16.8679 18.0058 16.9999 18.0058C17.132 18.0058 17.2627 17.9797 17.3845 17.9289C17.5064 17.8781 17.617 17.8037 17.7099 17.71C17.8037 17.617 17.8781 17.5064 17.9288 17.3846C17.9796 17.2627 18.0057 17.132 18.0057 17C18.0057 16.868 17.9796 16.7373 17.9288 16.6154C17.8781 16.4936 17.8037 16.383 17.7099 16.29L13.4099 12Z" fill="#666481"/>
                </svg>
            </button>
            <h4 className="leading-[24px] mb-[16px] font-[600] text-[24px] md:text-[32px] text-black">
                Donation Option 🥳
            </h4>
            <p className="font-[400] text-[18px] mb-[32px] text-[#666481]">
                Kindly use any of the payment option to make your donation
            </p>
            <div className="flex flex-col md:flex-row p-[10px] w-full md:w-fit mx-auto mb-[32px] rounded-[20px] md:rounded-[200px] justify-between bg-[#F9F9FF]">
                <button onClick={() => setEventState("one")} className={`px-[32px] ${events == "one" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Via Transfer</button>
                <button onClick={() => setEventState("two")} className={`px-[32px] ${events == "two" ? "text-[#110138] font-[500] bg-white bx-shadw rounded-[200px]" : "font-[400] text-[#666481]"} py-[16px] leading-[24px]`}>Via Crypto</button>
            </div>
            <div className={`${events != "one" ? "hidden" : ""} `}>
                <h5 className="mb-[24px] font-[600] text-[18px] text-[#110138]">
                    Pay into this account
                </h5>
                <p className="text-center mb-[8px] text-[#666481] text-[18px] font-[400]">Moniepoint Microfinance  Bank</p>
                <p className="text-center text-[#666481] text-[18px] font-[400]">
                    <button onClick={() => navigator.clipboard.writeText("6396015119")} className="text-[#0673EF] font-[600]">6396015119</button> Women In Defi Foundation
                </p>
            </div>
            <div className={`${events != "two" ? "hidden" : ""} `}>
                <h5 className="mb-[24px] font-[600] text-[18px] text-[#110138]">
                    Make payment of USDT/USDC ERC20 & BEP20 to this address
                </h5>
                <p className="font-[600] overflow-hidden text-[18px] text-[#0673EF]">
                    <button onClick={() => navigator.clipboard.writeText("0x6cb448C4414dD9c6Aa26580CBe38EC7dDcD4A057")}>
                        0x6cb448C4414dD9c6Aa26580CBe38EC7dDcD4A057
                    </button>
                </p>
            </div>
            <small className="text-red-600">Tap on the text colored blue to copy</small>
        </div>
    </section>
  )
}

export default DonationModal
