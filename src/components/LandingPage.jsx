import { motion } from 'framer-motion';
import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.7'  className='bg-zinc-900 w-full h-screen pt-1 font-[Founders_Grotesk_X-Condensed-Lt]'>
        <div className='textstructure mt-32 px-20'>
            {["We Create","Eye Opening","Presentations"].map((item,index)=>(
                <div className='masker' key={index}>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index=== 1 &&(
                            <motion.div
                            initial={{width:0}}
                            animate={{width:"9vw"}}
                            transition={{ease:[0.76,0,0.24,1], duration:1}}
                            className='mr-3 w-[8vw] h-[5.2vw] rounded-md reletive -top[1.2vw] bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.div>
                        )}
                        <h1 className='uppercase leading-none tracking-tighter text-8xl font-semibold'>
                            {item}
                        </h1>
                    </div>
                </div>
            ))}

        </div>
        <div className='border-t-[1px] border-zinc-700 mt-40 flex item-center justify-between py-5 px-20' >
            {["For public and private companies","From the first pitch to IPO"].map((elem,index)=>(
                <p key={index} className='text-xl font-light leading-none tracking-tight'>{elem}</p>
            ))}     
            <div className='start flex items-center gap-5'>
                <div className='px-2 uppercase py-2 border-[2px] border-zinc-500 rounded-full font-light text-md'>Start the Projcet</div>
                <div className='w-8 h-8 flex items-center justify-center text-3xl rounded full border-[1px]'><p><RxArrowTopRight /></p></div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage