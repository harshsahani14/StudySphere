import React from 'react'
import { Outlet } from 'react-router'
import SideBar from '../components/core/DashBoard/SideBar'

const DashBoardPage = () => {
  return (
    <div className=' flex gap-0 w-full h-[679px]  '>
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  )
}

export default DashBoardPage
