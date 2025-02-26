
import './App.css'
import { Child } from './Components/Child'
import { Parent } from './Components/Parent'

function App() {

    let obj = {
      name : "Rajvi",
      age : "20",
      loc : "bhavnagar"
    }

    let arr = ["hello", "world"]

  return (
    <>
      <Child props={obj} />
      <Parent props = {arr} />
    </>
  )
}

export default App
