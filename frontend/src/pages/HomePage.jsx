import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link,Outlet } from 'react-router-dom';
import homePageVideo1 from '../assets/videos/homePageVideo1.mp4'
import whiteBg from '../assets/images/whiteBg.png'
import Button from '../components/Button';
import { TypeAnimation } from 'react-type-animation';
import CodeBlock from '../components/CodeBlock';

const HomePage = () => {


  const code1 = `<!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width">
                <title>My HTML</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>My First HTML code</p>
                </body>
                </html>`
    
    const code2 = `public class Fibonacci {
                        \t public static void main(String[] args) {
                            \t\tint n1 = 0, n2 = 1, n3, count = 10;
                            \t\tSystem.out.print(n1 + " " + n2); // printing 0 and 1

                            \t\tfor(int i = 2; i < count; ++i) { 
                                \t\t\tn3 = n1 + n2;
                                \t\t\tSystem.out.print(" " + n3);
                                \t\t\tn1 = n2;
                                \t\t\tn2 = n3;
                            \t\t}
                        \t}
                    }
                    `

  return (
    <div className=' overflow-x-hidden '>

      {/* Section 1 */}
        <div className='bg-richblack900 w-full h-[2500px] pt-[124px]'>

            <div className=' w-[913px] h-[276px] mx-auto flex flex-col gap-[38px] justify-center items-center ' >

                <Link to="/signup">
                        <button className=' w-[227px] h-[44px] flex flex-row p-[4px] gap-[5px] justify-center items-center bg-richblack800 rounded-[500px] text-richblack200  '>
                            <div><p className=' text-md font-[500] text-[16px]'>Become an Instructor</p></div>
                            <div className=''><HiOutlineArrowSmallRight /></div>
                        </button>
                </Link>
                

                <h1 className=' text-center text-[36px] text-richblack5 font-semibold'>Empower Your Future with <span className=' text-blue50'>Coding Skills</span></h1>
                <p className=' text-center text-md font-[500] text-[16px] leading-[24px] text-richblack200'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>


                <div className='w-[308px] h-[48px] flex gap-[24px]'> 

                    
                    <Button isYellow={true} hasArrow={false} content="Learn More" width={135}  link={"/signup"}></Button>
                    
                    <Button isYellow={false} hasArrow={false} content="Book a Demo" width={149}  link={"/signup"}></Button>
                    
                </div>

            </div>

            <div  className=' '>

            <video className='w-[950px] h-[1035px]  mx-auto mt-[-148px] z-10 relative'  muted loop autoPlay>
                    <source src={homePageVideo1} type="video/mp4"/>
            </video>
            <img  className='  w-[950px] h-[500px] absolute top-[550px] left-[310px] z-0'   src={whiteBg}></img>

            </div>

            <CodeBlock isCodeBlockFirst={false} whiteHeading1={"Unlock your"} blueHeading={"coding potential"} whiteHeading2={"with our online courses"} para={'Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'} button1={"Try it yourself"} button2={'Learn More'} button1Width={179} button2Width={135} code={code1} shadowColor1={'#8A2BE2'} shadowColor2={'#FFA500'} shadowColor3={'#F8F8FF'}></CodeBlock>

            
            
            <CodeBlock isCodeBlockFirst={true} whiteHeading1={"Start"} whiteHeading2={""} blueHeading1={'coding'} blueHeading2={'in seconds'} para={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."} button1={"Continue Lesson"} button2={"Learn More"} code={code2} shadowColor1={"#1FA2FF"} shadowColor2={"#12D8FA"} shadowColor3={"#A6FFCB"} button1Width={201} button2Width={135}></CodeBlock>
            

        </div>

      {/* Section 2 */}

      <div className=' w-full h-[1000px] '>

        <div className=' w-full h-[320px] flex justify-center items-center gap-[24px]'>

            <Button isYellow={true} hasArrow={true} content={'Explore Full Catalog'} width={227}></Button>
            <Button isYellow={false} hasArrow={false} content={'Learn More'} width={137} ></Button>

        </div>

        <div className=' h-[921px] w-full py-[90px] px-[120px] gap-[52px]'>

            <div className=' w-[1200px] h-[144px] gap-[32px] flex flex-row'>

                <div className='w-[594px] h-[88px] font-[600] text-[36px] leading-[44px] text-left'><p>Get the skills you need for a <span className=' '>job that is in demand</span>.</p></div>

                <div className='flex flex-col gap-[12px] w-[594px]'>

                    <div className=' w-[594px] h-[48px]'>
                    <p className=' text-[16px] text-richblack600 leading-[24px] font-[500] text-left'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                    </div>

                    <div className=' w-[594px] h-[84px] pt-[36px]'>

                        <Button isYellow={true} hasArrow={false} content={"Learn More"} width={137}></Button>
                    </div>
                
                </div>
                

            </div>

        </div>

      </div>
      {/* Section 3 */}
      {/* Section 4 */}
    </div>
  )
}

export default HomePage
