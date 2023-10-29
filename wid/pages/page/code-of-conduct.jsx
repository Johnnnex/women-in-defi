import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'

const CodeOfConduct = () => {
  return (
    <>
        <HeadComp title="Women In DeFi || Code Of Conduct" />
        <main className="max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
            <figure className="w-full h-[673px] rounded-[8px] overflow-hidden relative">
                <Image
                    fill
                    alt="code-of-conduct-image"
                    src="/images/code-of-conduct.jpeg"
                />
            </figure>
        </main>
    </>
  )
}

export default CodeOfConduct
