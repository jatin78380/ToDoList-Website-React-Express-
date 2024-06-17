import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/signup",element:  <SignUp/>},
    {path:"/login",element:<Login/>},
    {path:"/todo",element:<CreateTodo/>}
  ])

  return (
    <>

    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
