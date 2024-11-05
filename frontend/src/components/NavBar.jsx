import React, { useEffect, useState } from 'react'
import websiteLogo from '../assets/images/websiteLogo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BsCart3 } from "react-icons/bs";
import { apiCall } from '../apis/apiCall'
import {categoryApiURL, profileApiURL} from '../apis/apiUrl'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {toast} from "react-hot-toast"
import { FaCaretDown } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { setLoading, setToken} from '../slices/authSlice';
import { setUser } from '../slices/profileSlice';
const NavBar = () => {

  const {token} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.profile)


  const {totalItems} = useSelector(state => state.cart)

  const [categories,setCategories] = useState([])
  // var categories = []
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetchCategories = async ()=>{

    try{
      const result = await apiCall('GET',categoryApiURL.getAll)
      setCategories( (state) =>{
        
        return [...result.data.category]
      } )
      // categories = [...result.data.category]
      
    }
    catch(e){
      console.log(e.message)
      toast.error("Could not fetch categories")
    }
  }


  useEffect( ()=>{
      fetchCategories()
  },[])

  const clickHandler = ()=>{
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true))
    dispatch(setToken(null))
    localStorage.removeItem("token")
    dispatch(setUser(null));
    localStorage.removeItem("user")
    toast.success("Logged out sucessfully")
    navigate("/")
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }

  return (
    <div className=' flex items-center w-full h-[56px] border-b-[1px] border-richblack600 bg-richblack900  gap-[32px] justify-around relative '>

        <Link to={"/"}>
            <img src={websiteLogo} width={160} height={32} className='absolute left-[200px] top-3'></img>
        </Link>
      
      <div className=' font-inter flex justify-end w-[476px] h-[32px] gap-[30px] items-center '>
            <NavLink to={"/"} style={({isActive})=>({
                color : isActive ? "#FFD60A" : "#F1F2FF"
            })} className=" font-[600] text-[16px] leading-[24px] ">Home</NavLink>
            
            <div className=' flex gap-2 relative w-[74px] h-[32px] cursor-pointer group items-center'>
                <p className=' font-[600] text-[16px] leading-[24px] text-richblack5'>Catalog</p>
                <MdOutlineKeyboardArrowDown className=' text-richblack5 absolute  right-0' />
                
                <div className=' invisible flex flex-col w-[280px] h-fit group-hover:visible bg-richblack5 absolute top-10 right-[-120px] opacity-0 group-hover:opacity-100 transition-all duration-300 px-[15px]  py-[15px] rounded-md z-50'>
                        <div className=' w-14 h-14 bg-richblack5  top-0 right-[99px] rotate-45 absolute   rounded-sm z-0 '></div>
                        
                        {/* <Link to={`/categories/python`} className=' w-full h-[50px] text-richblack900 text-[16px] flex font-[600] items-center text-left pl-[13px]  hover:bg-richblack50 rounded-md z-50'>
                            <div>Python</div>
                        </Link> */}
                        
                        {/* Map categories here */}
                      {
                          
                          categories.length>0 ? (categories.map((category,idx)=>(
                            <Link to={`/categories/${category.name}`} className=' w-full h-[50px] text-richblack900 text-[16px] flex font-[600] items-center text-left pl-[13px]  hover:bg-richblack50 rounded-md z-50' key={idx}>
                            <div>{category.name}</div>
                            </Link>
                          ))) : (<div></div>)
                      }
                    
                </div>
            </div>
            
            
            <NavLink to={"/aboutus"} style={({isActive})=>({
                color : isActive ? "#FFD60A" : "#F1F2FF"
            })} className=" font-[600] text-[16px] leading-[24px] ">About Us</NavLink>
            
            
            <NavLink to={"/contactus"} style={({isActive})=>({
                    color : isActive ? "#FFD60A" : "#F1F2FF"
            })} className=" font-[600] text-[16px] leading-[24px]">Contact Us</NavLink>
            
      </div>

      <div className=' w-[160px] h-[29.88px] flex flex-end gap-[20px] items-center'>
            {

                
               (user!==null && user.role === "student" ) && (<BsCart3 className='relative w-[20px] h-[20px]  text-richblack5 cursor-pointer   '>

                  {
                      totalItems>0 ? (<div>{totalItems}</div>) : (<div className=' hidden'></div>)
                  }
               </BsCart3>) 
               

            }

            {
              (token!=null ) ? (<div className='flex gap-2 justify-center items-center group cursor-pointer relative '>
                  <img src={user.img} className=' w-[29.82px] h-[29.82px] rounded-full cursor-pointer'>
                  </img>
                  <FaCaretDown className=' w-[15px] h-[15px] text-richblack5' />
                  <div className=' group-hover:visible invisible w-fit h-fit flex flex-col bg-richblack800 rounded-md opacity-0 group-hover:opacity-100 absolute bottom-[-95px] left-[-100px] p-[5px]   '>
                    <div className=' flex justify-center items-center w-[150px] h-[30px] hover:bg-richblack600 p-[20px] rounded-md gap-1'>
                      <RiDashboard2Line className=' w-[16px] h-[16px] text-richblack5'></RiDashboard2Line>
                      <Link to={'/dashboard/myProfile'} className=' text-richblack5 text-[16px] font-[500]' >DashBoard</Link>
                    </div>
                    <div className=' flex justify-center items-center w-[150px] h-[30px]  hover:bg-richblack600 p-[20px] rounded-md gap-1' onClick={clickHandler}>
                      <BiLogOut className=' w-[16px] h-[16px] text-richblack5 '></BiLogOut>
                      <p className=' text-richblack5 text-[16px] font-[500]'>Logout</p>
                    </div>
                    <div></div>
                  </div>
              </div>) : (
                
                <div className='flex gap-3 justify-start items-center  '>
                <Link to={"/login"}>
                    <button className=' font-inter w-[78px] h-[40px] bg-richblack700 border-1 border-richblack600 rounded-[8px] text-richblack5 hover:scale-110 duration-200'   >Log in</button>
                </Link>
                
                <Link to={"/signup"}>

                <button className='font-inter w-[78px] h-[40px] bg-richblack700 border-1 border-richblack600 rounded-[8px] text-richblack5 hover:scale-110 duration-200'> Sign up</button>
              </Link>
              </div>
            )


            }
      </div>
      

    </div>
  )
}

export default NavBar
