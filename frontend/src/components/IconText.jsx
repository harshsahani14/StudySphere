import React from 'react'

const IconText = ({icon,heading,para}) => {
  return (
    <div className=' w-[410px] h-[84px] py-[16px] px-[12px] gap-[24px] flex '>
            <div className='w-[52px] h-[52px] rounded-[200px] bg-[#FFFFFF] p-[4px] drop-shadow-2xl flex items-center justify-center'>

                <div >{icon}</div>
                
            </div>

            <div className=' w-[310px] h-[54px] flex flex-col gap-[2px] '>

                <p className=' text-left text-[18px] font-[600] leading-[26px] text-richblack900'>{heading}</p>
                <p className=' text-left font-[400] text-[14px] leading-[22px] text-richblack600'> {para}</p>

            </div>
    </div>
  )
}

export default IconText
