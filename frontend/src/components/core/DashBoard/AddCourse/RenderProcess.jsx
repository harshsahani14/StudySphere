import React from 'react'
import { useSelector } from 'react-redux'
import CourseBuilderForm from './CourseBuilderForm';
import CourseInfoForm from './CourseInfoForm';
import CoursePublishForm from './CoursePublishForm';
import SingleStep from './SingleStep';
const RenderProcess = () => {

    const {step} = useSelector(state=>state.course)

    const steps = [

        {
            id:1,
            text:"Course Information"
        },
        {
            id:2,
            text:"Course Builder"
        },
        {
            id:3,
            text:"Publish"
        }
    ]
  return (
    <div className=' '>
      {/* Steps */}
        <div className=' w-[665px] gap-[-1px] h-[68px] flex ml-[65px] mt-[25px] mx-auto'>

        {
            steps.map( (item) => (
                <SingleStep id={item.id} title={item.text}></SingleStep>
            ) )
        }
        </div>

        {step == 1  && <CourseInfoForm></CourseInfoForm>}
        {step == 2  && <CourseBuilderForm></CourseBuilderForm>}
        {step == 3  && <CoursePublishForm></CoursePublishForm>}
    </div>
  )
}

export default RenderProcess
