import React from 'react'
import { useSelector } from 'react-redux'
import { TiTick } from "react-icons/ti";

const SingleStep = ({id,title}) => {

    const {step} = useSelector(state=>state.course);
  return (
    <div className='w-[220.3px] h-[68px]  '>

                  

                            <div className=' flex flex-col gap-[10px] justify-center items-center'>
                                
                                <div className=' flex gap-0 items-center'>
                                    {
                                        id!==1 && (<div className='text-richblack5'>-------------</div>)
                                    }
                                <div className={` border-[1px]  w-[38px] h-[38px] rounded-full flex justify-center items-center ${ step == id ? " bg-[#251400] text-yellow border-yellow" : " bg-richblack800 text-richblack300 border-richblack700 "} 
                                ${step>id && "bg-yellow text-richblack900"}
                                `} >
                                {
                                    step > id ? (<TiTick className='w-[24px] h-[24px]'></TiTick>) : (<div className=' font-inter font-[600] text-[18px] leading-[26px]'>{id}</div>)
                                }
                                </div>

                                {
                                        id!==3 && (<div className='text-richblack5'>-------------</div>)
                                }
                                </div>
                                
                                <p className={ ` ${step>=id ? " text-richblack5" : " text-richblack300"} font-inter font-[400] text-[14px] leading-[22px]  text-center` }>{title}</p>
                            </div>
                               
                            
                            

    </div>
  )
}

export default SingleStep
