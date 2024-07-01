import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen p-14 flex justify-center items-center'>
        <div className='w-full h-[50vh] flex gap-5'>
            <div className='bg-[#004D43] flex justify-center items-center w-1/2 rounded-[20px] relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-[150px]' alt="" />
                <button className='absolute bottom-5 left-5 rounded-[20px] border-[1px] border-[#CDEA68] text-[#CDEA68] py-1 px-6'>hello</button>
            </div>
            <div className='flex w-1/2 gap-5'>
                <div className='flex justify-center items-center w-1/2 bg-[#212121] rounded-[20px] relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-[150px]'  alt="" />
                    <button className='absolute bottom-5 left-5 rounded-[20px] border-[1px] border-[#fff] text-[#fff] py-1 px-6'>hello</button>
                </div>
                <div className='flex justify-center items-center w-1/2 bg-[#212121] rounded-[20px] relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-[100px]' alt="" />
                    <button className='absolute bottom-5 left-5 rounded-[20px] border-[1px] border-[#fff] text-[#fff] py-1 px-6'>hello</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards