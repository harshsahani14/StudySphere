import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import RequirementField from './RequirementField';
import { setStep } from '../../../../slices/courseSlice';
import Button from '../../../Button';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const CourseInfoForm = () => {


    // const [courseInfoForm,setCourseInfoForm]=useState(

    //     {
    //         courseTitle:"",
    //         coursDescription:"",
    //         coursePrice:"",
    //         courseCategory:"",
    //         courseTags:[],
    //         courseThumbnail:"",
    //         courseBenefits:"",
    //         courseRequirements:[]
    //     }
    // )

    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
        getValues
    } = useForm();

    
      const dispatch = useDispatch();
      const {course,editCourse } = useSelector(state=>state.course);
      const {categories} = useSelector(state=>state.category)
      const [loading,setLoading] = useState(false);

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

    console.log(categories)
      

    const submitFunction = async(data)=>{

    }
      

  return (
    <div className='relative w-[665px] h-fit rounded-[8px] p-[24px] top-[70px] left-[47px] bg-richblack800 border-[1px] border-richblack700 '>
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
            {
                errors.courseName && (<div className=''>Course title is required</div>)
            }
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
            {
                errors.courseDescription && (<div className=' text-richblack5'>Course description is required</div>)
            }
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
                {
                errors.coursePrice && (<div className=''>Course Price is required</div>)
                }
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
            {
                errors.courseCategory && (<div className=''>Course Category is required</div>)
            }
        </div>

        {/* Tags input here */}
        {/* Upload input here */}
        
        <div className='mt-[10px]'>
            <div className=' text-richblack5 font-inter text-[14px] leading-[22px]'>Benefits of the course <span className=' text-pink300 '>*</span></div>
            <textarea className='w-[617px] h-[127px] rounded-[8px] p-[12px]  bg-richblack700 mt-[10px] shadow-toggle text-richblack200'
            type='textarea'
            placeholder='Enter Benefits of the course'
            {...register('courseBenefits',{required:true})}
            >
            </textarea>
            {
                errors.courseBenefits && (<span>Course Benefits are required</span>)
            }
        </div>

        
        <RequirementField
            name="courseRequirement"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
        ></RequirementField>

        
        <div className=' flex gap-4 justify-end  '>
            <button
            onClick={()=> dispatch(setStep(2)) } className=' w-[250px] h-[40px] bg-richblack300 rounded-md text-black font-inter font-[700] hover:scale-105 duration-200 text-richblack900  '>
                Continue Without Saving
            </button>
            <button type='submit'  className='bg-yellow text-richblack900 w-[137px] h-[40px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px] font-[500] flex justify-center items-center gap-2 hover:scale-105 duration-200'>
                Next
                <HiOutlineArrowSmallRight/>
            </button>
        </div>
      </form>
    </div>
  )
}

export default CourseInfoForm
