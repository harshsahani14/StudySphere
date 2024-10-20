import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link,Outlet } from 'react-router-dom';
import homePageVideo1 from '../assets/videos/homePageVideo1.mp4'
import whiteBg from '../assets/images/whiteBg.png'
import Button from '../components/Button';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {


  const code = `<!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width">
                <title>11 Line HTML</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                </body>
                </html>`
    
  return (
    <div className=' overflow-x-hidden h-100% '>

      {/* Section 1 */}
        <div className='bg-richblack900'>

            <div className=' w-[913px] mt-[124px] h-[276px] mx-auto flex flex-col gap-[38px] justify-center items-center ' >

                <Link to="/signup">
                        <button className=' w-[227px] h-[44px] flex flex-row p-[4px] gap-[5px] justify-center items-center bg-richblack800 rounded-[500px] text-richblack200  '>
                            <div><p className=' text-md font-[500] text-[16px]'>Become an Instructor</p></div>
                            <div className=''><HiOutlineArrowSmallRight /></div>
                        </button>
                </Link>
                

                <h1 className=' text-center text-[36px] text-richblack5 font-semibold'>Empower Your Future with <span className=' text-blue50'>Coding Skills</span></h1>
                <p className=' text-center text-md font-[500] text-[16px] leading-[24px] text-richblack200'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>


                <div className='w-[308px] h-[48px] flex gap-[24px]'> 

                    <Link to="/signup">
                    <button className=' bg-yellow w-[135px] h-[48px] rounded-[8px] py-[12px] px-[24px] text-md text-[16px] font-[500]'> Learn More</button>
                    </Link>

                    <Link to='/login'>
                    <button className=' bg-richblack800 rounded-[8px] w-[149px] h-[48px] py-[12px] px-[24px]gap-[8px] shadow-button text-richblack5'> Book a Demo</button>
                    </Link>
                </div>

            </div>

            <div  className=' '>

            <video className='w-[950px] h-[1035px]  mx-auto mt-[-148px] z-10 relative'  muted loop autoPlay>
                    <source src={homePageVideo1} type="video/mp4"/>
            </video>
            <img  className='  w-[950px] h-[500px] absolute top-[550px] left-[310px] z-0'   src={whiteBg}></img>

            </div>

            <div className='w-[1440px] h-[522px] flex flex-row py-[90px] px-[120px] gap-[98px] mt-[-150px] mx-auto ml-[150px]'>

                <div className=' w-[486px] h-[284px] gap-[12px]'>

                    <div className=' w-[486px] h-[88px] text-left'>
                          <h1 className=' font-semibold text-richblack5 text-[36px] leading-[44px] '>Unlock your <span className='text-blue50'>coding potential</span> with our online courses.</h1>
                    </div>
                    

                    <div className=' w-[486px] h-[72px]'>
                        <p className='text-richblack200 text-[16px] font-[500] leading-[24px] text-md text-left mt-[12px]'>Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
                    </div>
                    

                    <div className=' w-[338px] h-[100px] mt-[52px] gap-[24px] flex flex-row'>  
                        <Button isYellow={true} hasArrow={true} content="Try it yourself" width={179}></Button>
                        <Button isYellow={false} hasArrow={false} content="Learn more"></Button>
                    </div>
                </div>
                <div className='w-[478px] flex flex-row border gap-[12px] p-[8px] bg-richblack800 h-[280px]'>

                    <div className=' text-richblack200'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                    </div>
                    
                    <div>
                    <TypeAnimation
                        sequence={[code,2000,"",2000]}
                        style={{fontSize:'1rem',whiteSpace: 'pre-line', color:"yellow", textAlign:'left',display:'block'}}
                        repeat={Infinity}
                        cursor={true}
                        deletionSpeed={60}
                    ></TypeAnimation>
                    </div>
                    
                </div>
            </div>


        </div>

      {/* Section 2 */}
      {/* Section 3 */}
      {/* Section 4 */}
    </div>
  )
}

export default HomePage
