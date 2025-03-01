import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      
    <div className='border p-3'>
      <input className='bg-light text-dark' type={show ? "password" : "text"} />

      <button className='btn btn-sm m-2 btn-outline-secondary ' onClick={() => setShow(!show)}>
       
        {
          !show ?
          <i class="ri-eye-fill"></i>
          :
          <i class="ri-eye-off-fill"></i>
        }
      </button>


    </div>

    </>
  )
}

export default App
