import React from 'react'

const CalenderComp = ({text,isColured,isLeftRounded,isBlack,isRightRounded}) => {

  return (

    <div className={` ${isBlack ? 'text-[#585D69]' : ' text-richblack200'} font-[500] text-[15px] leading-[20px] ${isColured ? 'bg-[#F1F2FF]' : 'bg-[#FFFFFF]' } w-[41.86px] h-[24px] ${isLeftRounded ? 'rounded-l-full' : 'rounded-none'}  ${isRightRounded ?  'rounded-r-full' : 'rounded-none' }`}>
        {text}
    </div>
  )
}

export default CalenderComp
