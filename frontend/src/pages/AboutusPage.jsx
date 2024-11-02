import React from 'react'
import HighLightText from '../components/HighLightText'
import AboutUsImg1 from "../assets/images/AboutUsImg1.png"
import AboutUsImg2 from "../assets/images/AboutUsImg2.png"
import AboutUsImg3 from "../assets/images/AboutUsImg3.png"
import AboutUsImg4 from "../assets/images/AboutUsImg4.png"
import HeadingAndText from '../components/HeadingAndText'
import Button from '../components/Button'
import AboutUsBox from '../components/AboutUsBox'
import ContactUsForm from '../components/core/ContactUsPage/ContactUsForm'


const AboutusPage = () => {
  return (
    <div >

      {/* Section 1 */}
      <div className=' w-full h-[618px] bg-richblack700 flex flex-col  pt-[80px] px-[120px] gap-[52px] items-center'>
          <div className=' w-[1200px] h-[258px] gap-[38px] flex flex-col'>

              <div className=' flex w-[113px] h-[44px] p-[4px] gap-[5px] font-inter text-center text-[16px] leading-[24px] font-[500] text-richblack200 mx-auto'>About us</div>

              <div className='w-[913px] h-[176px] px-[52px] flex flex-col gap-[16px] mx-auto '>
                <p className=' font-inter font-[600] text-[36px] leading-[44px] text-center text-richblack5 '>Driving Innovation in Online Education for a <HighLightText text={"Brighter future"} /></p>
                <p className=' font-inter font-[500] text-[16px] leading-[24px] text-center text-richblack300'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
              </div>
          </div>
          <div className=' w-[1200px] h-[311px] gap-[24px] flex '>
            <img src={AboutUsImg1} className=' w-[384px] h-[311px]'></img>
            <img src={AboutUsImg2} className=' w-[384px] h-[311px]'></img>
            <img src={AboutUsImg3} className=' w-[384px] h-[311px]'></img>
          </div>

      </div>

      {/* Section 2 */}
      <div className=' w-full h-[1304px] bg-richblack900  '>

        <div className=' w-full h-[376px] border-b-[1px] border-b-richblack700 py-[90px] px-[120px] flex gap-[10px] justify-center '>
          <div className=' w-[1200px] h-[156px]  mt-[50px] flex items-center '>
            {/* <img src={SemicolonStart} width={20.28} height={15.49}></img> */}
            <p className='text-[36px] leading-[52px] text-center font-[600] font-inter text-richblack5'><span className='text-richblack600 text-[40px] mr-2 '> ❝</span>We are passionate about revolutionizing the way we learn. Our <br></br>innovative platform <span className=' text-blue100'>combines technology</span>, <span className=' gradient-text1'>expertise</span>, and community to create an <span className='gradient-text2'>unparalled education experience</span><span className='text-richblack600 ml-2'>❞</span> </p>
            {/* <img src={SemicolonEnd} width={20.28} height={15.49}></img> */}
            </div>
        </div>

        <div className=' w-full h-[520px] flex gap-[98px] px-[120px] py-[90px] justify-center'> 

          <div className=' w-[486px] h-[372px] gap-[24px] flex flex-col'>
              <p className=' font-inter font-[600] text-[36px] leading-[44px] gradient-text3'>Our Founding Story </p>

              <p className=' font-inter font-[500] text-[16px] leading-[24px] text-richblack300'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                <br></br>
                <br></br>

                As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
              </p>
          </div>

          <div className=' w-[534px] h-[342px] p-[32px] flex gap-[2px] justify-center items-center relative'>
            
            <div className=' bg-gradient-to-r from-[#EC008C] to-[#FC6767] blur-[68px] opacity-[0.33] w-[372.95px] h-[257.05px] rounded-[500px] absolute z-0 left-[-60px] top-[-40px]'></div>
            <img src={AboutUsImg4} className='w-[470px] h-[278px] z-10'></img>
          </div>
        </div>

        <div className=' w-full h-[416px] px-[120px] py-[90px] flex gap-[98px] justify-center '>

          <div className='w-[486px] h-[212px] flex gap-[24px] flex-col' >
            <p className=' font-inter font-[600] text-[36px] leading-[44px] gradient-text2 text-left'>Our Vision</p>
            <div className=' w-[486px] h-[144px] flex gap-[16px] '>
              <p className='text-richblack300 font-inter text-[16px] leading-[24px] font-[500] text-left'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
            </div>
          </div>

          <div className='w-[486px] h-[212px] flex gap-[24px] flex-col' >
            <p className=' font-inter font-[600] text-[36px] leading-[44px] gradient-text text-left'>Our Mission</p>
            <div className=' w-[486px] h-[144px] flex gap-[16px] '>
              <p className='text-richblack300 font-inter text-[16px] leading-[24px] font-[500] text-left'>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section3 */}
      <div className='w-full h-[254px] bg-richblack800 border-[1px] border-richblack800 px-[120px] py-[90px] flex gap-[10px] justify-center items-center'>
          <HeadingAndText heading={"5K"} text={"Active Students"}></HeadingAndText>
          <HeadingAndText heading={"10+"} text={"Mentors"}></HeadingAndText>
          <HeadingAndText heading={"200+"} text={"Courses"}></HeadingAndText>
          <HeadingAndText heading={"50+"} text={"Awards"}></HeadingAndText>
      </div>

      {/* Section 4 */}
      <div className=' w-full h-[768px] px-[120px] py-[90px] bg-richblack900  '>

        

          <div className='flex flex-col gap-0  '>

                <div className='flex'>
                    <div className='w-[589px] h-[268px] flex flex-col gap-[12px]'>
                        <p className=' text-[36px] leading-[44px] text-left font-[600] font-inter text-richblack5'>World-Class Learning for <br></br><HighLightText text={"Anyone, Anywhere"}></HighLightText></p>
                        <div className=' w-[559px] h-[168px] gap-[12px] flex flex-col '>

                          <p className=' font-[500] font-inter text-[16px] leading-[24px] text-richblack300 text-left'>Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>

                          <div className=' mt-[35px]'>
                          <Button content={"Learn More "} isYellow={true} hasArrow={false}></Button>
                          </div>
                          
                        </div>

                    </div>

                    <AboutUsBox heading={"Curriculum Based on Industry Needs"} para={"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."} isRichBlack700={true}></AboutUsBox>
                    <AboutUsBox heading={" Our Learning Methods"} para={"The learning process uses the namely online and offline."} isRichBlack700={false}></AboutUsBox>
                    </div>
                
              </div>
              <div className=' flex gap-0'>
                  <div className=' bg-richblack900 w-[294.5px] h-[294px]'></div>
                  <AboutUsBox heading={"Certification"} para={"You will get a certificate that can be used as a certification during job hunting."} isRichBlack700={true}></AboutUsBox>
                  <AboutUsBox heading={"Rating Auto-grading"} para={"You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."} isRichBlack700={false}></AboutUsBox>
                  <AboutUsBox heading={"Ready to Work"} para={"Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."} isRichBlack700={true}></AboutUsBox>
                  

              </div>
          
          
      </div>

      {/* Section 5 */}
      <div className=' w-full h-[805px] pt-[90px] px-[420px]  bg-richblack900 '>
        <ContactUsForm heading={"Get in touch"} para={"We’d love to here for you, Please fill out this form."}></ContactUsForm>
      </div>

    </div>
  )
}

export default AboutusPage
