import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    // Issue while reloading page cannot fetch user object
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user=value.payload
        },
        

    }
})

export const {setUser} = profileSlice.actions;
export default profileSlice.reducer;

