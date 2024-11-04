import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader'
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { GiBackwardTime } from "react-icons/gi";
import { setLoading } from '../slices/authSlice';
import { apiCall } from '../apis/apiCall';
import { authApiUrl } from '../apis/apiUrl';
import {toast} from 'react-hot-toast'
const OtpPage = () => {

  const {loading,signUpDetails} = useSelector(state => state.auth);
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitHandler = async ()=>{

    dispatch(setLoading(true))

    try{

        
        const result = await apiCall("POST",authApiUrl.signup,{
                                                            fName:signUpDetails.firstName,
                                                            lName:signUpDetails.lastName,
                                                            email:signUpDetails.emailAddress,
                                                            otp:otp,
                                                            password:signUpDetails.password,
                                                            confirmPassword:signUpDetails.confirmPassword,
                                                            phone:signUpDetails.phone,
                                                            role:signUpDetails.userType
                                                                })

       console.log(result)
       toast.success("User registered successfully")
        navigate("/login")
    }
    catch(e){
        console.log(e.message)
        toast.error("Could not register user")
    }
    dispatch(setLoading(false))

  }

  const clickHandler = async () =>{

    dispatch(setLoading(true))
    try{
      await apiCall("POST",authApiUrl.sendOtp,{email : signUpDetails.emailAddress})
      toast.success("Otp sent to mail")
    }
    catch(e){
      console.log(e.message)
      toast.error("Could not send otp")
    }
    dispatch(setLoading(false))

  }

  return (
    <div className=' h-[679px] w-full bg-richblack900 flex justify-center items-center gap-[24px] p-[32px]'>
      {
        loading ? (<Loader></Loader>) : (

          <div className=' flex flex-col w-[508px] h-[370px] gap-[24px]'>

            <h1 className=' text-left font-[600] text-[30px] leading-[38px] text-richblack5'>Verify email</h1>
            <p className=' font-[600] text-[18px] leading-[26px] text-richblack100 text-left'>A verification code has been sent to you. Enter the code below</p>


            <div className=' w-full h-[48px] flex gap-[20px] mt-[15px]'>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{width:'54.33px',
                              height:"50px",
                              backgroundColor:"#161D29",
                              borderRadius:"8px",
                              padding:"12px",
                              color:"#FFFFFF",
                              boxShadow:'2px 2px 0px 0px #424854',
                    
                }}
                containerStyle={"flex gap-[10px] "}
                placeholder='------'
                
            />
            </div>

            <div className=' mt-[20px]'>
            <Button content={"Verify and register"} width={464} isYellow={true} hasArrow={false} onClick={submitHandler}></Button>
            </div>

            <div className=' justify-between flex w-[444px] h-[28px]'>
                  <Link to={"/login"} className=' flex gap-[8px] items-center '>
                        <FaArrowLeftLong  className=' text-richblack5 text-[16px]'/>
                        <p className=' text-richblack5 text-[16px] font-[500] leading-[24px]'>Back to Login</p>
                  </Link>
                  <div className='flex gap-[8px] items-center justify-center cursor-pointer' onClick={clickHandler}>
                      <GiBackwardTime className='w-[21px] h-[21px] text-blue100 ' />
                      <p className=' text-blue100 text-[16px] font-[500] leading-[24px]'>Resend it</p>
                  </div>
            </div>
          </div>

          

        )
      }
    </div>
  )
}

export default OtpPage
