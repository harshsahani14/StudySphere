import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarLinks = ({icon,text,link}) => {
  return (
    <NavLink to={link} className='flex w-[222px] h-[38px] py-[8px] px-[24px] gap-[12px]  items-center' style={({isActive})=>({
        color : isActive ? "#FFD60A" : "#838894",
        backgroundColor : isActive ? '#3D2A01' : '#161D29',
        borderLeftWidth : isActive ? '2px' : '0px',
        borderLeftColor : isActive ? '#FFD60A' : '#161D29'
    })}>
        {icon}
        <p className='font-inter font-[500] text-[14px] leading-[22px]'>{text}</p>
    </NavLink>
  )
}

export default SideBarLinks
