import React, { useState } from 'react'
import Heading from './Heading'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import toast from 'react-hot-toast'
import { apiCall } from '../../../apis/apiCall'
import { profileApiURL } from '../../../apis/apiUrl'
import { setshowDeleteAccModal, setUser } from '../../../slices/profileSlice'
import axios from 'axios'
import { BiTrash } from "react-icons/bi";
import {FiEyeOff} from "react-icons/fi"
import {FiEye} from "react-icons/fi"


const Settings = () => {

  const [img,setImg] = useState(null)

  const {user} = useSelector(state => state.profile)
  const {token} = useSelector(state=> state.auth)
  

  const dispatch = useDispatch()
  const [showPass,setShowPass] = useState(false)

  const changeProfileImg = async()=>{

    const toastId = toast.loading("Loading")
    try{


        const formData = new FormData()
        formData.append('displayPicture', img);
        console.log(img)
        console.log(token)
        
        
        const result = await axios.put(profileApiURL.updateDisplayPicture,formData,{
          headers : {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}` 
          },
          withCredentials: true
        },
        )

        dispatch(setUser({...user,img}))

        console.log(result.data)

        toast.success("Dp updated")

    }
    catch(e){
      toast.error("Could not complete action.Please refresh and try again")
      console.log(e)
      console.log(e.message);

    }

    toast.dismiss(toastId)
  }
  return (
    <div className='w-full h-[679px] bg-richblack900 overflow-y-scroll '>
      <Heading heading={"Edit Profile"} title={"Settings"}></Heading>
      <div className='w-[792px] h-[950px] flex flex-col gap-[44px]  ml-[160px] mt-[40px]'>
        <div className='w-[792px] h-[152px] rounded-[8px] bg-richblack800 flex gap-[19px] p-[24px] items-center justify-start border-richblack700 border-[1px]'>
        <img src={user.img} className='w-[68px] h-[68px] rounded-[2000px]'></img>
        <div className='flex flex-col gap-[20px]'>
          <p className='font-[500] font-inter text-richblack5 text-[14px]'>Change Profile picture</p>
          <div className='flex  justify-start'>
                <button  className={` bg-yellow w-[100px] h-[42px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px] font-[500] flex justify-center items-center gap-2  cursor-pointer hover:scale-110 duration-200 `} onClick={()=>document.getElementById('fileInput').click()} >
                  Select
                
                </button>
              
                <input onChange={(e)=> setImg(e.target.files[0])}  type='file' id='fileInput' name='avatar' className={` invisible w-[0px]`}  accept=".png,.jpg,.jpeg"  ></input>
                  
                <button className='bg-richblack700 w-[100px] h-[42px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px] font-[500] flex justify-center items-center gap-2  cursor-pointer text-richblack5 shadow-button ml-[20px] hover:scale-110 duration-200 ' onClick={changeProfileImg}>Change</button>
                
                
          </div>
        </div>
        
        </div>

        <div className=' bg-richblack800 w-[792px] h-[388px] rounded-[8px] border-richblack700 border-[1px]'>

        </div>
        <div className=' bg-richblack800 w-[792px] h-[170px] rounded-[8px] p-[24px] flex flex-col gap-[20px] border-richblack700 border-[1px] '>
          <p className=' font-inter font-[600] text-[18px] leading-[26px] text-richblack5'>Password</p>
          
             
        </div>
        <div className='w-[792px] h-[182px] bg-[#340019] rounded-[8px] border[1px] p-[24px] flex gap-[19px] border-[#691432] border-[1px] '>
          <div onClick={()=> dispatch(setshowDeleteAccModal(true))} className=' w-[52px] h-[52px] rounded-[200px] p-[14px] bg-[#691432] cursor-pointer'>
            <BiTrash  className='w-[24px] h-[24px] text-[#EF476F] '></BiTrash>
          </div>


          <div className=' flex flex-col gap-[8px] pr-[120px] w-[673px] h-[134px]'>

            <p className='font-inter font-[700] text-[18px] leading-[26px] text-richblack5'>Delete Account</p>
            <div className=' flex flex-col gap-[2px]'>
              <p className='text-[#FBC7D1] font-inter font-[500] text-[14px] leading-[22px]'>Would you like to delete account?</p>
              <p className='text-[#FBC7D1] font-inter font-[500] text-[14px] leading-[22px]'>This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
            </div>
            <p onClick={()=> dispatch(setshowDeleteAccModal(true))}  className=' font-[500] text-[16px] leading-[24px] text-[#D43D63] cursor-pointer italic'>I want to delete my account.</p>
          </div>
        </div>

        <div className=' flex justify-end mb-[40px]'>
          <button className='bg-richblack800 shadow-toggle w-[101px] h-[48px] rounded-[8px] text-richblack5 font-inter font-[500] text-[16px] leading-[24px] hover:scale-105 duration-200'>Cancel</button>
          <button className='bg-yellow text-richblack900  w-[86px] h-[48px] rounded-[8px]  font-inter font-[500] text-[16px] leading-[24px] hover:scale-105 duration-200 ml-6'>Save</button>
        </div>

      </div>

      
    </div>
    
  )
}

export default Settings
