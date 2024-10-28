import React from 'react'
import { useState } from 'react';
import InputText from '../components/InputText';

const SignUpPage = () => {

  const [userType,setUserType] = useState('student');

  return (
    <div className=' bg-richblack900 h-screen flex gap-[100px]'>
      
      <div className=' w-[508px]   p-[32px] flex flex-col  gap-[36px] mt-[40px] ml-[200px]'>
        <div className=' flex flex-col gap-[12px] w-[444px] h-[114px] text-left'>
          <p className=' text-richblack5 font-[600] leading-[38px] text-[30px] '>Join the millions learning to code with StudyNotion for <br></br> free</p>
          <p></p>
          <div className=' w-[444px] h-[50px] '>
            <p className='font-[400] text-[18px] leading-[26px] text-richblack300 text-left'>  
                      {
                          userType === 'student' ? `Build skills for today, tomorrow, and beyond.` : 'Discover your passions.'
                      }
                      {
                          userType === 'student' ? (<span className='font-[700] text-[16px] leading-[24px] text-blue200'>Education to your future proof career</span>) : (<p className='font-[700] text-[16px] leading-[24px] text-blue200'> Be unstoppable</p>)
                      }
            </p>
          </div>

          <div className=' flex gap-[5px] w-[230px] h-[44px] bg-richblack800 p-[4px] rounded-[500px] shadow-toggle mt-[25px] '>
                <div className={` w-[97px] h-[36px] rounded-[100px] py-[6px] px-[18px] font-[500] text-[16px] leading-[24px] text-richblack5 cursor-pointer duration-200 ${userType=='student' ? 'bg-richblack900' : ''} ease-in-out`} onClick={()=> {setUserType("student")} }> Student</div>
                <div className={`w-[120px] h-[36px] rounded-[100px] px-[18px] py-[6px] font-[500] text-[16px] leading-[24px] text-richblack5 cursor-pointer ${ userType=='instructor' ? 'bg-richblack900' : ''} duration-200 ease-in-out text-center`} onClick={()=>{setUserType("instructor")}}> Instructor</div>
          </div>
          
          
          <form className=' mt-[30px]'>

              <div className='flex flex-row w-fit h-[106px] gap-[20px]'>
                  <InputText labelText={"First Name"} width={212} placeholder={"Enter first name"}></InputText>
                
                  <InputText labelText={"Last Name"} width={212} placeholder={"Enter last name"}></InputText>
                  
              </div>
          </form>
          
          
        </div>

        
      </div>
      <div></div>
    </div>
  )
}

export default SignUpPage
