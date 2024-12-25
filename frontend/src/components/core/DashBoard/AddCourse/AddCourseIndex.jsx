import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import RenderProcess from './RenderProcess';

const AddCourseIndex = () => {
  return (
    <div className='  w-full bg-richblack900  overflow-y-scroll   '>
      
      <div className='w-[689px] h-[70px] py-[24px] pl-[24px] pr-[120px] flex items-center gap-[10px] top-[57px] left-[223px]'>

        <Link to={'/dashboard/instructorDashboard'} className='flex gap-[10px] items-center '>
        <FaChevronLeft className='w-[18px] h-[18px] text-richblack300'></FaChevronLeft>
        <p className='font-inter font-[400] text-[14px] leading-[22px] text-richblack300'>Back to Dashboard</p>
        </Link>
      </div>

      <RenderProcess></RenderProcess>

      <div className=' absolute w-[384px] h-[390px] rounded-[8px] border-[1px] p-[24px] flex flex-col gap-[24px] bg-richblack800 top-[70px] right-[100px]  '>
        <p className=' font-inter font-[600] text-richblack5 text-[18px] leading-[26px]'>⚡Course Upload Tips</p>

        <div className=' flex flex-col gap-[11px]'>
        <div className='w-[336px] h-[20px] ml-[10px]'><li className='font-inter font-[500] text-[12px] leading-[20px] text-richblack5' >Set the Course Price option or make it free.</li></div>
        <div className='w-[336px] h-[20px] ml-[10px]'><li className='font-inter font-[500] text-[12px] leading-[20px] text-richblack5' >Standard size for the course thumbnail is 1024x576.</li></div>
        <div className='w-[336px] h-[20px] ml-[10px]'><li className='font-inter font-[500] text-[12px] leading-[20px] text-richblack5' >Video section controls the course overview video.</li></div>
        <div className='w-[336px] h-[40px] ml-[10px]'><li className='font-inter font-[500] text-[12px] leading-[20px] text-richblack5' >Course Builder is where you create & organize a  <span className='ml-[17.5px]'>course.</span> </li></div>
        <div className='w-[336px] h-[40px] ml-[10px]'><li className='font-inter font-[500] text-[12px] leading-[20px] text-richblack5' >Information from the Additional Data section shows up <span className='ml-[17.5px]'>on the course single page.</span></li>
        </div>
        <div className='w-[336px] h-[20px] ml-[10px]'><li className='font-inter font-[500] text-[12px] leading-[20px] text-richblack5' >Make Announcements to notify any important</li></div>
        <div className='w-[336px] h-[20px] ml-[10px]'><li className='font-inter font-[500] text-[12px] leading-[20px] text-richblack5' >Notes to all enrolled students at once.</li></div>
        </div>
      </div>
    </div>
  )
}

export default AddCourseIndex;