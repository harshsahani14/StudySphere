import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import Button from '../../../Button';

const CoursePublishForm = () => {
  return (
    <div className=' flex flex-col '>
      <div className='w-[665px] h-[130px] rounded-[8px] border-[1px] p-[24px] bg-richblack800 mt-[40px] ml-[60px] flex flex-col gap-[26px] border-richblack700'>

        <h1 className='text-richblack5 font-inter text-[24px] leading-[32px] font-[600]'>Publish Settings</h1>
        <div className='flex gap-2 items-center '>
        <input type='checkbox' id='default-checkbox' className='w-[20px] h-[20px] text-richblack600 bg-richblack800 border-richblack400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' ></input>
        <label htmlFor='default-checkbox' className='font-[500] text-[16px] leading-[24px] text-richblack400'>Make this Course Public</label>
        </div>
      </div>

      <div className=' flex mt-[100px] justify-between w-[728px]   '>
      <button className=' w-[112px] h-[48px] bg-richblack800 ml-[60px] flex justify-center items-center gap-2 text-richblack5 font-[500] text-[16px] leading-[24px] shadow-button hover:scale-105 duration-200 py-[12px] px-[24px] rounded-[8px] '><FaChevronLeft></FaChevronLeft>Back</button>
      <div className=' flex gap-4'>
      <Button content={"Save as draft"} isYellow={false} hasArrow={false} width={164}> </Button>
      <Button content={"Save and Publish"} isYellow={true} hasArrow={false} width={164}> </Button>
      </div>
      </div>
    </div>
  )
}

export default CoursePublishForm
