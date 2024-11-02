import React from 'react'
import { CiUser } from "react-icons/ci";
import SideBarLinks from './SideBarLinks';
import { FiBook } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className=' flex h-[1175px] w-[222px] py-[30px] gap-[10px] bg-richblack800 border-r-richblack700 border-r-[1px] flex-col'>
      <SideBarLinks icon={<CiUser className='w-[16px] h-[16px]'></CiUser>} text={'My Profile'} link={'/dashboard/myProfile'}></SideBarLinks>
      <SideBarLinks icon={<FiBook className='w-[16px] h-[16px]'></FiBook>} text={"Enrolled Courses"} link={'/dashboard/enrolledCourses'}></SideBarLinks>
      <SideBarLinks icon={<FaRegBookmark className='w-[16px] h-[16px]' />}text={"Wishlist"} link={'/dashboard/wishlist'}></SideBarLinks>
      <SideBarLinks icon={<PiShoppingCartLight className='w-[16px] h-[16px]' />} text={'Purchase History'} link={'/dashboard/purchaseHistory'}></SideBarLinks>
      <SideBarLinks icon={<RiGraduationCapLine className='w-[16px] h-[16px]'></RiGraduationCapLine>} text={'Courses'} link={'/dashboard/courses'}></SideBarLinks>

      <div className=' w-[222px] h-[8px] py-[4px] px-[16px] flex gap-[12px]'>
        <div className='w-[190px] h-[1px] bg-richblack600 '></div>
      </div>
    </div>
  )
}

export default SideBar
