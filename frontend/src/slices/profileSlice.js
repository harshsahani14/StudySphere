import { createSlice } from "@reduxjs/toolkit";
import { getItemWithExpiry } from "../apis/localStorage";

const initialState = {

    // Issue while reloading page cannot fetch user object
    user : JSON.parse(localStorage.getItem('user')),
    showLogOutModal:false,
    loading:false,
    showDeleteAccModal:false,
}

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user=value.payload
        },
        setshowLogOutModal(state,value){
            state.showLogOutModal=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setshowDeleteAccModal(state,value){
            state.showDeleteAccModal=value.payload
        }
        
    }
})

export const {setUser,setshowLogOutModal,setLoading,setshowDeleteAccModal} = profileSlice.actions;
export default profileSlice.reducer;

