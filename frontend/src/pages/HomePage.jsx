import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link,Outlet } from 'react-router-dom';
import homePageVideo1 from '../assets/videos/homePageVideo1.mp4'
import whiteBg from '../assets/images/WhiteBg.png'
import Button from '../components/Button';
import CodeBlock from '../components/CodeBlock';
import { GiAchievement } from "react-icons/gi";
import IconText from '../components/IconText';
import { RiGraduationCapFill } from "react-icons/ri";
import { IoDiamond } from 'react-icons/io5';
import { HiCodeBracketSquare } from "react-icons/hi2";
import homePageVideo2 from '../assets/videos/homePageVideo2.mp4'
import HighLightText from '../components/HighLightText';
import Box1 from '../components/Box1';
import dog from '../assets/images/dog.png'
import bear from '../assets/images/bear.png'
import lady from '../assets/images/lady.png'
import penguin from '../assets/images/penguin.png'
import ImgText from '../components/ImgText';
import './HomePage.css'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import CalenderComp from '../components/CalenderComp';
import instructor from '../assets/images/homePagePhoto1.png'
import HomepageBox from '../components/HomepageBox';
import invertedSquareBg from '../assets/images/invertedSquareBg.png'

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
    
    const code2 = `def factorial(n):
                        if n == 0:
                            return 1
                        else:
                            return n * factorial(n - 1)

                 def main():
                    num = int(input("Enter a number: "))
                    result = factorial(num)
                    print("Factorial calculation complete.")
                    print(f"The factorial of {num} is {result}")
                    return 0`;
                    

  return (
    <div className=' overflow-x-hidden '>

      {/* Section 1 */}
        <div className='bg-richblack900 w-full h-[2650px] pt-[124px] mt-[-35px]'>

            <div className=' w-[913px] h-[276px] mx-auto flex flex-col gap-[38px] justify-center items-center ' >

                <Link to="/signup">
                        <button className=' w-[235px] h-[44px] flex flex-row p-[4px] gap-[5px] justify-center items-center bg-richblack800 rounded-[500px] text-richblack200 hover:w-[250px] hover:h-[48px] hover:text-richblack5  duration-100 hover:text-[20px]'>
                            <div><p className=' text-md font-[500] text-[16px] font-inter'>Become an Instructor</p></div>
                            <div className=''><HiOutlineArrowSmallRight /></div>
                        </button>
                </Link>
                

                <h1 className=' text-center text-[36px] text-richblack5 font-semibold font-inter'>Empower Your Future with <HighLightText text={"Coding Skills"}></HighLightText></h1>

                <p className=' text-center font-medium text-[16px] leading-[24px] text-richblack200 font-inter '>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>


                <div className='w-[308px] h-[48px] flex gap-[24px] '> 
                
                <Button width={135} link={'/signup'} isYellow={true} hasArrow={false} content={'Learn More'}></Button>
                 
                <Button width={149} link={'/login'} isYellow={false} hasArrow={false} content={'Book a Demo'}></Button>
                    
                </div>
                

            </div>

            
            

            <video className='w-[1000px] h-[1035px]  mx-auto mt-[-148px] z-20 relative'  muted loop autoPlay>
                    <source src={homePageVideo1} type="video/mp4"/>
            </video>
            
            <div className='bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] w-[1092px] h-[565px] opacity-40 absolute rounded-[200px] blur-[68px] top-[500px] left-[240px] z-0'></div>

            
            <CodeBlock isCodeBlockFirst={false} whiteHeading1={"Unlock your"} blueHeading1={"coding potential"} whiteHeading2={"with our online courses"} para={'Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'} button1={"Try it yourself"} button2={'Learn More'} button1Width={179} button2Width={135} code={code1} shadowColor1={'#8A2BE2'}shadowColor2={'#FFA500'} shadowColor3={'#F8F8FF'}></CodeBlock>

            
            <div className='mt-[-40px]'>
            <CodeBlock isCodeBlockFirst={true} whiteHeading1={"Start"} whiteHeading2={""} blueHeading1={'coding'} blueHeading2={'in seconds'} para={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."} button1={"Continue Lesson"} button2={"Learn More"} code={code2} shadowColor1={"#1FA2FF"} shadowColor2={"#12D8FA"} shadowColor3={"#A6FFCB"} button1Width={201} button2Width={135}></CodeBlock>
            </div>
            
            <div className=' w-full h-full flex flex-col py-[90px] px-[120px]'>

                <p className=' text-[36px] font-[600] leading-[44px] text-center text-richblack5 font-inter'>Unlock the <HighLightText text={"Power of Code"}></HighLightText></p>
                <p className=' text-richblack300 text-center text-[16px] font-[500] mt-[10px]font-inter'>Learn to Build Anything You Can Imagine</p>
                <div className=' w-[1096px] h-[300px] gap-[36px] flex mx-auto mt-[60px] relative '>
                    
                    <HomepageBox hasShadow={true} heading={'Learn HTML'} para={'This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.'}></HomepageBox>
                    <HomepageBox hasShadow={false} heading={"Learn CSS"} para={" This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques"}></HomepageBox>
                    <HomepageBox hasShadow={false} heading={"Responsive Web design"} para={"This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes"}></HomepageBox>
                </div>
            </div>
        </div>

      {/* Section 2 */}

      <div className=' w-full mb-[-200px]  '>

        <div className={` bg-invertedSq w-full h-[320px] flex justify-center items-center gap-[24px] relative `}>
            
            <Button isYellow={true} hasArrow={true} content={'Explore Full Catalog'} width={227}></Button>
            <Button isYellow={false} hasArrow={false} content={'Learn More'} width={137} ></Button>

        </div>

        <div className=' bg-[#F9F9F9] h-[2300px] w-full py-[90px] px-[120px] gap-[52px] mb-[-130px] '>

            <div className=' w-[1200px] h-[144px] gap-[32px] flex flex-row'>

                <div className='w-[594px] h-[88px] '><p className=' text-left font-[600] text-[36px] leading-[44px] font-inter'>Get the skills you need for a <span className=' gradient-text4'>job that is in demand</span></p></div>

                <div className='flex flex-col gap-[12px] w-[594px]'>

                    <div className=' w-[594px] h-[48px]'>
                    <p className=' text-[16px] text-richblack600 leading-[24px] font-[500] text-left font-inter'>The modern StudySphere is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                    </div>

                    <div className=' w-[594px] h-[84px] pt-[36px]'>

                        <Button isYellow={true} hasArrow={false} content={"Learn More"} width={137} link={'/signup'}></Button>
                    </div>
                
                </div>
                

            </div>

            <div className=' w-11/12 h-[545px] gap-[76px] mx-auto flex flex-row  mt-[125px]'>

                <div className=' flex flex-col w-[410px] h-[432px] gap-[32px] my-[113px]'>
                    
                    <IconText icon={<GiAchievement className=' w-[24px] h-[24px] text-blue200'/>} heading={'Leadership'} para={'Fully committed to the success company'}></IconText>
                    <IconText icon={<RiGraduationCapFill  className='w-[24px] h-[24px] text-pink300' />} heading={'Responsibilty'} para={'Students will always be our top priority'}></IconText>
                    <IconText icon={<IoDiamond className='w-[24px] h-[24px] text-green200 ' />} heading={'Flexibility'} para={'The ability to switch is an important skills'}></IconText>
                    <IconText icon={<HiCodeBracketSquare className='w-[24px] h-[24px] text-brown100 '/>} heading={'Solve the problem'} para={'Code your way to a solution'}></IconText>

                </div>

                <video className='w-[714px] h-full  z-20 relative '  muted loop autoPlay>
                    <source src={homePageVideo2} type="video/mp4"/>
                </video>
                <div className='bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] w-[872px] h-[235px] opacity-40 absolute rounded-[200px] blur-[68px] top-[3450px] left-[550px] z-0'></div>
                <img  className='  w-[714px] h-[400px] absolute left-[680px] z-10 top-[3440px]'   src={whiteBg}></img>
                

                <div className='absolute z-20 w-[520px] h-[128px] bg-green700 top-[3770px] left-[760px] flex flex-row p-[42px] gap-[52px] justify-center' >

                    <div className='w-[161px] h-[44px] gap-[24px] flex'>
                      <p className='font-inter text-richblack5 text-[36px] leading-[44px] text-center font-[700]'>10</p>
                      <p className=' font-inter text-[15px] leading-[22px] font-[500] text-green200 text-left'> YEARS <br></br> EXPEREINCE </p>
                    </div>
                    

                    <div className=' w-[1px] bg-green200 h-[44px]'></div>

                    <div className='w-[200px] h-[44px] gap-[36px] flex'>
                       <p className='text-richblack5 text-[36px] leading-[44px] text-center font-[700] font-inter'>250</p>
                       <p className='text-[15px] leading-[22px] font-[500] text-green200 text-left font-inter'> TYPES OF COURSES </p>
                    </div>
                    

                </div>
            </div>
        
            <div className=' w-full mt-[130px] py-[90px] px-[120px] gap-[52px] bg-[#F9F9F9] flex flex-col '>

                <div className=' w-[1200px] h-[104px] gap-[12px] flex flex-col'>
                   <p className=' font-inter text-center text-[36px] font-[600] leading-[44px] mr-[110px]'> Your swiss knife for <span className=' gradient-text4'>learning any language</span></p>

                   <div className=' w-[760px] h-[48px] ml-[165px]'>
                      <p className='font-inter text-richblack800 font-[500] text-[16px] leading-[24px]  text-center   '> Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,<br></br>progress tracking, custom schedule and more.</p>
                   </div>
                   
                </div>

                <div className=' w-[1103px] relative mt-[42.5px]'>

                    <div className='w-[341px] h-[340px] rotate-[15deg] flex flex-col bg-[#FFFFFF] 
                       shadow-homepageBox1 absolute z-[20]'>
                        <div className=' bg-blue25 w-[341px] h-[56px] text-blue500 font-semibold pt-[15px] pl-[20px] font-inter'> Know your progress</div>
                        <div className=' flex flex-col gap-[16px] pt-[16px] pb-[52px] px-[24px] items-start '>
                            <div className=' text-richblack800 font-[600] text-[24px] font-inter '>🖥️ HTML</div>
                            <div className='font-inter font-semibold text-richblack300 text-[16px] leading-[24px]'>Your Current league</div>
                            <div className=' w-[293px] h-[120px] gap-[15px] flex flex-row'> 
                                <Box1 cont1={`✨`} cont2={125} cont3={'Spin earned'}></Box1>
                                <Box1 cont1={`⌚️`} cont2={1254} cont3={'minutes in app'} ></Box1>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[341px] h-[408px] -rotate-[8.36deg] bg-[#FFFFFF] absolute left-[358.19px] z-[30] shadow-homepageBox2'>
                        <div className='bg-pink25 w-full h-[56px] pl-[20px] py-[16px] text-pink800 font-semibold font-inter '>Compare with others</div>
                        <div className=' flex flex-col pt-[32px] px-[24px] pb-[52px] gap-[4px]'>
                            <ImgText img={dog} text={'Wade Warren'} ></ImgText>
                            <ImgText img={lady} text={'Jane Cooper'}></ImgText>
                            <ImgText img={bear} text={'Eleanor Pena'}></ImgText>
                            <ImgText img={penguin} text={'Ralph edwards'}></ImgText>
                        </div>
                    </div>

                    <div className='w-[341px] h-[346px] rotate-[9.88deg] bg-[#FFFFFF] absolute left-[740px] z-[40] shadow-homepageBox3 '
                    >
                        <div className=' bg-brown25 w-full h-[56px] pl-[20px] font-inter py-[16px] text-brown800 font-semibold '>plan your lessons</div>
                        <div className='w-[341px] h-[290px] pt-[32px] px-[24px] pb-[52px]'>
                            <div className='w-[293px] h-[206px] gap-[4px] flex flex-col'>

                                <div className=' w-full h-[42px] py-[8px] gap-[4px] flex justify-between items-center '>
                                    <FaAngleLeft className='w-[16px] h-[16px]'></FaAngleLeft>
                                    <p className='font-inter font-[500] text-[18px] leading-[26px] text-richblack600 text-center'>December 2022</p>
                                    <FaAngleRight className='w-[16px] h-[16px]'></FaAngleRight>
                                </div>
                                <div className='w-full h-[20px] flex justify-around'>
                                    <CalenderComp text={'M'}></CalenderComp>
                                    <CalenderComp text={'T'}></CalenderComp>
                                    <CalenderComp text={'W'}></CalenderComp>
                                    <CalenderComp text={'T'}></CalenderComp>
                                    <CalenderComp text={'F'}></CalenderComp>
                                    <CalenderComp text={'S'}></CalenderComp>
                                    <CalenderComp text={'S'}></CalenderComp>
                                </div>
                                <div className=' w-full h-[24px] flex flex-row justify-around mt-[2px]'>
                                    <CalenderComp text={'28'} ></CalenderComp>
                                    <CalenderComp text={'29'}></CalenderComp>
                                    <CalenderComp text={'30'}></CalenderComp>
                                    <CalenderComp text={'1'}></CalenderComp>
                                    <CalenderComp text={'2'}></CalenderComp>
                                    <CalenderComp text={'3'}></CalenderComp>
                                    <CalenderComp text={'4'}></CalenderComp>
                                </div>
                                <div className='w-[293px] h-[24px] flex-row flex justify-around'>
                                    <CalenderComp text={"5"}></CalenderComp>
                                    <CalenderComp text={"6"}></CalenderComp>
                                    <CalenderComp text={"7"}></CalenderComp>
                                    <CalenderComp text={"8"}></CalenderComp>
                                    <CalenderComp text={"9"} isColured={true} isLeftRounded={true} isBlack={true}></CalenderComp>
                                    <CalenderComp text={"10"} isColured={true} isBlack={true}></CalenderComp>
                                    <CalenderComp text={"11"} isColured={true} isBlack={true}></CalenderComp>
                                </div>
                                <div className='w-[293px] h-[24px] flex-row flex justify-around'>
                                    <CalenderComp text={"12"} isColured={true}  isBlack={true}></CalenderComp>
                                    <CalenderComp text={"13"} isColured={true}  isBlack={true}></CalenderComp>
                                    <CalenderComp text={"14"} isColured={true}  isBlack={true} isRightRounded={true} ></CalenderComp>
                                    <CalenderComp text={"15"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"16"}   isBlack={true} ></CalenderComp>
                                    <CalenderComp text={"17"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"18"}   isBlack={true}  ></CalenderComp>
                                </div>

                                <div className='w-[293px] h-[24px] flex-row flex justify-around'>
                                    <CalenderComp text={"19"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"20"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"21"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"22"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"23"}   isBlack={true} isColured={true} isLeftRounded={true} isRightRounded={true} ></CalenderComp>
                                    <CalenderComp text={"24"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"25"}   isBlack={true}  ></CalenderComp>
                                </div>
                                <div className='w-[293px] h-[24px] flex-row flex justify-around'>
                                    <CalenderComp text={"26"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"27"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"28"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"29"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"30"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"31"}   isBlack={true}  ></CalenderComp>
                                    <CalenderComp text={"1"}     ></CalenderComp>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className=' w-[1200px] h-[84px] pt-[36px] justify-center flex items-end gap-[24px]  z-[50] mt-[470px] pr-[160px]'>
                    <Button isYellow={true} hasArrow={false} content={"Learn More"} width={137} link={"/signup"}></Button>
                </div>
                
                
                
            </div>
            
        
        </div>

       
      </div>


      {/* Section 3 */}
      <div className='w-full h-[1185px] bg-richblack900 '>

        <div className=' w-full h-[725px] py-[90px] px-[120px] flex gap-[98px]'>

            <div className=' w-[650px] h-[570px] relative mt-[60px]'>
                <img src={instructor} className=' absolute z-20 w-[510px] h-[575px] right-[40px]' ></img>
                <img src={whiteBg} className=' absolute z-10 w-[510px] h-[575px] bottom-[15px] right-[60px]'></img>
            </div>

            <div className='w-[486px] h-[284px] flex flex-col gap-[12px] mt-[230px]'>

                <p className=' font-[600] text-[36px] leading-[44px] text-richblack5 text-left font-inter' >Become an <br></br> <HighLightText text={"instructor"}></HighLightText></p>
                <p className=' font-inter text-[16px] leading-[24px] font-[500] text-richblack300 text-left'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                <div className=' w-[220px] h-[100px] pt-[52px]'>
                    <Button isYellow={true} hasArrow={true} content={"Start teaching today"} width={230} link={'/signup'}></Button>
                </div>
            </div>
        </div>
      </div>
      {/* Section 4 */}
    </div>
  )
}

export default HomePage
