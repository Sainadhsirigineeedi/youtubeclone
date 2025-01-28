import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const userSlice=createSlice({
name:'userSlice',
 initialState:{
    isSidebar:false
 },
 reducers:{
    sideBartoggle:(state,action)=>{
         state.isSidebar = !state.isSidebar
     },
     closeSidebar:(state,action)=>{
        state.isSidebar=false;
     }
 }
})

export const {sideBartoggle,closeSidebar}=userSlice.actions;

export default userSlice.reducer