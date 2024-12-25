import React, { useEffect, useState } from 'react'

const RequirementField = ({name,register,errors,setValue,getValues}) => {

    const [currRequirement,setCurrRequirement] = useState("");
    const [requirementList,setRequirementList] = useState([]);
    
    const addRequirement = ()=>{

        if(currRequirement){
            setRequirementList([...requirementList,currRequirement]);
            setCurrRequirement("");
        }
    }

    const deleteRequirement = (idx)=>{

        const currRequirementList = [...requirementList];
        currRequirementList.splice(idx,1);
        setRequirementList(currRequirementList);
    }

    useEffect(()=>{
        register(name,{
            required:true,
            
        })
    },[])

    useEffect(()=>{
        setValue(name,[...requirementList])
    },[requirementList])


  return (
    <div>
    
       <div className='mt-[5px]'>
            <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Requirements/Instructions <span className=' text-pink300 '>*</span></div>
            <input className='w-[617px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack700 mt-[10px] shadow-toggle text-richblack200'
            type='text'
            placeholder='Enter requirements of the course'
            onChange={(e)=>setCurrRequirement(e.target.value)}
            value={currRequirement}
            name={name}
            >
            </input>
        </div>
        <button type='button' onClick={addRequirement}
            className=' text-yellow font-[700] font-inter text-[16px] leading-[24px] mt-[2px]'
        >
            Add
        </button>
        
        {
            requirementList.length>0 && (
                <ul className=' '>
                    {
                        requirementList.map((requirement,idx)=>
                            
                            (
                                    <li key={idx} className=' flex gap-2  '>
                                            <span className='text-richblack5 font-inter font-[500]'>{requirement}</span>
                                            <button type='button' className='text-richblack300  font-inter font-[500]' onClick={()=>deleteRequirement(idx)}>Clear</button>
                                    </li>
                            )
                        )
                    }
                </ul>   
            )  
        }

        {
            errors.name && <span className=''>Course {name} is needed</span>
        }
        
    </div>
  )
}

export default RequirementField
