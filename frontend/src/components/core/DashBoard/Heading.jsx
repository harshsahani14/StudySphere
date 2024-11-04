import React from 'react'

const Heading = ({title,heading}) => {
  return (
    <div className='w-[1217px] h-[120px] py-[24px] pl-[24px] pr-[120px] flex flex-col gap-[24px]'>

            <div className='w-[1073px] h-[22px] flex gap-[8px] '>
            <p className='font-inter text-[14px] leading-[22px] font-[400] text-richblack300'>Home</p>
            <p className='font-inter text-[14px] leading-[22px] font-[400] text-richblack300'>/</p>
            <p className='font-inter text-[14px] leading-[22px] font-[400] text-richblack300'>Dashboard</p>
            <p className='font-inter text-[14px] leading-[22px] font-[400] text-richblack300'>/</p>
            <p className='font-inter text-[14px] leading-[22px] font-[400] text-yellow'>{title}</p>
            </div>
            <p className=' font-inter font-[500] text-[30px] leading-[38px] text-richblack5'> {heading}</p>
    </div>
  )
}

export default Heading
