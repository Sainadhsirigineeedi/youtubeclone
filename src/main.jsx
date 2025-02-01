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
import Searchlist from './components/Searchlist'

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
            },
            {
               path:'/searchvideo/:keyword',
               element:<Searchlist></Searchlist>
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
