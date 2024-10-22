import React from 'react'

const HighLightText = ({text}) => {
  return (
    <span className=' text-[36px] font-[600] leading-[44px] text-left  mr-[105px] bg-gradient-to-r from-blue100 via-blue200 to-blue100 bg-clip-text text-transparent '>
      {text}
    </span>
  )
}

export default HighLightText
