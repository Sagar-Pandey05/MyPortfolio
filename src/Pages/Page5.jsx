import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page5 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.from(".rotateTextP",{
            transform:'rotateX(-90deg)',
            opacity:0,
            duration:2,
            stagger:1,
            scrollTrigger:{
                trigger:".rotateTextP",
                // markers:true,
                start:"top 70%",
                end:"top -250%",
                scrub:2
            }
        })
    })

  return (
    <div id='page5' className='text-center w-screen bg-white text-black overflow-hidden'>
        <div className='rotateTextP mt-16'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw] uppercase'>BUILDING</h1>
        </div>
        <div className='rotateTextP'>
            <h1 className='text-gray-500 text-[39vw] font-[file3] leading-[30vw] uppercase'>WEBSITE</h1>
        </div>
        <div className='rotateTextP'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw] uppercase'>USING</h1>
        </div>
        <div className='rotateTextP'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw] uppercase'>REACT, NODE</h1>
        </div>
        <div className='rotateTextP'>
            <h1 className='text-gray-500 text-[39vw] font-[file3] leading-[30vw] uppercase'>EXPRESS</h1>
        </div>
        <div className='rotateTextP'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw] uppercase'>MONGO</h1>
        </div>
    </div>
  )
}

export default Page5