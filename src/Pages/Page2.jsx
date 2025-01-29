import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/all'

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.from(".rotateText",{
            transform:'rotateX(-90deg)',
            opacity:0,
            duration:2,
            stagger:1,
            scrollTrigger:{
                trigger:".rotateText",
                // markers:true,
                start:"top 70%",
                end:"top -250%",
                scrub:2
            }
        })
    })

    function animation() {
        const canvas = document.querySelector("canvas");
        const context = canvas.getContext('2d');
        const imagePaths = Array.from({ length: 300 }, (elem, idx) => {
            return `/src/assets/webFrames/frame_${idx}_delay-0.03s.gif`;
        });
    
        const images = [];
        imagePaths.forEach(function (path, idx) {
            const img = new Image();
            img.src = path;
            img.onload = () => images[idx] = img;
        });
    
        let currentFrame = 0;
        let lastFrame = 0;
        const loopImagesSequence = (timestamps) => {
            if (images.length == 300 && timestamps - lastFrame >= 1000/30) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                
                // Check if the image at currentFrame is loaded
                if (images[currentFrame]) {
                    context.drawImage(images[currentFrame], 0, 0, canvas.width, canvas.height);
                }
                
                currentFrame = (currentFrame + 1) % 300;
                lastFrame = timestamps;
            }
            requestAnimationFrame(loopImagesSequence);
        }
        requestAnimationFrame(loopImagesSequence);
    }
    useEffect(() => {
      animation()
    },)
    
  return (
    <div id='page2' className='text-center w-screen bg-white text-black overflow-hidden'>
        <h3 className=' text-gray-500 text-lg p-7 font-[file2]'>&copy; Designed And Developed By Sagar Pandey</h3>
        <div className='rotateText mt-12'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw]'>IMPACTFUL</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw]'>IS THE</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw]'>THAT</h1>
        </div>
        <div className='rotateText'>
            <canvas className='h-full w-[60%] left-[20vw] absolute'></canvas>
            <h1 className='text-black text-[39vw] font-[file3] leading-[30vw]'>WORKS!</h1>
        </div>

        <div id='socials' className='flex items-center justify-center gap-24 mt-10 scale-75'>
            <a href="https://github.com/Sagar-Pandey05" target='_blank'><img className='h-[8vw]' src="https://pngimg.com/d/github_PNG40.png" alt="Github" /></a>
            <a href="http://sagarpandey54086@gmail.com/" target='_blank'><img className='h-[8vw]' src="https://thumb.ac-illust.com/01/018416a708cc44b0a2a89bfc92e2dbad_t.jpeg" alt="Gmail" /></a>
            <a href="https://www.linkedin.com/in/sagar-pandey-a6136a276 target='_blank'"><img className='h-[7vw] rounded-full' src="https://static-00.iconduck.com/assets.00/linkedin-square-icon-512x512-fa1pn8x5.png" alt="LinkedIn" /></a>
            <a href="https://drive.google.com/file/d/1eoANqPuxJZHRm_hQLatnNT7LHmGfz3dd/view?usp=sharing" target='_blank'><img className='h-[7vw] ' src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-vector-resume-icon-png-image_998136.jpg" alt="Resume" /></a>
        </div>
        <div className='h-[3px] w-1/4 ml-[38%] mt-10 bg-black'></div>
    </div>
  )
}

export default Page2