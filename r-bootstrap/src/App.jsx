import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './App.css'
import StaticExample from './components/Modal'
import BasicExample from './components/Accordian'
import ContainerExample from './components/Container'

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
    <Button className='m-5' onClick={()=>setShow(!show)}>modal</Button>

      <StaticExample sh={show} setShow={setShow} />
      <BasicExample/>
      <ContainerExample/>
      
    </>
  )
}

export default App
