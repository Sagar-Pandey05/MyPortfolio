import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const TiltText = (props) => {

    useGSAP(function () {
        gsap.from('#Dark', {
          duration: 5,
          ease: "bounce.out",
          y: 100,
          opacity:0
        })
    })

    return (
        <div id='tiltDiv' ref={props.prop} className='mt-28 ml-10'>
            <h1 className='text-[4.5vw] uppercase leading-[4vw] text-white font-[file4]'>I am <span id='Dark' className='text-gray-600'>DARK MODE</span></h1>
            <h1 className='text-[7vw] leading-[6vw] font-[file4] text-white uppercase'>Software</h1>
            <h1 className='text-[4.5vw] uppercase leading-[4vw] text-white font-[file4]'>Developer</h1>
        </div>
    )
}

export default TiltText