import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage = () => {

  
  return (
    <div className=' w-full h-[679px] bg-richblack900 flex flex-col justify-center items-center gap-0'>
      <p className=' text-richblack5 text-[88px] font-[600] text-center font-inter  '>404</p>
      <p className=' text-richblack5 text-[30px] font-[600] text-center font-inter'>Error</p>
      <p className=' text-[16px] text-richblack5 font-[600] text-center font-inter'>Page Not Found</p>
      
    </div>
  )
}

export default ErrorPage
