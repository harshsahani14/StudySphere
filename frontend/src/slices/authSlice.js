import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : localStorage.getItem("token"),
    loading:false,
    signUpDetails:null
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,value){
            state.token=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setsignUpDetails(state,value){
            state.signUpDetails=value.payload
        },
        
        
    }
})

export const {setToken,setLoading,setsignUpDetails} = authSlice.actions;
export default authSlice.reducer;

