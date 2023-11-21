import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import DonationModal from '@/reusable components/donation-modal'
import Image from 'next/image'
import Link from 'next/link'
import EventsModal from '@/reusable components/events-modal'


const Header = () => {
  const {pathname, asPath, events} = useRouter()
  const [navState, toggleNavState] = useState(false)
  const [modalState, setmodalState] = useState({ donate: false, event: false})
  const header = useRef()
  const paths = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/#about",
      text: "About",
    },
    {
      path: "/page/donation",
      text: "Partner",
    },
    {
      path: "/page/events",
      text: "Event",
    },
    {
      path: "/page/chapters",
      text: "Chapters",
    },
    {
      path: "/page/programs",
      text: "Programs",
    },
  ]
  useEffect(() => {
    const onHashChangeStart = (url) => {
      toggleNavState(false)
    };

    events.on("hashChangeStart", onHashChangeStart)
    events.on("routeChangeStart", onHashChangeStart)

    return () => {
        events.off("hashChangeStart", onHashChangeStart)
        events.off("routeChangeStart", onHashChangeStart)
    };
}, [events]);
  const links = paths.map(({path, text}) => {
    return (
      <li key={text} className={`${asPath === path ? "active" : ""} hover:text-[#0673EF] transition-[.4s] font-[500] text-[#666481]`}>
        <Link href={path}>
          {text}
        </Link>
      </li>
    )
  })
  const toggleNav = () => {
    toggleNavState(!navState) 
  }

  useEffect (() => {
    window.addEventListener("scroll", () => {
      header.current.classList.toggle("header-sticky", window.scrollY > 0)
  })
  }, [])
  const checkUrlChange = () => {
    const urlVal = window.location.search
    const donate = new URLSearchParams(urlVal).get("donate")
    const event = new URLSearchParams(urlVal).get("event")

    if (donate == "true") {
      setmodalState({
        ...modalState,
        donate: true
      })
    }
    else if (event == "true") {
      setmodalState({
        ...modalState,
        event: true
      })
    }
    else {
      setmodalState({
        donate: false,
        event: false
      })
    }
  }
  useEffect (() => {
    checkUrlChange()
  }, [pathname, asPath])
  return (
    <>
      <header ref={header} className={`fixed z-[3] py-4 bg-white left-0 top-0 w-full`}>
        <section className="w-[90%] flex gap-[218px] justify-between items-center max-w-[1267px] mx-auto">
          <div className="w-[100px] relative z-[2] h-[80px]">
            <Image 
              src="/images/wid.svg" 
              alt="logo" 
              priority 
              fill 
              // sizes="100px"
            />
          </div>
          <nav className={`flex md:flex-1 h-[100vh] md:h-fit fixed top-0 w-full bg-[#ffffffee] transition-[.4s] pt-[20vh] md:pt-0 gap-[50px] left-0 md:relative ${navState ? "translate-y-0" : "translate-y-[-100%] md:translate-y-0"} items-center flex-col md:flex-row md:justify-between md:gap-[50px]`}>
            <ul className="flex flex-col gap-[5vh] md:flex-row md:flex-1 items-center md:justify-between">
              {links}
            </ul>
            <div className="md:w-fit w-[90%] mx-auto">
              <a href="https://forms.gle/sVHUHnF9bz42BJui7" target="_blank" rel="noopener noreferrer">
                <button type='button' className="btn-generic w-full">Join Community</button>
              </a>
            </div>
          </nav>
          <button type='button' onClick={toggleNav} className="z-[2] md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" className={`transition-[.4s] ${navState ? "hidden" : ""}`} height="32" viewBox="0 0 32 1" fill="none">
                  <path d="M5.33333 10.6667H26.6667M5.33333" stroke="#666481" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" className={`transition-[.4s] ${navState ? "rotate-[45deg] translate-x-[10%] translate-y-[13%]" : "hidden"}`} height="32" viewBox="0 10 32 2" fill="none">
                  <path d="M5.333333 21.3334H18.6667" stroke="#666481" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" className={`transition-[.4s] ${navState ? "rotate-[-45deg] translate-y-[-50%] translate-x-[20%]" : ""}`} height="32" viewBox="0 20 32 32" fill="none">
                  <path d="M5.333333 21.3334H18.6667" stroke="#666481" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </button>
        </section>
      </header>
      <DonationModal 
        modalState={ modalState.donate }
      />
      <EventsModal
        modalState={ modalState.event }
      />
    </>
  )
}

export default Header
