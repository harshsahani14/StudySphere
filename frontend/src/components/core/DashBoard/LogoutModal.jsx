import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setshowLogOutModal } from '../../../slices/profileSlice';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { setToken } from '../../../slices/authSlice';
import { setUser } from '../../../slices/profileSlice';
import { useNavigate } from 'react-router';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  

Modal.setAppElement(document.getElementById('root'));


const LogoutModal = () => {



    const {showLogOutModal} = useSelector((state)=> state.profile)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const clickHandler = ()=>{
        const toastId = toast.loading("Loading");
        dispatch(setToken(null))
        localStorage.removeItem("token")
        dispatch(setUser(null));
        localStorage.removeItem("user")
        dispatch(setshowLogOutModal(false))
        toast.success("Logged out sucessfully")
        navigate("/")
        toast.dismiss(toastId)
      }

  return (
    <div>
    <Modal
        isOpen={showLogOutModal}
        onRequestClose={()=>dispatch(setshowLogOutModal(false))}
        
        style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },  // Styles for the modal overlay
            content: { color: 'black', padding: '20px', width: '300px', margin: 'auto',backgroundColor:'#000814',height:'200px',flex:"true",flexDirection:"column" , borderColor:'#2C333F',borderRadius:'13px',
            } // Styles for the modal content
          }}
      >
        <h1 className=' text-richblack5 text-[24px] font-inter font-[600]'>Are you sure?</h1>
        <p className=' text-richblack300 font-inter font-[400] text-[14px] mt-[15px] '>You will be logged out of your account</p>
        <button className='bg-yellow w-[125px] h-[40px] rounded-md mt-10 font-inter text-richblack900 font-[500]' onClick={clickHandler}>Logout</button>
        <button className='bg-richblack600 w-[125px] h-[40px] rounded-md mt-10 font-inter text-richblack5 font-[500] ml-2' onClick={()=>dispatch(setshowLogOutModal(false))}>Cancel</button>
      </Modal>
    </div>
  )
}

export default LogoutModal
