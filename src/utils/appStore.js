import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

const appStore=configureStore({
    reducer:{
         userSlice:userReducer
    }
})
export default appStore