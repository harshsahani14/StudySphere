import React from 'react'

const Box1 = ({cont1,cont2,cont3}) => {
  return (
    <div className=' flex flex-col gap-[12px] border-[1px] rounded-[4px] border-[#DBDDEA] w-[140.5px] h-[120px] items-start p-[8px]'>
        <p>{cont1}</p>
        <p className=' text-richblack800 font-semibold text-[24px] leading-[16px] mt-[12px]'>{cont2}</p>
        <p className=' text-richblack300 font-[500] text-[16px] leading-[24px]'>{cont3}</p>
    </div>
  )
}

export default Box1
