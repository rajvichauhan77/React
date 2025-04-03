import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import User from './pages/User'
import {Link, NavLink, Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <header className='shadow'>
      <div className='container border mx-auto flex justify-between'>
        <h1 className=' text-2xl font-bold'>Routing</h1>

        <div className='flex gap-4'>
          <NavLink to="/dash">Dashboard</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/users">User</NavLink>
            
          
        </div>


      </div>
    </header>




    <Routes>

      <Route path='/dash' element={<Dashboard/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/users' element={<User/>} />

      
    </Routes>

    </>
  )
}

export default App
