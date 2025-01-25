import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
name:'userSlice',
 initialState:{
    userData:[]
 },
 reducers:{
     addUserdata:(state,action)=>{
           state.userData=action.payload
     }
 }
})

export const {addUserdata}=userSlice.actions;

export default userSlice.reducer