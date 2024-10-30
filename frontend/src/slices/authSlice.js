import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : localStorage.getItem("token") ? localStorage.getItem("token") : null,
    loading:false,
    user:null
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
        setUser(state,value){
            state.user=value.payload
        }
    }
})

export const {setToken,setLoading,setUser} = authSlice.actions;
export default authSlice.reducer;

