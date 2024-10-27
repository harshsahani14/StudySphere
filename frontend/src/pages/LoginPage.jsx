import React, { useState } from 'react'
import Button from '../components/Button'
import './LoginPage.css'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const LoginPage = () => {

    const [userType,setUserType] = useState('student');
    const [showPass,setShowPass] = useState(false)


  return (
    
    <div className=' bg-richblack900 w-full h-screen flex gap-[100px] justify-center items-center'>
        <div className=' flex flex-col w-[508px] h-[562px] top-[174px] left-[120px] p-[32px] gap-[36px]'>

            <div className=' w-[444px] h-[100px] flex flex-col gap-[12px]'
            >
                <h1 className=' text-richblack5 font-[600] text-[30px] leading-[38px] text-left'> Welcome Back</h1>
                <p className='font-[400] text-[18px] leading-[26px] text-richblack300 text-left'>  
                    {
                        userType === 'student' ? `Build skills for today, tomorrow, and beyond.` : 'Discover your passions.'
                    }
                    {
                        userType === 'student' ? (<span className='font-[700] text-[16px] leading-[24px] text-blue200'>Education to your future proof career</span>) : (<p className='font-[700] text-[16px] leading-[24px] text-blue200'> Be unstoppable</p>)
                    }
                </p>
            </div>
            <div className=' flex gap-[5px] w-[230px] h-[44px] bg-richblack800 p-[4px] rounded-[500px] shadow-toggle '>
                <div className={` w-[97px] h-[36px] rounded-[100px] py-[6px] px-[18px] font-[500] text-[16px] leading-[24px] text-richblack5 cursor-pointer duration-200 ${userType=='student' ? 'bg-richblack900' : ''} ease-in-out`} onClick={()=> {setUserType("student")} }> Student</div>
                <div className={`w-[120px] h-[36px] rounded-[100px] px-[18px] py-[6px] font-[500] text-[16px] leading-[24px] text-richblack5 cursor-pointer ${ userType=='instructor' ? 'bg-richblack900' : ''} duration-200 ease-in-out`} onClick={()=>{setUserType("instructor")}}> Instructor</div>
            </div>
            
            
            <form >
                <div for="emailId" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px]'>Email Address <div className='ml-[5px] text-pink200'>*</div></div>
                <input type="text" id="emailId" name="emailId" className='mr-[200px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200' placeholder='Enter email address' required></input><br></br><br></br>
                <div className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px]'>Password <div className='ml-[5px] text-pink200'>*</div></div>
                <div className=' relative h-[102px] mb-[-56px]'>
                        <input type={`${ showPass ? 'text' : 'password' }`} id="pass" name="pass" className='mr-[200px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 mb-[10px] absolute z-[10] left-[1px]' placeholder='Enter Password' required></input>
                        {
                            showPass ? (<FiEyeOff className=' z-[20] absolute right-3 top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowPass(false)}}/>) : (<FiEye className='z-[20] absolute right-3 top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowPass(true)}}></FiEye>)
                        }
                        <p className='absolute font-[600] text-[12px] leading-[20px]  text-blue200 bottom-7 right-0 cursor-pointer'>Forgot password</p>
                </div><br></br><br></br>
                <Button content={'Sign in'} isYellow={true} hasArrow={false} width={444} link={'/catalog'}></Button>
                
            </form>
            
            
        </div>
        <div
        ></div>
      
    </div>
  )
}

export default LoginPage
