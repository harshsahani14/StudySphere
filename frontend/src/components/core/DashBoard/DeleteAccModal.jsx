import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setshowDeleteAccModal } from '../../../slices/profileSlice';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { setToken } from '../../../slices/authSlice';
import { setUser } from '../../../slices/profileSlice';
import { useNavigate } from 'react-router';
import { apiCall } from '../../../apis/apiCall'
import { profileApiURL } from '../../../apis/apiUrl'


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


const DeleteAccModal = () => {

    const {showDeleteAccModal} = useSelector((state)=> state.profile)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {token} = useSelector((state)=> state.profile)

    const  clickHandler = async()=>{
        // const toastId = toast.loading("Loading");

        // try{

        //     const result = await apiCall('DELETE',profileApiURL.deleteUserAccount,token,{Authorization:`Bearer ${token}`})

        //     // dispatch(setToken(null))
        //     // localStorage.removeItem("token")
        //     // dispatch(setUser(null));
        //     // localStorage.removeItem("user")
        //     // dispatch(setshowDeleteAccModal(false))

        // }
        // catch(e){
        //     toast.error(e.message)
        // }
        // toast.success("Account deleted succesfully")
        // navigate("/")
        // toast.dismiss(toastId)
      }

  return (
    <div>
    <Modal
        isOpen={showDeleteAccModal}
        
        style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },  // Styles for the modal overlay
            content: { color: 'black', padding: '20px', width: '330px', margin: 'auto',backgroundColor:'#000814',height:'200px',flex:"true",flexDirection:"column" , borderColor:'#2C333F',borderRadius:'13px',

                
            } // Styles for the modal content
          }}
      >
        <h1 className=' text-richblack5 text-[24px] font-inter font-[600] '>Are you sure?</h1>
        <p className=' text-richblack300 font-inter font-[400] text-[14px] mt-[15px] '>Your account will be deleted permanently</p>
        <button className='bg-pink500 w-[145px] h-[40px] rounded-md mt-10 font-inter text-richblack900 font-[500] hover:scale-105 duration-200 ' >Delete Account</button>
        <button className=' hover:scale-105 duration-200  bg-richblack600 w-[125px] h-[40px] rounded-md mt-10 font-inter text-richblack5 font-[500] ml-3' onClick={()=>dispatch(setshowDeleteAccModal(false))}>Cancel</button>
      </Modal>
    </div>
  )
}

export default DeleteAccModal

