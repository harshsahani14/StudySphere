import React from 'react'
import { useSelector } from 'react-redux'

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
        <div className='w-[665px] gap-0 h-[68px] flex ml-[65px] mt-[25px]'>

        {
            steps.map( (item) => (
                <SingleStep id={item.id} title={item.text}></SingleStep>
            ) )
        }
        </div>
    </div>
  )
}

export default RenderProcess
