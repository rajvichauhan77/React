import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  
  const incCount = () => {
      setCount(count+1)
  }

  const decCount = () => {
      setCount(count-1)
  }

  const handleCount = (n) =>{
      setNum(num+n)
  }




  return (
    <>
     <button onClick={incCount}>INC</button>
     <button >{count}</button>

     <button onClick={decCount}>DEC</button>
     
     <hr />

     <button onClick={() => handleCount(1)}>+</button>
     <h3>{num}</h3>

     <button onClick={() => handleCount(-1)}>-</button>

    </>
  )
}

export default App
