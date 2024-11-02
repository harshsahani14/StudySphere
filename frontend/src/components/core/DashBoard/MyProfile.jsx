import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";

const MyProfile = () => {

    const {user} = useSelector((state)=> state.profile)

  return (
    <div className='w-full h-screen bg-richblack900'>
        
        <div className='w-[1217px] h-[120px] py-[24px] pl-[24px] pr-[120px] flex flex-col gap-[24px]'>
            <div className='w-[1073px] h-[22px] flex gap-[8px]'>
                <p className='text-richblack300 font-inter font-[400] text-[14px] leading-[22px]'>Home</p>
                <p className='text-richblack300 font-inter font-[400] text-[14px] leading-[22px]'>/</p>
                <p className='text-richblack300 font-inter font-[400] text-[14px] leading-[22px]'>Dashboard</p>
                <p className='text-richblack300 font-inter font-[400] text-[14px] leading-[22px]'>/</p>
                <p className='text-yellow font-inter font-[400] text-[14px] leading-[22px]'>My Profile</p>
            </div>

            <div className='font-inter font-[500] text-[30px] leading-[38px] text-richblack5 '>My Profile</div>
        </div>

        <div className='w-[792px] h-[366px] flex flex-col gap-[44px] ml-[140px] mt-[60px]'>
            <div className='w-[792px] h-[126px] rounded-[8px] p-[24px] flex gap-[20px] bg-richblack800 border-[1px] border-richblack700 items-center'>

                <div className='w-[628px] h-[78px] flex gap-[24px] justify-start'>
                <img src={user.img} className='w-[68px] h-[68px] rounded-[2000px]'></img>
                <div className='w-[526px] h-[50px] flex flex-col gap-[2px] justify-center mt-2 '>
                    <p className='font-inter font-[600] text-[18px] leading-[26px] text-richblack5'>{user.firstName}</p>
                    <p className='font-inter font-[400] text-[14px] leading-[22px] text-richblack300'>{user.email}</p>
                </div>

                </div>
                <Link to={'/dashboard/settings'}>
                <button className='w-[96px] h-[40px] bg-yellow rounded-[8px] py-[8px] px-[20px] flex gap-[8px] items-center'>
                    <FiEdit className='w-[18px] h-[18px]'></FiEdit>
                    <p className='font-inter font-[500] text-[16px] leading-[24px] text-center text-richblack900'>Edit</p>
                </button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default MyProfile
