import React, { useEffect, useRef } from 'react';

const Featured = () => {

  return (
    <div className='w-full min-h-screen bg-zinc-800'>
      <h2 className='pt-32 text-7xl p-10'>Featured Projects</h2>
      <div className='w-full border-t-[1px] bg-zinc-300'></div>
      <div className='cards min-h-screen relative'>
        <div className='topcards relative flex gap-10 p-5'> 
          <div
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl tracking-tighter text-[#CDEA68] font-bold uppercase"
            onClick={() => handleClick('vise')}
            onMouseLeave={() => handleMouseLeave('vise')}
          >
            {"VISE".split("").map((elem, index) => (
              <span
                className="inline-block vise"
                key={index}
              >
                {elem}
              </span>
            ))}
          </div>
          <div className='w-1/2 h-[80vh] bg-red-300 rounded-2xl bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")]'></div>
          <div className='w-1/2 h-[80vh] bg-blue-300 rounded-2xl bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")]'></div>
        </div>
        <div className='downcards relative flex gap-10 p-5'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl tracking-tighter text-[#CDEA68] font-bold uppercase'>fyde</div>
          <div className='w-1/2 h-[80vh] bg-red-300 rounded-2xl bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")]'></div>
          <div className='w-1/2 h-[80vh] bg-blue-300 rounded-2xl bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")]'></div>
        </div>
        <div className='flex w-100'>
          <button className='uppercase mb-32 text-[1.5vw] py-4 px-6 mt-28 mx-auto rounded-[50px] text-white border-none bg-[#212121]'>View all case Studies</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
