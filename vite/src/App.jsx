
import './App.css'
import { Child } from './components/Chlid'
import { Parent } from './components/Parent'

function App() {
 
  let obj ={
    name : "red",
    surname : "white",
    loc : "bhavnagar"
  }

  let arr = ["first", "second"]

  return (
    <>

     <Child props={obj} />
    <Parent props = {arr}/>
    
    </>
  )
}

export default App
