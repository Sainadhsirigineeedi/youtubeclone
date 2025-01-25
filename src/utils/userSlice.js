import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
name:'userSlice',
 initialState:{
    isSidebar:false
 },
 reducers:{
    sideBartoggle:(state,action)=>{
         state.isSidebar = !state.isSidebar
     }
 }
})

export const {sideBartoggle}=userSlice.actions;

export default userSlice.reducer