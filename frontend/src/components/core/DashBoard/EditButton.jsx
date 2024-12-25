import React from 'react'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'

const EditButton = () => {
  return (
    <Link to={'/dashboard/settings'}>
                <button className='w-[96px] h-[40px] bg-yellow rounded-[8px] py-[8px] px-[20px] flex gap-[8px] items-center hover:scale-110 duration-200'>
                    <FiEdit className='w-[18px] h-[18px]'></FiEdit>
                    <p className='font-inter font-[500] text-[16px] leading-[24px] text-center text-richblack900'>Edit</p>
                </button>
    </Link>
  )
}

export default EditButton
