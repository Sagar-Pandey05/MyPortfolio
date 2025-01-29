import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.from('#bigCircle', {
      opacity:0,
      scale:10,
      duration:3,
      scrollTrigger:{
        trigger: '#bigCircle',
        // markers:true,
        start:"top 0%",
        end: "bottom 350%",
        scrub:true
      }
    })
  })
  return (
    <div className='h-screen p-5 bg-white'>
        <div className='tt-page4 h-[100%] w-full object-fill rounded-[50px] overflow-hidden relative'>
          <img className='relative h-full w-full' src="https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg" alt="" />

          <div className='absolute flex items-center justify-center top-0 left-0 p-5'>
            <div className='WhatIdo ml-20'>
              <h1 className='text-white text-[19vw] uppercase font-[file3]'>What</h1>
              <h1 className='text-white text-[19vw] uppercase leading-3 font-[file3] ml-3'>I Do</h1>
              <div className='bt-page4 mt-36 ml-3 leading-6'>
                <h2 className='text-white text-[3vh] uppercase font-[file]'>I Design And develop</h2>
                <h2 className='text-gray-400 text-[3vh] uppercase font-[file2]'>modern, impactful and luxurious</h2>
                <p className='text-white text-[3vh] font-[file]'>websites that is responsive and user friendly.</p>
              </div>
            </div>

            <div className='circle relative left-[20vh] rotate-12'>
              <div id='bigCircle' className='mt-10 h-[35vw] w-[35vw] bg-gray-700 rounded-full'></div>
              <div id='bigCircle' className=' absolute -bottom-10 h-[15vw] w-[15vw] bg-gray-500 rounded-full'></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page4