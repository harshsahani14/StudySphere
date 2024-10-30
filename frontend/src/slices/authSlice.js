import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : localStorage.getItem("token"),
    loading:false,
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
        
    }
})

export const {setToken,setLoading} = authSlice.actions;
export default authSlice.reducer;

