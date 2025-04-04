import { useState } from 'react'
import './App.css'
import Dashboard from "./Dashboard"
import Products from "./pages/Products"
import Users from "./pages/Users"
import {Link, NavLink, Route, Routes} from "react-router-dom"





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='shadow '>
      <div className="container mx-auto flex justify-between p-3">
        <h1 className='bg-slate-400 text-2xl font-bold'>Routing</h1>
      
    <div className="flex gap-4">
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/dash">Dashboard</NavLink>
    
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/products">Product</NavLink>
     
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/users">Users</NavLink>
    </div>
        
       
  </div>
    </header>

    <Routes>
      <Route path="/:dash" element={<Dashboard/>}/>
      
      <Route path="/products" element={<Products/>}/>

      <Route path="/users" element={<Users/>}/>
    </Routes>

    <div className="max-w-5xl mx-auto grid grid-cols-4">
     {
      users.map((ele)=>(
        <div className="shadow shadow-slate-500 rounded-2xl">
        <img src={ele} alt="" /> 
        {ele.username}
      </div>
      ))
     }
    </div> 


    </>
  )
}

export default App
