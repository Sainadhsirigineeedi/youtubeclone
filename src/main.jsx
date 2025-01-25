import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'





const approutes=createBrowserRouter([
      {
         path:'/',
         element:<App></App>,
         children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/navbar',
              element:<Navbar></Navbar>
            }
         ]
      } 
])

ReactDOM.render(
 <Provider store={appStore}>
   <RouterProvider router={approutes}>

</RouterProvider>
 </Provider>,
  document.getElementById('root')
)
