import React from 'react'

const Page10 = () => {
    return (
        <div className='h-screen p-5 bg-white relative overflow-hidden'>
            <div className='h-full w-full flex  rounded-[50px] overflow-hidden'>
                <video autoPlay muted loop className='h-full w-full object-cover' src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/1080p/mp4/file.mp4"></video>
                <div className='about--text text-white'>
                    <div className='mb-10 mt-10'>
                        <h1 className='font-[file3] text-[12vw] leading-[19vh] uppercase'>Frontend</h1>
                        <p className='font-[file4] text-xl  text-gray-400 capitalize'>HTML, CSS, javaScript, react, React Native</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='font-[file3] text-[12vw] leading-[19vh] uppercase'>Backend</h1>
                        <p className='font-[file4] text-xl  text-gray-400 capitalize'>NodeJs, ExpressJS, MongoDB, MySQl</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='font-[file3] text-[12vw] leading-[19vh] uppercase'>Additional</h1>
                        <p className='font-[file4] text-xl  text-gray-400 capitalize'>Java, MS-Office, AI Tools</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page10