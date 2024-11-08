import React from 'react'
import { CiUser } from "react-icons/ci";
import SideBarLinks from './SideBarLinks';
import { FiBook } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { RiDashboard2Line, RiGraduationCapLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setshowLogOutModal } from '../../../slices/profileSlice';
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const SideBar = () => {

  const dispatch = useDispatch()

  const {user} = useSelector(state=>state.profile);
  return (
    <div className=' flex h-[679px] w-[222px] py-[30px] gap-[8px] bg-richblack800 border-r-richblack700 border-r-[1px] flex-col'>
      <SideBarLinks icon={<CiUser className='w-[16px] h-[16px]'></CiUser>} text={'My Profile'} link={'/dashboard/myProfile'}></SideBarLinks>

      {

        user.role == 'student' ? (<div className=' flex flex-col gap-[10px]'>
          <SideBarLinks icon={<FiBook className='w-[16px] h-[16px]'></FiBook>} text={"Enrolled Courses"} link={'/dashboard/enrolledCourses'}></SideBarLinks>
          <SideBarLinks icon={<FaRegBookmark className='w-[16px] h-[16px]' />}text={"Wishlist"} link={'/dashboard/wishlist'}></SideBarLinks>
        </div>) : (<div className=' flex flex-col gap-[10px]'>
          
          <SideBarLinks icon={<RiDashboard2Line className='w-[16px] h-[16px]'></RiDashboard2Line>} text={'Dashboard'} link={'/dashboard/instructorDashboard'}></SideBarLinks>
          <SideBarLinks icon={<HiOutlineDesktopComputer className='w-[16px] h-[16px]'></HiOutlineDesktopComputer>} text={'Courses'} link={'/dashboard/courses'}></SideBarLinks>
          <SideBarLinks icon={<FaPlus className='w-[16px] h-[16px]'></FaPlus>} text={'Add course'} link={'/dashboard/addCourse'}></SideBarLinks>
          
        </div>)
      }
      
      
      

      <div className=' w-[222px] h-[8px] py-[4px] px-[16px] flex gap-[12px]'>
        <div className='w-[190px] h-[1px] bg-richblack600 '></div>
      </div>

      <div className='w-[222px] h-[76px] flex flex-col gap-[5px]'>

        <SideBarLinks icon={<IoSettingsOutline className='w-[16px] h-[16px]'/>} text={'Settings'} link={'/dashboard/settings'} ></SideBarLinks>
        <div className='flex w-[222px] h-[38px] py-[8px] px-[24px] gap-[12px]  items-center cursor-pointer' onClick={()=>dispatch(setshowLogOutModal(true))} >
        <IoIosLogOut className='w-[16px] h-[16px] text-richblack300 '></IoIosLogOut>
        <p className='font-inter font-[500] text-[14px] leading-[22px] text-richblack300'>Log&nbsp;Out</p>
        </div>
        
      </div>
    </div>
  )
}

export default SideBar
