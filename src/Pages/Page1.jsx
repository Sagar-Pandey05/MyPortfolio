import React, { useRef, useState } from 'react'
import TiltText from '../Components/TiltText'
import Page1Bottom from '../Components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  function mouseMoving(e) {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 20);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 10);

  }

  useGSAP(function () {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: 'power4.out'
    })
  }, [xVal, yVal])
  
  return (
    <div onMouseMove={(e) => {
      mouseMoving(e)
    }} className='relative bg-white px-4 py-3 h-screen w-screen'>
      <div id='Page1-in' className='relative p-9 h-full w-full rounded-[50px] bg-[url(https://images.unsplash.com/photo-1609385688196-7625a7bfed34?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
        <img className='logo h-24 ml-10' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="Logo" />

        <TiltText prop={tiltRef} />
        <Page1Bottom />
      </div>

    </div>
  )
}

export default Page1