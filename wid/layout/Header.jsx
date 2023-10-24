"use client"
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const {pathname, asPath, events} = useRouter()
  const [navScrollState, setNavState] = useState(false)
  const header = useRef()
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
      <li key={text} className={`${asPath === path ? "active" : ""} hover:text-[#0673EF] transition-[.4s] font-[500] text-[#666481]`}>
        <Link href={path}>
          {text}
        </Link>
      </li>
    )
  })

  useEffect (() => {
    window.addEventListener("scroll", () => {
      header.current.classList.toggle("header-sticky", window.scrollY > 0)
  })
  }, [])
  return (
    <header ref={header} className={`fixed z-[2] py-4 bg-white left-0 top-0 w-full`}>
      <section className="w-[90%] flex gap-[218px] items-center max-w-[1267px] mx-auto">
        <div className="w-[100px] relative h-[80px]">
          <Image 
            src="/images/wid.svg" 
            alt="logo" 
            priority 
            fill 
            // sizes="100px"
          />
        </div>
        <div className="flex flex-1 items-center justify-between gap-[50px]">
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
