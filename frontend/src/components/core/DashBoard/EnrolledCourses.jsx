import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../../common/Loader"
import { apiCall } from '../../../apis/apiCall';
import { profileApiURL } from '../../../apis/apiUrl';
import toast from 'react-hot-toast';
import { setLoading } from '../../../slices/profileSlice';
import Heading from './Heading';


const EnrolledCourses = () => {

  const {loading} = useSelector(state => state.profile);
  const {token} = useSelector(state => state.auth);
  const dispatch = useDispatch()

  const [courses,setUserCourses] = useState([])


  const fetchUserCourses = async ()=>{

    dispatch(setLoading(true))
    try{  
      const result = await apiCall("GET",profileApiURL.getEnrolledCourses,null,{
        Authorization : `Bearer ${token}`
      })

      console.log(result.data.courses)
  
      setUserCourses(result.data.courses);
    }
    catch(e){
      toast.error(e.message);
      console.log(e)
      console.log(e.message)
    }

    dispatch(setLoading(false))
  }

  useEffect( ()=>{

     fetchUserCourses()
  },[])



  return (
    <div className=' w-full h-[679px] bg-richblack900'>
      {
        loading ? (<div className=' w-full h-[679px] flex justify-center items-center'>
            <Loader></Loader>
        </div>) : (  

            <div>

                    <Heading title={"Enrolled Courses"} heading={"Enrolled Courses"}></Heading>

                    
                    {
                        courses.length == 0 ? (<div className='h-full w-[1162px] flex justify-center items-center '>
                          <p className=' text-richblack5 text-[30px] leading-[38px] font-inter font-[500] mt-[180px]'> You are not enrolled in any course</p>
                          </div>) : (<div></div>)
                    }
                    </div>
                    
            

        )
      }
    </div>
  )
}

export default EnrolledCourses
