import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import Button from '../../Button';
import { apiCall } from '../../../apis/apiCall';
import { contactUsApiURL } from '../../../apis/apiUrl';
import {toast} from "react-hot-toast"

const ContactUsForm = ({heading,para,isContactPage}) => {

    const [loading,setLoading] = useState()

    const submitContactForm = async (data)=>{
        console.log(data)

        const toastId = toast.loading("Loading")
        try{
            const result = await apiCall("POST",contactUsApiURL.contactUs,{
                firstName:data.firstName, 
                lastName:data.lastName,
                emailId:data.email,
                phoneNo:data.phone,
                message:data.message
            }) 

            console.log(result);

            toast.dismiss(toastId);

            toast.success("Message sent sucessfully")


        }
        catch(e){
            toast.dismiss(toastId);
            console.log(e.message)

            toast.error("Cannot send message")
        }
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSucessful },
    } = useForm();

    useEffect(()=>{
        if(isSubmitSucessful){
            reset({
                firstName:"",
                lastName:"",
                email:"",
                phone:"",
                message:""
            })
        }
    },[isSubmitSucessful])

  return (
    <div className=' flex flex-col justify-center items-center w-[600px] h-[683px] gap-[65px] '>

        <div className=' flex flex-col w-[600px] h-[80px] gap-[16px] '>
            <p className={` ${isContactPage ? 'text-left' : 'text-center'} font-inter text-[36px] leading-[44px]  text-richblack5 font-[600]`}>{heading}</p>

            <div className={`w-[600px] h-[24px] gap-[12px] flex font-inter font-[500] text-[16px] leading-[24px]  text-richblack300  ml-[120px] ${ isContactPage ? ' translate-x-[-120px] ' : 'mx-auto' }`}>

                {para}
            </div>


        </div>

        <form onSubmit={handleSubmit(submitContactForm)} className={isContactPage ? 'mt-[30px]' : ' ml-[200px]'} >

        {/* First & Last name */}
        <div className='flex flex-row w-[444px] h-[76px] '>
                    <div>
                          <label for="firstName" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 flex mb-[10px] font-inter'>First Name<div className='ml-[5px] text-pink200 font-inter '>*</div></label>
                          
                            <input type="text" id="firstName" name="firstName" className={`mr-[200px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-button text-richblack200 font-inter h-[48px] ${isContactPage ? ' w-[287px] ' :'w-[212px]  '}`} placeholder='Enter first name' {...register("firstName",{required:true})} ></input>
                            
                    </div>
                          
                    <div className=' ml-[-160px]'>
                            <label for="lastName" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 flex mb-[10px] font-inter '>Last Name<div className='ml-[5px] text-pink200 '>*</div></label>
                              <input type="text" id="lastName" name="lastName" className={`mr-[200px] w-[212px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-button text-richblack200 font-inter ${isContactPage ? ' w-[287px]' : ' w-[212px]'}`} placeholder='Enter last name' {...register("lastName",{required:true})} ></input>
                              
                              
                    </div>
        </div>
                            
        {/* Email */}

        <div className=' mt-[20px]'>
                            <label for="emailAddress" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px] font-inter'>Email Address <div className='ml-[5px] text-pink200'>*</div></label>
                            <input type="text" id="emailAddress" name="emailAddress" className={`mr-[200px] ml-[15px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-button text-richblack200 scale-x-105 font-inter ${isContactPage ? ' w-[97%]' : 'w-[212px]'}`} placeholder='Enter email address' {...register("email",{required:true})} ></input>
                            
        </div>

        {/* Phone */}
        <div className=' mt-[20px]'>
                          <label for="phone" className='  w-full text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px] font-inter '>Phone Number <div className='ml-[5px] text-pink200'>*</div></label>

                          <div className={` flex gap-[20px] h-[48px] ${isContactPage ? 'w-[602px]' : ' w-[455px] '}`}>

                              <div className=' w-[81px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-button text-richblack200 '>
                                  <div className=' flex items-center  justify-center font-inter' >
                                    <FiPlus />
                                      91
                                  </div>
                              </div>
                              <input type="text" id="phone" name="phone" className={` w-full h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-button text-richblack200 scale-x-105 ml-[15px] font-inter 
                              ${isContactPage ? ' w-[493px] ' : ' w-[212px] '}
                              `} placeholder='12345 67890' {...register("phone",{
                                
                                required:{value:true,message:'Enter your phone number'},
                                maxLength:{value:10,message:'Invalid phone number'},
                                minLength:{value:8,message:'Invalid phone number'}
                                
                                
                                })}></input>
                                
                              
                          </div>
                          
        </div>

        {/* Message */}
        <div className='mt-[20px]'>
                          <label for="firstName" className=' text-left font-[400] text-[14px] leading-[22px] text-richblack5 flex mb-[10px] font-inter '>Message<div className='ml-[5px] text-pink200 '>*</div></label>
                          
                            <textarea type="text" id="message" name="message" className={`mr-[200px] h-[123px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-button text-richblack200 ${isContactPage ? ' w-[102%]' : ' w-[464px] '}`} placeholder='Enter message' {...register("message",{required:true})} ></textarea>
                            
        </div>
        
        {/* <div className=' mt-[30px]'>
        <Button isYellow={true} hasArrow={false} width={464} content={"Send message"}></Button>
        </div> */}

        <button type='submit' className={` ${isContactPage ? ' w-[102.5%]' : 'w-[464px]'} h-[48px] bg-yellow rounded-md text-richblack900 flex justify-center items-center font-inter font-[500] mt-[30px] `}> Send Message</button>

        </form>
      
    </div>
  )
}

export default ContactUsForm
