import React from 'react'
import Image from 'next/image'
import TestimonialMobile from './testimonial-mobile'

const Testimonial = () => {
  return (
        <section className="pt-[98px] pb-[92px] max-w-[1272px] w-[85%] mx-auto">
          <h3 className="md:text-[32px] text-[24px] wow fadeInDown font-[600] mb-[60px] text-center leading-[42px]">
            What WID <span className="text-[#0673EF]">Baddies</span> are Saying About Us
          </h3>
          <section className="md:block hidden">
            <div className="flex gap-[24px]">
              <div className="wow fadeIn flex-1">
                <div className="p-[18px] mb-[40px] bg-[#F9F9FF] rounded-[16px] h-fit">
                  <p className="mb-[24px] text-[#666481] text-[18px] font-[400]">
                    WID changed my view about blockchain and crypto. A community blessed with great tutors that are patient in explaining and carrying their students along. My Defi journey has been a great one. It all started with #WID
                  </p>
                  <div className="flex gap-[8px] flex-col">
                      <Image src="/images/img-q-7.png" className="rounded-[50%]" alt="testimonial_avatar" height={1} width={50} />
                      <p className="font-[500]">
                        Nemi James
                      </p>
                  </div>
                </div>
                <div className="p-[18px] bg-[#F9F9FF] rounded-[16px] h-fit">
                  <p className="mb-[24px] text-[#666481] text-[18px] font-[400]">
                    Determination and WID TEAM are synonymous. Honestly, there&apos;s a lot to say about WOMEN IN DEFI (WID) Community, the massive love the cooperation, and the active tutors are just what anyone can&apos;t get elsewhere. I came in with Zero knowledge but today i can say am Good with What i Do. Defi is the future, joining a good community is the way forward.  <br />
                    Thank you Miss Sarah for all the hard work you have put in place for the smooth running of the community.
                  </p>
                  <div className="flex gap-[8px] flex-col">
                    <Image src="/images/img-q-1.png" className="rounded-[50%]" alt="testimonial_avatar" height={1} width={50} />
                    <p className="font-[500]">
                      Thompson Dora
                    </p>
                  </div>
                </div>
              </div>
              <div className="wow fadeIn flex-1">
                  <div className="p-[18px] mb-[40px] bg-[#F9F9FF] rounded-[16px] h-fit">
                      <p className="mb-[24px] text-[#666481] text-[18px] font-[400]">
                        Joining women in Defi was actually one of my best gift the lord gave me the year 2022. It changed my life and made me meet a lot of important people that i could call sisters. They really make the community look like family. I am grateful for having the best tutors also.
                      </p>
                      <div className="flex gap-[8px] flex-col">
                        <Image src="/images/img-q-2.png" className="rounded-[50%]" alt="testimonial_avatar" height={1} width={50} />
                        <p className="font-[500]">
                          Swizzabane Mide
                        </p>
                      </div>
                  </div>
                  <div className="p-[18px] bg-[#F9F9FF] rounded-[16px] h-fit">
                      <p className="mb-[24px] text-[#666481] text-[18px] font-[400]">
                        I was onboarded into the web3 space by the WID community in April this year; that was the best thing that happened to me.
                        Before now, I had no knowledge of what web3 is or what the decentralized space is all about. <br />
                        The only knowledge I had on crypto then was buying low and selling high 😅 <br />
                        A big thank you to the founder of WomenInDefi and the core team members, WID was a game changer for me. Today, I&apos;m an ardent believer in Decentralized Finance
                      </p>
                      <div className="flex gap-[8px] flex-col">
                        <Image src="/images/img-q-2.png" className="rounded-[50%]" alt="testimonial_avatar" height={1} width={50} />
                        <p className="font-[500]">
                          Vivian Adeniyi
                        </p>
                      </div>
                  </div>
              </div>
              <div className="wow fadeIn flex-1">
                  <div className="p-[18px] mb-[40px] bg-[#F9F9FF] rounded-[16px] h-fit">
                      <p className="mb-[24px] text-[#666481] text-[18px] font-[400]">
                        The WID team has not only taught me about Defi but also help me stand my feet in the decentralized finance space through the process of close watch and constant follow-up even after the class. After the class, i have been able to get jobs that have given me funds to get gadgets to improve my tech journey, funds to process admission, and also my upkeep. A big thanks to the team for also reaching out and helping.
                      </p>
                      <div className="flex gap-[8px] flex-col">
                        <Image src="/images/img-q-4.png" className="rounded-[50%]" alt="testimonial_avatar" height={1} width={50} />
                        <p className="font-[500]">
                          Lady Benny
                        </p>
                      </div>
                  </div>
                  <div className="p-[18px] bg-[#F9F9FF] rounded-[16px] h-fit">
                      <p className="mb-[24px] text-[#666481] text-[18px] font-[400]">
                        WID was the start of my defi journey and the start of my millionaire journey. I discovered so many opportunities that i can leverage to make myself financially stable in the defi space. The biggest motivation is the fact that i&apos;m taught by women who have broken records, which gives me the inspiration to do more. Then being part of a community that looks out for you can&apos;t be overemphasized as it speeds up my growth.
                      </p>
                      <div className="flex gap-[8px] flex-col">
                        <Image src="/images/img-q-5.png" className="rounded-[50%]" alt="testimonial_avatar" height={1} width={50} />
                        <p className="font-[500]">
                          Uwadimma Christabel
                        </p>
                      </div>
                  </div>
              </div>
            </div>
          </section>
          <TestimonialMobile />
        </section>
  )
}

export default Testimonial
