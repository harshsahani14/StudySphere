import React from 'react'
import IconPara from '../components/core/ContactUsPage/IconPara'
import { IoMdChatbubbles } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import ContactUsForm from '../components/core/ContactUsPage/ContactUsForm';

const ContactusPage = () => {
  return (
    <div className=' overflow-x-hidden'>
      
      {/* Section 1 */}
      <div className='w-full h-[979px] py-[90px] px-[120px] pl-[180px] flex gap-[52px] bg-richblack900'>


        <div className='w-[450px] h-[390px] rounded-[12px] p-[24px] flex gap-[24px] bg-richblack800 flex-col'>

            <IconPara icon={<IoMdChatbubbles></IoMdChatbubbles>} heading={'Chat on us'} para1={'Our friendly team is here to help.'} para2={"@mail address"}></IconPara>
            <IconPara icon={<FaEarthAmericas></FaEarthAmericas>} heading={"Visit us"} para1={'Come and say hello at our office HQ.'} para2={"Here is the location/ address"}></IconPara>
            <IconPara icon={<IoCall></IoCall>} heading={'Call us'} para1={"Mon - Fri From 8am to 5pm"} para2={"+123 456 7890"} ></IconPara>

        </div>
 
        <div className=' w-[698px] h-[799px] border-[1px] p-[52px] border-richblack600 rounded-[12px] '>
          <ContactUsForm heading={'Got a Idea? We’ve got the skills. Let’s team up'} para={"Tell us more about yourself and what you’re got in mind."} isContactPage={true}></ContactUsForm>
        </div>
      </div>

      {/* Section 2 */}
      <div></div>

      {/* Section 3 */}
      <div></div>
    </div>
  )
}

export default ContactusPage
