import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full z-10 pt-[9vh] pr-16 flex items-center justify-end'>
            <a href='https://drive.google.com/file/d/1eoANqPuxJZHRm_hQLatnNT7LHmGfz3dd/view?usp=sharing' target='_blank'><button id='header-btn' className='border-4 border-gray-400 text-[15px] text-white bg-black px-10 py-3 rounded-full mr-2 font-[file2] font-extralight hover:bg-gray-600 uppercase'>Resume</button></a>
            <i class="ri-gallery-view-2 text-3xl text-white mr-3 opacity-25"></i>
    </div>
  )
}

export default Header