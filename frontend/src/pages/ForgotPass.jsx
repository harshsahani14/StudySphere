import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader'
import {setLoading} from '../slices/authSlice'
import { apiCall } from '../apis/apiCall'
import { authApiUrl } from '../apis/apiUrl'
import {toast} from "react-hot-toast"
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPass = () => {

    const {loading} = useSelector(state => state.auth)

    const [emailSent,setEmailSent] = useState(false)
    const [email,setEmail] = useState("")
    const dispatch = useDispatch()

    const clickHandler = async () =>{
        dispatch(setLoading(true))
        try{
            // api call to send email

            const result = await apiCall("POST",authApiUrl.resetPasswordStep1,{email:email})

            
            toast.success("Email sent for reset password")
            setEmailSent(true)
            console.log(result)
            

        }catch(e){
            console.log(e.message)
            toast.error("Could not send email for reseting password")
        }
        dispatch(setLoading(false))
        
    }

  return (
    <div className=' flex justify-center  items-center bg-richblack900 w-full h-[679px] overflow-y-hidden'>
        {
            loading ? ( <Loader></Loader> ) : (       

                <div className={` ${ emailSent ? 'w-[508px] h-[310px]' : 'w-[508px] h-[448px]'} flex flex-col gap-[36px] p-[32px]  mb-[50px] `}>

                    <p className='font-inter font-[600] text-[30px] leading-[36px] text-richblack5 text-left'>
                        {
                            emailSent ? 'Check email' : 'Reset your password'
                        }
                    </p>
                    <p className='font-inter font-[400] text-[18px] leading-[26px] text-richblack300 text-left' >
                        {
                            emailSent ? ` We have sent the reset email to ${email} ` : 'Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery'
                        }
                    </p>
                    
                    <form>
                        <div>
                            {
                                emailSent ? (<div className='invsible'></div>) : 
                                ( 
                                    <div>
                                        <label for="emailId" className='font-inter text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[320px]  flex mb-[10px]'>Email Address <div className='ml-[5px] text-pink200'>*</div></label>
                                        <input type="text" id="emailId" name="emailId" className='font-inter mr-[200px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200'  onChange={(event)=> setEmail(event.target.value) } placeholder='Enter email address' required></input>
                                    </div>
                                ) 
                            }
                        </div>

                        <button className='font-inter bg-yellow w-[444px] h-[48px] rounded-[8px] p-[12px] flex justify-center items-center mt-[40px] text-[16px] text-richblack900 font-[500]' onClick={clickHandler}>
                            {
                                emailSent ? "Resend mail" : "Reset password"
                            }
                        </button>
                    </form>
                    <Link to={"/login"} className=' flex gap-[8px] items-center '>
                        <FaArrowLeftLong  className=' text-richblack5 text-[16px]'/>
                        <p className='font-inter text-richblack5 text-[16px] font-[500] leading-[24px]'>Back to Login</p>
                    </Link>
                    
                </div>
               

            )
        }
    </div>
  )
}

export default ForgotPass
