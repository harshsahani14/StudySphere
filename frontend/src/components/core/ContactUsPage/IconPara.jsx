import React from 'react'

const IconPara = ({icon,heading,para1,para2}) => {
  return (
    <div className='w-[402px] h-[98px] flex p-[12px] gap-[9px] justify-center  '>
        <div className='w-[24px] h-[24px] text-richblack100 mt-1'>{icon}</div>
        <div className='w-[345px] h-[74px] flex gap-[2px] flex-col justify-start'>
            <p className='text-richblack5 font-inter font-600 text-[18px] leading-[26px]'>{heading}</p>
            <p className=' font-inter font-[500] text-[14px] leading-[22px] text-richblack200' >{para1}</p>
            <p className=' font-inter font-[500] text-[14px] leading-[22px] text-richblack200'>{para2}</p>
        </div>
    </div>
  )
}

export default IconPara
