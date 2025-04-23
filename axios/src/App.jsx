import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  


  function getData(){

    let url = "https://randomuser.me/api/?results=5"

    axios.get(url)
    .then((res) => console.log(res))
  
  }

  getData()
 



  return (
    <>

        
    </>
  )
}

export default App
