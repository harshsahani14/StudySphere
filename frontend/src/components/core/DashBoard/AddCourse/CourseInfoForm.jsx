import React, { useEffect, useState } from 'react'
import { get, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import RequirementField from './RequirementField';
import { setStep } from '../../../../slices/courseSlice';
import Button from '../../../Button';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { AiOutlineCloudUpload } from "react-icons/ai";

const CourseInfoForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
        getValues,
        watch
    } = useForm();

    // const courseThumbnail = watch('courseThumbnail') 
    
    
      const dispatch = useDispatch();
      const {course,editCourse } = useSelector(state=>state.course);
      const {categories} = useSelector(state=>state.category)
      const [loading,setLoading] = useState(false);
    //   const currForm = getValues('courseThumbnail')
    //   const [thumbnail,setThumbnail] = useState("")
    //   const [currTag,setCurrTag] = useState("")
    //   const [tags,setTags] = useState([]);

    //   const addTag = ()=>{

    //     setTags([...tags,currTag]);
    //     setCurrTag("");
    //   }

    //   const removeTag = (idx)=>{
    //     const currTagList = tags;
    //     currTagList.splice(idx,1);
    //     setTags(currTagList);
    //   }

      useEffect(()=>{

        // if(editCourse){
        //     setValue("courseTitle",course.courseTitle);
        //     setValue("courseDescription",course.courseDescription);
        //     setValue("coursePrice",course.coursePrice);
        //     setValue("courseTitle",course.courseTitle);
        //     setValue("courseTitle",course.courseTitle);
        //     setValue("courseTitle",course.courseTitle);
        // }

        
        
      })

   


    const submitFunction = async(data)=>{

    }
      

  return (
    <div className='relative w-[665px] h-fit rounded-[8px] p-[24px] top-[70px] left-[47px] bg-richblack800 border-[1px] border-richblack700'>
      <form onClick={handleSubmit(submitFunction)} className='flex gap-[20px] flex-col'>

        <div className='mt-[5px]'>
            <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Course Title <span className=' text-pink300 '>*</span></div>
            <input className='w-[617px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack700 mt-[10px] shadow-toggle text-richblack200'
            type='text'
            placeholder='Enter course title'
            name='courseName'
            id='courseName'
            {...register('courseName',{ required: true })}
            >
            </input>
            
        </div>

        <div className='mt-[10px]'>
            <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Course Short Description <span className=' text-pink300 '>*</span></div>
            <textarea className='w-[617px] h-[127px] rounded-[8px] p-[12px]  bg-richblack700 mt-[10px] shadow-toggle text-richblack200'
            type='textarea'
            placeholder='Enter Description'
            {...register('courseDescription',{required:true})}
            name='courseDescription'
            id='courseDescription'
            >
            </textarea>
            
        </div>

        <div className='mt-[10px] relative'>
        <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Price<span className=' text-pink300 '>*</span></div>
            <div className='w-[617px] h-[48px] bg-richblack700 shadow-toggle rounded-[8px] mt-[10px]'>
                <HiOutlineCurrencyRupee className=' w-[22px] h-[22px] absolute z-20 top-[45px] left-2 text-richblack200 ' />
                <input className='absolute z-10 w-[555px] h-[40px]  p-[12px] gap-[12px] bg-richblack700 top-[36px]  ml-8  text-richblack200'
                type='text'
                placeholder={` Enter Price`}
                {...register('coursePrice',{required:true,valueAsNumber:true})}
                name='coursePrice'
                id='coursePrice'
                >
                </input>
               
            </div>
        </div>

        <div className='mt-[10px] relative'>
        <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Category<span className=' text-pink300 '>*</span></div>
            <select className=' w-[617px] h-[48px] rounded-[8px] p-[12px] bg-richblack700 mt-[10px] gap-[16px] text-richblack200 shadow-toggle '
            id='category'
            defaultValue=""
            {...register("courseCategory",{required:true})}
            name='courseCategory'
            
            >
                <option value="" disabled>Choose a category</option>
                {
                    categories.map((category,idx)=>

                        ( 
                            <option className='' value={category.name} key={idx}>{category.name} </option>
                        )
                    )
                }
            </select>
            
        </div>

        {/* Tags input here */}

        {/* <div className='mt-[5px]'>
            <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Tags <span className=' text-pink300 '>*</span></div>
            {
                tags.length > 0 && (
                    <div>
                        {
                            tags.map((tag,idx)=>{

                                return (
                                    <div key={idx} className=' bg-[#88662D] w-fit h-[30ppx] rounded-r-xl rounded-l-xl p-1'>
                                        {tag}

                                     </div>   
                                )
                            })
                        }
                    </div>
                )
            }
            <input className='w-[617px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack700 mt-[10px] shadow-toggle text-richblack200'
            type='text'
            placeholder='Enter tag and press space'
            name='courseTags'
            id='courseTags'
           
            >
            </input>
            {
                errors.courseTag && (<div className=''>Course tags are required</div>)
            }
        </div> */}
        
        {/* Upload input here */}

        {/* <div className=' flex flex-col'>

        <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Course Thumbnail<span className=' text-pink300 ml-1 '>*</span></div>

        
        
        <div className=' w-[617px] h-[206px] rounded-[8px] border-[1px] border-dashed border-richblack600 bg-richblack700 mt-[10px] cursor-pointer' onClick={()=> document.getElementById('fileInput').click()}>
            
        <div className=' flex flex-col py-[32px] px-[12px] gap-[8px] justify-center items-center '   >
                        <div className='w-[46px] h-[46px] rounded-[200px] p-[12px] bg-[#171717] flex justify-center items-center'>
                            <AiOutlineCloudUpload className='w-[30px] h-[30px] text-yellow'/>
                        </div>
                        <p className=' text-richblack200 font-inter font-[400] text-[12px] leading-[20px] text-center'>Drag and drop an image, or <span className='text-yellow font-[600]'>Browse</span> <br></br>
                        Max 6MB each (12MB for videos)</p>

                        <div className='w-[383px] h-[40px] p-[10px] gap-[52px] flex font-inter font-[600] text-[12px] leading-[20px] text-richblack400 items-center justify-center'>
                            <p className=' flex gap-2 justify-center items-center'><span className='text-[25px] mb-3'>.</span> Aspect ratio 16:9</p>
                            <p className=' flex gap-2 justify-center items-center mb-[1px]'><span className='text-[25px] mb-[14px]'>.</span> Recommended size 1024x576</p>
                            
                        </div>
                    </div> 
            

        </div>
        </div> */}
        
        <div className='mt-[10px]'>
            <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Benefits of the course <span className=' text-pink300 '>*</span></div>
            <textarea className='w-[617px] h-[127px] rounded-[8px] p-[12px]  bg-richblack700 mt-[10px] shadow-toggle text-richblack200'
            type='textarea'
            placeholder='Enter Benefits of the course'
            {...register('courseBenefits',{required:true})}
            >
            </textarea>
           
        </div>

        
        <RequirementField
            name="courseRequirement"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
        ></RequirementField>

        
        <div className=' flex gap-4 justify-end   '>
            <button
            onClick={()=> dispatch(setStep(2)) } className=' w-[250px] h-[40px] bg-richblack300 rounded-md text-black font-inter font-[700] hover:scale-105 duration-200 text-richblack900  '>
                Continue Without Saving
            </button>
            <button type='submit'  className='bg-yellow text-richblack900 w-[137px] h-[40px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px]  flex justify-center items-center gap-2 hover:scale-105 duration-200 font-[700]'>
                Next
                <HiOutlineArrowSmallRight/>
            </button>
        </div>
      </form>

      
      {/* Input field for thumbnail field */}
      {/* <input {...register('courseThumbnail',{required:true})} value={thumbnail}  type='file' id='fileInput' name='avatar' accept='.png,.jpg,.jpeg' defaultValue={null} onChange={(e)=> {
        setValue("courseThumbnail",e.target.value)
        setThumbnail(e.target.value)
      }}  className='hidden ' ></input> */}
      
    </div>
  )
}

export default CourseInfoForm
