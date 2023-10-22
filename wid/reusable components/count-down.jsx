import React from 'react'

const CountDown = () => {
  return (
    <section className="">
        <ScrollTrigger onEnter={()=> setHyState(true)} onExit={()=> setHyState(false)}>
            {hydrationState && <CountUp start={0} end={700} />}
        </ScrollTrigger>
    </section>
  )
}

export default CountDown
