import React from 'react'

const HeadingAndText = ({heading,text}) => {
  return (
    <div className='w-[292.5px] h-[74px] flex flex-col gap-[12px]'>
        <p className=' font-inter font-[700] text-[30px] leading-[38px] text-center text-richblack5'>{heading}</p>
        <p className='font-inter font-[600] text-[16px] leading-[24px] text-center text-richblack500'>{text}</p>
    </div>
  )
}

export default HeadingAndText
