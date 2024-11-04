import React, { useState } from 'react'
import Heading from './Heading'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import toast from 'react-hot-toast'
import { apiCall } from '../../../apis/apiCall'
import { profileApiURL } from '../../../apis/apiUrl'
import { setUser } from '../../../slices/profileSlice'

const Settings = () => {

  const [img,setImg] = useState(null)

  const {user} = useSelector(state => state.profile)
  const {token} = useSelector(state=> state.auth)

  const dispatch = useDispatch()

  const changeProfileImg = async()=>{

    const toastId = toast.loading("Loading")
    try{

        console.log(img)

        const formData = new FormData()
        formData.append('displayPicture', img);
        formData.append('token', token);
        
        const result = await apiCall("PUT",profileApiURL.updateDisplayPicture,formData,{
          
            'Content-Type': 'multipart/form-data'
          }
        );

        dispatch(setUser({...user,img}))

        console.log(result.data)

        toast.success("Dp updated")

    }
    catch(e){
      toast.error("DP not updated")
      console.log(e)
      console.log(e.message);

    }

    toast.dismiss(toastId)
  }
  return (
    <div className='w-full h-[679px] bg-richblack900'>
      <Heading heading={"Edit Profile"} title={"Settings"}></Heading>
      <div className='w-[792px] h-[950px] flex flex-col gap-[44px] mx-auto'>
        <div className='w-[792px] h-[152px] rounded-[8px] bg-richblack800 flex gap-[19px] p-[24px] items-center justify-start'>
        <img src={user.img} className='w-[68px] h-[68px] rounded-[2000px]'></img>
        <div className='flex flex-col gap-[20px]'>
          <p className='font-[500] font-inter text-richblack5 text-[14px]'>Change Profile picture</p>
          <div className='flex  justify-start'>
                <button  className={` bg-yellow w-[100px] h-[42px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px] font-[500] flex justify-center items-center gap-2  cursor-pointer `} >
                  Change
                
                </button>
              
                <input onChange={(e)=> setImg(e.target.value)}  type="file" id='fileInput' name='avatar' className={` invisible w-[0px]`}  accept=".png,.jpg,.jpeg"  ></input>
                  
                <button className='bg-richblack700 w-[100px] h-[42px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px] font-[500] flex justify-center items-center gap-2  cursor-pointer text-richblack5 shadow-button ml-[20px]  'onClick={()=>document.getElementById('fileInput').click()}>Remove</button>
                
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Settings
