import React from 'react'

const Connect = () => {
  return (
    <section className="text-white py-[100px] bg-[#0673EF]">
        <h3 className="text-[32px] font-[600] text-center mb-[16px]">Connect with Us</h3>
        <p className="text-[16px] text-center max-w-[455px] mb-[40px] w-[40%] mx-auto font-[400] leading-[24px]">Subscribe to monthly newsletter and stay updated on major developments about Women in Defi.</p>
        <div className="flex h-[56px] w-[40%] max-w-[455px] mx-auto">
            <input 
                type="text" 
                className="h-full flex-1 outline-none bg-transparent border-[#FFFFFF] border border-r-0 px-[10px] py-[16px] rounded-[4px] rounded-r-none text-[16px] font-[400] leading-[24px]" 
                placeholder="example@gmail.com"
            />
            <button className="h-full text-[#0673EF] w-[30%] max-w-[154px] text-[16px] font-[400] leading-[24px] bg-[#FFFBFB] rounded-[4px] px-[10px] py-[16px]">Subscribe</button>
        </div>
    </section>
  )
}

export default Connect
