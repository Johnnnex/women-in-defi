import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const paths = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/#about",
      text: "About Us",
    },
    {
      path: "/page/donation",
      text: "Donate",
    },
    {
      path: "/page/events",
      text: "Event",
    },
    {
      path: "/#chapters",
      text: "Chapters",
    },
    {
      path: "/page/programs",
      text: "Programs",
    },
  ]
  const links = paths.map(({path, text}) => {
    return (
      <li key={text} className="">
        <Link href={path}>
          {text}
        </Link>
      </li>
    )
  })
  return (
    <header className="">
      <section className="w-[90%] flex gap-[218px] items-center max-w-[1267px] mx-auto">
        <div className="w-[100px] relative h-[100px]">
          <Image 
            src="/images/wid.svg" 
            alt="logo" 
            priority 
            fill 
            // sizes="100px"
          />
        </div>
        <div className="flex flex-1 justify-between gap-[50px]">
          <ul className="flex flex-1 justify-between">
            {links}
          </ul>
          <div className="w-[236px]">
            <button type='button' className="btn-generic">Join Community</button>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
