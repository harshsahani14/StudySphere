import React from 'react'

const AboutUsBox = ({heading,para,isRichBlack700}) => {
  return (
    <div className={` w-[294.5px] h-[294px] flex flex-col gap-[32px] p-[32px] ${isRichBlack700 ? 'bg-richblack700' : ' bg-richblack800'}`}>
        <p className=' text-richblack5 text-left font-[600] text-[18px] leading-[26px] font-inter'>{heading}</p>
        <p className=' font-inter font-[400] text-[14px] leading-[22px] text-left text-richblack100'>{para}</p>
    </div>
  )
}

export default AboutUsBox
