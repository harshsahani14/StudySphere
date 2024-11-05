import React from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import { TbBinaryTree2 } from "react-icons/tb";

const HomepageBox = ({heading,para,hasShadow}) => {
  return (
    <div className={`w-[341.33px] h-[300px] ${hasShadow ? ' shadow-homePageUpperBox bg-[#FFFFFF] ' : ' drop-shadow-none bg-richblack800'} flex flex-col z-50`} >
        <div className=' w-full h-[244px] pt-[32px] pb-[52px] px-[24px] flex flex-col gap-[12px]'>
            <p className={`${hasShadow ? ' text-richblack800' : 'text-richblack5 '} text-[20px] leading-[28px]  font-[600] text-left font-inter `}>{heading}</p>
            <p className=' font-inter font-[400] text-[16px] leading-[24px] text-richblack300 text-left'>{para}</p>
        </div>
        <div className={`w-full h-[56px] py-[16px] px-[12px] flex gap-[16px] justify-around border-dashed border-t-[2px] ${hasShadow ? 'border-t-[#C5C7D4] text-blue300' : ' border-t-richblack300 text-richblack300'} `}>
            <div className=' flex w-[97px] h-[24px] gap-[8px] justify-center items-center'>
                <HiMiniUsers className='  w-[20px] h-[20px]'/>
                <p className='  font-[500] text-[16px] leading-[24px] font-inter'>Beginner</p>
            </div>
            <div className=' flex gap-[8px] h-[24px] justify-center items-center'>
                <TbBinaryTree2 className=' h-[18px] w-[18px]  ' />
                <p className=' font-[500] text-[16px] leading-[24px] font-inter'> 6 Lessons</p>
            </div>
        </div>
      
    </div>
  )
}

export default HomepageBox

