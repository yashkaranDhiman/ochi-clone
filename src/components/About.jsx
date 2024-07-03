import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h2 className='text-6xl w-[95%] leading-none'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h2>
        <div className='border-t-[1px] w-full mt-20 border-zinc-700'></div>
        <div className='flex'>
            <div className='w-1/2'>
                <h2 className='text-6xl text-[#212121] mt-2'>Our approach</h2>
                <button className='bg-[#212121] mt-6 rounded-[50px] border-[0px] py-4 px-10 text-xl uppercase leading-tight text-white'>Read more</button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl mt-5 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-center bg-cover'></div>
        </div>
    </div>
  )
}

export default About