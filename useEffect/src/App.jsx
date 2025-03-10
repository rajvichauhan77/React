import { useEffect, useState } from 'react'
import './App.css'
import { User } from './assets/user'

function App() {
  const [status, setStatus] = useState(false)
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch(`https://randomuser.me/api/`)
    .then((res) => res.json())
    .then((res) => setData(res.results))
  }



  useEffect(() => {
    fetchData()
  },[count, status ])
    
  

  return (
    <>
    <User data={data}/>
    <button onClick={() => {setStatus(!status)}}>{status ? "True" : "False"} - {count}</button>

    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li onClick={() => setCount(count-1)} className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">{count}</a></li>
    <li onClick={() => setCount(count+1)} className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>

    </>
  )
}

export default App
