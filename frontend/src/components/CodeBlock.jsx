import React from 'react'
import Button from '../components/Button';
import { TypeAnimation } from 'react-type-animation';

const CodeBlock = ({whiteHeading1,whiteHeading2,blueHeading1,blueHeading2,para,button1,button2,button1Width,button2Width,code,shadowColor1,shadowColor2,shadowColor3,isCodeBlockFirst}) => {
  return (
    <div className={`w-[1440px] h-[522px] flex flex-row py-[90px] px-[120px]   mx-auto  ${isCodeBlockFirst ? 'flex-row-reverse mt-[60px] gap-[130px]' : 'flex-row ml-[150px] mt-[-150px] gap-[108px]'}`}>

                <div className=' w-[486px] h-[284px] gap-[12px]'>

                    <div className=' w-[486px] h-[88px] text-left'>
                          <h1 className=' font-semibold text-richblack5 text-[36px] leading-[44px] '>{whiteHeading1} <span className='text-blue50'>{blueHeading1}</span><p className='text-blue50'> {blueHeading2}</p> {whiteHeading2}</h1>
                    </div>
                    

                    <div className=' w-[486px] h-[72px]'>
                        <p className='text-richblack200 text-[16px] font-[500] leading-[24px] text-md text-left mt-[12px]'>{para}</p>
                    </div>
                    

                    <div className={` ${isCodeBlockFirst ? 'w-[360px]' : 'w-[338px]'}  h-[100px] mt-[52px] gap-[24px] flex flex-row`}>  
                        <Button isYellow={true} hasArrow={true} content={button1} width={button1Width} link={"/login"}></Button>
                        <Button isYellow={false} hasArrow={false} content={button2} width={button2Width}   link={"/signup"}></Button>
                    </div>
                </div>
                <div className={` flex flex-row border gap-[12px] p-[8px] bg-richblack800  h-[315px] relative border-richblack900 ${isCodeBlockFirst ? " w-[500px]" : "w-[480px]"}  `}>
                    <div className={`bg-gradient-to-r from-[${shadowColor1}] via-[${shadowColor2}] to-[${shadowColor3}] blur-[68px] opacity-40 absolute w-[372px] h-[257px]  top-[-30px] left-[-10px] `}></div>
                    
                    <div className=' text-richblack200 flex flex-col leading-[25px]'>
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
                        <div>12</div>
                    </div>
                    
                    <div>
                    <TypeAnimation
                        sequence={[code,2000,"",2000]}
                        style={{fontSize:'14px',whiteSpace: 'pre-line', color:"yellow", textAlign:'left',display:'block',fontWeight:"700",lineHeight:"25px"}}
                        repeat={Infinity}
                        cursor={true}
                        deletionSpeed={60}
                    ></TypeAnimation>
                    </div>
                    
                </div>
            </div>    
  )
}

export default CodeBlock;
