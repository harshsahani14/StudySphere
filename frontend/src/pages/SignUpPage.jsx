import React from 'react'
import { useState } from 'react';
import { FiPlus,FiEyeOff,FiEye } from "react-icons/fi";
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import { apiCall } from '../apis/apiCall'
import {authApiUrl} from '../apis/apiUrl'
import toast from 'react-hot-toast';
import { setLoading, setUser } from '../slices/authSlice';
import { useDispatch } from 'react-redux';

const SignUpPage = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch()


  const [userType,setUserType] = useState('student');
  const [showPass,setShowPass] = useState(false);
  const [showConfirmPass,setShowConfirmPass] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone:"",
    password:"",
    confirmPassword:"",
  });

  function changeHandler(event){

    setForm((form)=>{

      return{
        ...form,
        [event.target.name]: event.target.value
      }
    })
  }

  async function submitHandler(event){

    event.preventDefault();

    if(Object.values(form).some(value => 
      value === ""
    )){
      toast.error('Please fill all the fields');
      return;
    }

    if(form.password !== form.confirmPassword){
      toast.error("Password mismatch")
      return
    }


    
    dispatch(setLoading(true))
    try{
      await apiCall("POST",authApiUrl.sendOtp,{email : form.emailAddress})
      dispatch(setUser({...form,userType}))
      navigate("/submitotp");
      toast.success("Otp sent to mail")
    }
    catch(e){
      console.log(e.message)
      toast.error("Could not send otp")
    }
    dispatch(setLoading(false))

  }


  return (
    <div className=' bg-richblack900 h-[130vh] flex gap-[100px]'>
      
      <div className=' w-[508px]  p-[32px] flex flex-col  gap-[36px] mt-[25px] ml-[200px]'>
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
          
          
          <form className=' mt-[30px] w-[464px] ' onSubmit={submitHandler}>

              <div className='flex flex-row w-[444px] h-[76px] '>
                <div>
                   <label for="firstName" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 flex mb-[10px] '>First Name<div className='ml-[5px] text-pink200 '>*</div></label>
                    <input type="text" id="firstName" name="firstName" className='mr-[200px] w-[212px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200' placeholder='Enter first name' onChange={changeHandler} required></input>
                </div>
                  
                  <div className=' ml-[-160px]'>
                     <label for="lastName" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 flex mb-[10px] '>Last Name<div className='ml-[5px] text-pink200 '>*</div></label>
                      <input type="text" id="lastName" name="lastName" className='mr-[200px] w-[212px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200' placeholder='Enter last name' onChange={changeHandler} required></input>
                  </div>
              </div>
                

              <div className=' mt-[20px]'>
                    <label for="emailAddress" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px]'>Email Address <div className='ml-[5px] text-pink200'>*</div></label>
                     <input type="text" id="emailAddress" name="emailAddress" className='mr-[200px] ml-[10px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 scale-x-105' placeholder='Enter email address' onChange={changeHandler} required></input>
              </div>

              <div className=' mt-[20px]'>
                   <label for="phone" className='  w-full text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px]'>Phone Number <div className='ml-[5px] text-pink200'>*</div></label>

                  <div className=' flex gap-[20px] w-[455px] h-[48px] '>

                      <div className=' w-[81px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 '>
                          <div className=' flex items-center  justify-center'>
                            <FiPlus />
                              91
                          </div>
                      </div>
                      <input type="text" id="phone" name="phone" className=' w-full h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 scale-x-105 ml-[15px]' placeholder='12345 67890' onChange={changeHandler} required></input>
                  </div>
                   
              </div>

              <div className=' w-[444px] h-[76px]  flex mt-[20px] '>
                    <div className='flex flex-col '>
                        <div className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px] w-full'>Create Password <div className='ml-[5px] text-pink200'>*</div></div>
                        <div className=' relative h-[102px] mb-[-56px]'>
                        <input type={`${ showPass ? 'text' : 'password' }`} id="password" name="password" className='mr-[200px] w-[212px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 mb-[10px] absolute z-[10] left-[1px]' placeholder='Enter Password' onChange={changeHandler} required></input>
                        {
                            showPass ? (<FiEyeOff className=' z-[20] right-[210px] absolute  top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowPass(false)}}/>) : (<FiEye className='z-[20] absolute right-[210px] top-4 text-richblack200 cursor-pointer ' onClick={()=>{setShowPass(true)}}></FiEye>)
                        }
                        </div>
                    </div>
                    
                    <div className=' flex flex-col ml-[-160px]  '>
                        <div className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px] w-full'>Confirm Password <div className='ml-[5px] text-pink200'>*</div></div>
                        <div className=' relative h-[102px] mb-[-56px] '>
                        <input type={`${ showConfirmPass ? 'text' : 'password' }`} id="confirmPassword" name="confirmPassword" className='mr-[200px] w-[212px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 mb-[10px] absolute z-[10] left-[1px]' placeholder='Enter Password' onChange={changeHandler} required ></input>
                        {
                            showConfirmPass ? (<FiEyeOff className=' z-[20] absolute right-[210px] top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowConfirmPass(false)}}/>) : (<FiEye className='z-[20] absolute right-[210px] top-4  text-richblack200 cursor-pointer'  onClick={()=>{setShowConfirmPass(true)}}></FiEye>)
                        }
                        
                      </div>
                    </div>
                    

              </div>
              
              <div className='mt-[50px]'>
              <Button content={"Create Account"} isYellow={true} hasArrow={false} width={464} onClick={submitHandler} ></Button>
              </div>
              
              
          </form>
          
          
        </div>

        
      </div>
      <div></div>
    </div>
  )
}

export default SignUpPage
