import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.1' className='w-full py-10 bg-[#004D43] rounded-tl-[20px] rounded-tr-[20px]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap uppercase'>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className='text-[28vw] pt-20 -mb-20 leading-none font-["Founders_Grotesk_X-condensed"] font-bold'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className='text-[28vw] pt-20 -mb-20 leading-none font-["Founders_Grotesk_X-condensed"] font-bold'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
