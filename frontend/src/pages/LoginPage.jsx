import React, { useState } from 'react'
import Button from '../components/Button'
import './LoginPage.css'

const LoginPage = () => {

    const [userType,setUserType] = useState('student');


  return (
    
    <div className=' bg-richblack900 w-full h-screen flex gap-[100px] justify-center items-center'>
        <div className=' flex flex-col w-[508px] h-[562px] top-[174px] left-[120px] p-[32px] gap-[36px]'>
            <h1 className=' text-richblack5 font-[600] text-[30px] leading-[38px] text-left'> Welcome Back</h1>
            <p className='font-[400] text-[18px] leading-[26px] text-richblack300 text-left'>  
                {
                    userType === 'student' ? `Build skills for today, tomorrow, and beyond.` : 'Discover your passions'
                }
                <span className=' font-edu-sa-beginner'>
                {
                    userType === 'student' ?  'Education to your future proof career' : 'Be unstoppable'
                }
                </span>
            </p>
            
            <div ></div>
            <input></input>
            <input></input>
            <div></div>
            <Button></Button>
        </div>
        <div></div>
      
    </div>
  )
}

export default LoginPage
