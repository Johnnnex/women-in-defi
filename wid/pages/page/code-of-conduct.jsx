import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'
import Link from 'next/link'

const CodeOfConduct = () => {
  return (
    <>
        <HeadComp title="Women In DeFi || Code Of Conduct" />
        <main className="max-w-[1272px] pt-[113px] md:w-[85%] w-[90%] mx-auto">
            <figure className="w-full h-[200px] md:h-[673px] mb-[40px] rounded-[8px] overflow-hidden relative">
                <Image
                    fill
                    alt="code-of-conduct-image"
                    src="/images/code-of-conduct.png"
                    priority
                />
            </figure>
            <Link className="text-[#0673EF] hover:underline" href="/page/donation">Back</Link>
            <h3 className="text-black font-[600] text-[24px] md:text-[40px] leading-[30px] md:leading-[52px] mb-[24px] md:mb-[40px]">Code of Conduct for Women In DeFi Community</h3>
            <article className="">
              <ol className="list-inside list-decimal">
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Respect and Inclusion</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  We value and respect every member&apos;s voice, regardless of background, experience, or expertise. We commit to creating an inclusive environment where everyone feels heard and valued.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Harassment-Free Zone</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Harassment, discrimination, or any form of intimidation will not be tolerated. This includes but is not limited to offensive language, unwelcome advances, or any behavior that creates discomfort or fear.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Constructive Communication</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  We encourage open and constructive dialogue. Disagreements should be addressed respectfully, focusing on ideas rather than personal attacks.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Privacy and Confidentiality</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Respect members&apos; privacy and do not share personal information without explicit consent. Any information shared within the community should be treated confidentially.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Professionalism</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Maintain a high level of professionalism in all interactions, both within the community and in any external representation of the organization.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Intellectual Property</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Respect copyright and intellectual property rights. Give proper credit and seek permission when using or referencing others&apos; work.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Compliance with Applicable Laws</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Members are expected to comply with all local, national, and international laws and regulations while participating in the community
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">No Solicitation or Spam</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Avoid unsolicited promotion or spamming of products, services, or events. Self-promotion should be relevant and appropriate.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Reporting Violations</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  If you witness or experience any behavior that violates this code of conduct, please report it promptly to the designated community moderators or administrators. You can also reach out to us via mail.
                </p>
                <li className="text-[#0673EF] text-[18px] md:text-[24px] font-[500] leading-[30px] mb-[16px]">Enforcement of the Code</li>
                <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Violation of this code may result in warnings, temporary suspension, or, in severe cases, permanent expulsion from the community. <br />
                  By participating in this community, you agree to abide by this Code of Conduct. We are committed to providing a safe and empowering space for all members. Together, we can build a stronger and more inclusive blockchain ecosystem.
                </p>
              </ol>
            </article>
            <div className="text-[16px] md:text-[18px] mb-[40px] font-[400] text-[#666481]">
              <p>Date: 25th September, 2023</p>
              <p> Signed: Sarah Idahosa</p>
              <p>Founder, Women In DeFi Foundation</p>
            </div>
        </main>
    </>
  )
}

export default CodeOfConduct
