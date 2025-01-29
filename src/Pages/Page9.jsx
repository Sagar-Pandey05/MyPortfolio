import React from 'react'

const Page9 = () => {
  return (
    <div className=' h-screen w-screen flex  p-5 overflow-hidden'>
        <div className='bg-white h-screen w-1/4 flex items-center justify-center'> 
            <h1 className='text-[12vw] font-[file3] uppercase'>hard</h1>
        </div>
        <div className='h-full w-3/4 bg-[url(src/assets/spaceX.avif)] object-cover flex items-center'>
          <img className='h-[120vh] w-full' src="https://static.wixstatic.com/media/f1c650_a15cf84ef5d546bd980d228833ef2f8e~mv2.png/v1/fill/w_803,h_679,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(1).png" alt="Skills" />
        </div>
    </div>
  )
}

export default Page9