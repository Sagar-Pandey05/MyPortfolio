import React from 'react'
import Video from '../assets/newvideo.mp4'
const Page3 = () => {
  return (
    <div className='page3 h-screen relative mb-10 flex items-center justify-center'>
      <img className='absolute mt-7 h-[70vh] w-[72vw] z-10' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="Window" />
      <video loop autoPlay src={Video} className='project-video h-[57vh] object-cover z-10'></video>
      <div className='h-[2px] w-3/4 ml-24 absolute z-1 bg-gray-500'></div>
      <div className='h-[2px] w-11/12 mt-[25vh] ml-20 absolute z-1 bg-gray-500'></div>
      <div className='h-[2px] w-[100%] mt-[50vh] absolute z-1 bg-gray-500'></div>

    </div>
  )
}

export default Page3