import { useState } from 'react'
import './App.css'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import TodoList  from './todo'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/signup",element:  <SignUp/>},
    {path:"/login",element:<Login/>},
    {path:"/todo",element:<TodoList/>}
  ])

  return (
    <>

    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
