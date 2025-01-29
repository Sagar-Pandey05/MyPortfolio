import React from 'react'

const Page8 = () => {
  return (
    <div className='h-screen p-5 bg-white relative overflow-hidden'>
        <div className='h-full w-full flex  rounded-[50px] overflow-hidden'>
            <video autoPlay muted loop className='h-full w-full object-cover' src="src/assets/aboutback.mp4"></video>
            <div className='about--text text-white'>
                <div className='mb-10 mt-10'>
                    <h1 className='font-[file3] text-[12vw] leading-[19vh] uppercase'>personal</h1>
                    <p className='font-[file4] text-xl  text-gray-400 capitalize'>Discipline, Responsible, Creative</p>
                </div>
                <div className='mb-10'>
                    <h1 className='font-[file3] text-[12vw] leading-[19vh] uppercase'>Professional</h1>
                    <p className='font-[file4] text-xl  text-gray-400 capitalize'>Time Management, Multitasking, teamwork</p>
                </div>
                <div className='mb-10'>
                    <h1 className='font-[file3] text-[12vw] leading-[19vh] uppercase'>Additional</h1>
                    <p className='font-[file4] text-xl  text-gray-400 capitalize'>3D, Animation, AI Tools</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page8