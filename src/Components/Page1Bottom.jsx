import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Page1Bottom = () => {

  const RotatorOne = useRef(0);
  const RotatorTwo = useRef(0);
  useGSAP(function () {
    gsap.to(RotatorOne.current, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
    gsap.to(RotatorTwo.current, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  })

  return (
    <div className='absolute bottom-0 left-0 p-16 w-full flex items-end justify-between'>
      <div id='page1-bottomText'>
        <h1 className='text-white font-[file4] text-xl ml-5'>| FULLSTACK WEB DEVELOPER |</h1>
        <h2 className='text-gray-500 font-[file2] text-xl ml-5'>SAGAR PANDEY</h2>
      </div>
      <div id='page1-bottomTextImg'>
        <img ref={RotatorOne} className='h-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpuXP2il9WruNlDDy_AWhoKVhmx51EaKFrw&s" alt="Meta" />
        <img ref={RotatorTwo} className='mt-5 mb-10 h-20 rounded-full' src="https://www.shutterstock.com/image-illustration/bootcamp-text-written-on-black-600nw-2098974826.jpg" alt="Microsoft" />
      </div>
    </div>
  )
}

export default Page1Bottom