import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

const appStore=configureStore({
    reducer:{
         app:userReducer
    }
})
export default appStore