import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";



const userSlice=createSlice({
name:'userSlice',
 initialState:{
    isSidebar:false,
    morevideos:[]
 },
 reducers:{
    sideBartoggle:(state,action)=>{
         state.isSidebar = !state.isSidebar
     },
     closeSidebar:(state,action)=>{
        state.isSidebar=false;
     },
     adddataMorevideos:(state,action)=>{
           state.morevideos=action.payload
     }
 }
})

export const {sideBartoggle,closeSidebar,adddataMorevideos}=userSlice.actions;

export default userSlice.reducer