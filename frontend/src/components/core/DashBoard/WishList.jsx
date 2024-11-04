import React from 'react'
import Heading from './Heading'
import { useSelector } from 'react-redux'

const WishList = () => {

  const {totalAmt,cart,totalItems} = useSelector(state=>state.cart)
  return (
    <div className=' w-full h-[679px] bg-richblack900 overflow-y-hidden'>
      <Heading title={"Wishlist"} heading={"My wishList"}></Heading>

      { 
          totalItems === 0 ? (
            <div className='h-full w-[1162px] flex justify-center items-center '>
                          <p className=' text-richblack5 text-[30px] leading-[38px] font-inter font-[500] mb-[275px]'> No courses here</p>
                          </div>
          ) : (<div></div>)
      }
    </div>
  )
}

export default WishList
