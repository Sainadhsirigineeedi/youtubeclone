import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Maincontainer from './components/Maincontainer'
import Playingvideo from './components/Playingvideo'

const approutes=createBrowserRouter([
      {
         path:'/',
         element:<App></App>,
         children:[
            {
              path:'/',
              element:<Maincontainer></Maincontainer>
            },
            {
               path:'/palyvideo/:id',
               element:<Playingvideo></Playingvideo>
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
