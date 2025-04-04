import { useContext } from 'react'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Users from './pages/User'
import { ApiContext } from "./context/ApiContext"
import { AuthContext } from "./AuthContext/AuthProvider"


import {Link, NavLink, Route, Routes} from "react-router-dom"

function App() {

  const {users} = useContext(ApiContext)

  const {tok} = useContext(AuthContext)

  return (
    <>


    <header className='shadow'>
      <div className='container border mx-auto flex justify-between'>
        <h1 className=' text-2xl font-bold'>Routing</h1>

        <div className="flex gap-4">
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/dash">Dashboard</NavLink>
     {tok ?
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/products">Product</NavLink>
      :
      <></>} 
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/users">Users</NavLink>
    </div>


      </div>
    </header>




    <Routes>

      <Route path='/dash' element={<Dashboard/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/users' element={<Users/>} />

      
    </Routes>

    <div className="max-w-5xl mx-auto grid grid-cols-4">
     {
      users.map((ele)=>(
        <div className="shadow shadow-slate-500 rounded-2xl">
      
        {ele.username}
      </div>
      ))
     }
    </div>

    </>
  )
}

export default App
