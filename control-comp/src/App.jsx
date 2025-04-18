import { useState } from 'react'
import './App.css'
import ControlComp from './components/ControlComp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ControlComp/>
    </>
  )
}

export default App
