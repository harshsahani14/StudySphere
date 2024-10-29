import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { useState } from 'react'
import { FiEye,FiEyeOff } from 'react-icons/fi'
import Button from '../components/Button'
import { apiCall } from '../apis/apiCall'
import { authApiUrl } from '../apis/apiUrl'
import toast from 'react-hot-toast'
import { setLoading } from '../slices/authSlice'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

const NewPassword = () => {

    const {loading} = useSelector(state => state.auth)
    const [showPass,setShowPass] = useState(false);
    const [showConfirmPass,setShowConfirmPass] = useState(false);
    const [form,setForm] = useState({
        newPassword:"",
        confirmPassword:""
    })

    const location  = useLocation()

    const changeHandler = (event)=>{
        setForm((form)=>{

            return{
              ...form,
              [event.target.name]: event.target.value
            }
          })
    }

    const clickHandler = async ()=>{


        setLoading(true)
        try{
            const token = location.pathname.split('/').at(2)
            console.log(token)
            const result = await apiCall("PUT",authApiUrl.resetPasswordStep2,{...form,token})

            toast.success("Password updated successfully")

        }
        catch(e){
            toast.error("Could not update password")
            console.log(e.message)
        }
        setLoading(false)

    }
  return (
    <div className=' flex justify-center items-center h-[679px] w-full bg-richblack900'>
      {
        loading ? (<Loader></Loader>) : (

            <div className=' w-[508px] h-[586px] flex flex-col p-[32px] gap-[24px]'>
                <p className=' font-[600] text-[30px] leading-[38px] text-richblack5 text-left'>Choose new password</p>
                <div className='w-[444px] h-[52px] font-[400] text-richblack300 text-[18px] leading-[26px] text-left'>Almost done. Enter your new password and youre <br></br>all set.</div>

                <form className=' mt-[15px] '>

                <div className='flex flex-col '>
                        <div className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px] w-full'>New Password <div className='ml-[5px] text-pink200'>*</div></div>
                        <div className=' relative h-[102px] mb-[-56px]'>
                        <input type={`${ showPass ? 'text' : 'password' }`} id="newPassword" name="newPassword" className='mr-[200px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 mb-[10px] absolute z-[10] left-[1px]' placeholder='Enter new password' onChange={changeHandler} required></input>
                        {
                            showPass ? (<FiEyeOff className=' z-[20] right-3 absolute  top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowPass(false)}}/>) : (<FiEye className='z-[20] absolute right-3 top-4 text-richblack200 cursor-pointer ' onClick={()=>{setShowPass(true)}}></FiEye>)
                        }
                        </div>
                </div>
                    
                    <div className=' flex flex-col mt-[30px]  '>
                        <div className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px] w-full'>Confirm new password <div className='ml-[5px] text-pink200'>*</div></div>
                        <div className=' relative h-[102px] mb-[-56px] '>
                        <input type={`${ showConfirmPass ? 'text' : 'password' }`} id="confirmPassword" name="confirmPassword" className='mr-[200px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 mb-[10px] absolute z-[10] left-[1px]' placeholder='Confirm new password' onChange={changeHandler} required ></input>
                        {
                            showConfirmPass ? (<FiEyeOff className=' z-[20] absolute right-3 top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowConfirmPass(false)}}/>) : (<FiEye className='z-[20] absolute right-3 top-4  text-richblack200 cursor-pointer'  onClick={()=>{setShowConfirmPass(true)}}></FiEye>)
                        }
                        
                      </div>
                    </div>

                    <div>

                    </div>

                    <div className=' mt-[45px]'>
                    <Button content={"Reset Password"} width={444} isYellow={true} hasArrow={false} onClick={clickHandler}></Button>
                    </div>
                    
                </form>

                <Link to={"/login"} className=' flex gap-[8px] items-center '>
                        <FaArrowLeftLong  className=' text-richblack5 text-[16px]'/>
                        <p className=' text-richblack5 text-[16px] font-[500] leading-[24px]'>Back to Login</p>
                </Link>
            </div>
        )
      }
    </div>
  )
}

export default NewPassword
