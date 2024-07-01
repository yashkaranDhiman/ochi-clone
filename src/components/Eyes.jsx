import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
            let clientX = e.clientX
            let clientY = e.clientY
            let delteX = clientX-innerWidth/2;
            let delteY = clientY-innerHeight/2;

            let angle = Math.atan2(delteY,delteX) * (180/Math.PI);
            setrotate(angle-180);
        })
    })
    
  return (
    <div className='w-full h-screen z-0'>
        <div  data-scroll data-scroll-speed="-0.1" data-scroll-section className='w-full h-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='w-[30vw] h-[30vh]  flex justify-between absolute absoulte top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='w-[14vw] h-[14vw] flex justify-center items-center bg-zinc-100 rounded-full'>
                    <div className='w-2/3 h-2/3 bg-black rounded-full relative overflow-hidden'>
                        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
                            <div className='bg-zinc-100 w-10 h-10 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[14vw] h-[14vw] flex justify-center items-center bg-zinc-100 rounded-full'>
                    <div className='w-2/3 h-2/3 bg-black rounded-full relative overflow-hidden'>
                        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
                            <div className='bg-zinc-100 w-10 h-10 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Eyes
