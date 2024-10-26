import React from 'react'

const ImgText = ({text,img}) => {
  return (
    <div className=' w-[293px] h-[64px] p-[8px] gap-[8px] flex justify-start'>
      <img src={img} className='w-[48px] h-[48px] rounded-[2000px]'></img>
      <p className=' text-richblack600 font-[500] text-[18px] leading-[26px] '>{text}</p>
    </div>
  )
}

export default ImgText
