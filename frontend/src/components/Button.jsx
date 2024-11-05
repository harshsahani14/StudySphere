import React from 'react';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Button = ({isYellow,hasArrow,content,width,link,onClick}) => {


  return (

    <Link to={link}>
      <button className={` ${isYellow ? 'bg-yellow text-richblack900': 'bg-richblack800 text-richblack5'}  w-[${width}px] h-[48px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px] font-[500] flex justify-center items-center gap-2  ${isYellow ? 'drop-shadow-none' : 'shadow-button' } cursor-pointer font-inter hover:scale-105  duration-200 `} onClick={onClick}>
          {content}
          { hasArrow ? <HiOutlineArrowSmallRight/> : (<div className='hidden'></div>)}
      </button>
    </Link>
  )
}

export default Button
