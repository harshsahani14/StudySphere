import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'

const initialState = {
    totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    totalAmt : localStorage.getItem("totalAmt") ? JSON.parse(localStorage.getItem("totalAmt")) : 0,
    cart : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        settotalItems(state,value){
            state.totalItems=value.payload
        },
        settotalAmt(state,value){
            state.totalAmt=value.payload
        },
        setcart(state,value){
            state.cart=value.payload
        }
        // addtocart
        // remove from cart
        // reset cart
    }
})

export const {settotalItems} = cartSlice.actions;
export default cartSlice.reducer;

