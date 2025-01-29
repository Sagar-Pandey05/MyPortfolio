import React from 'react'
import RotateMoon from '../assets/RotateMoon.mp4'
const Page6 = () => {
  return (
    <div className='moon h-screen p-5 bg-white relative overflow-hidden'>
        <div className='h-full w-full flex  rounded-[50px] overflow-hidden bg-black'>
            <video autoPlay loop muted className='h-full w-full object-cover' src={RotateMoon}></video>
            <h1 className='text-[70vh] font-[file3] uppercase absolute left-20 -bottom-32 tracking-wide text-white'>About</h1>
        </div>
    </div>
  )
}

export default Page6