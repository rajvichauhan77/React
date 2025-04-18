import React, {useCallback,  useState  } from "react";
import Todo from "./Todo";



const UseCallback = () => {

    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])

    const addTodo = useCallback(()=>{
        setTodo([...todo, "Todo -"])
    }, [todo])


    return(
        <>
            
            <div className="w-xl mt-5 shadow p-4 mx-auto my-5 text-center">


            <Todo addTodo={addTodo} todo={todo}  />

            <button type="button" onClick={() => setCount(count+1)} className="m-auto text-3xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{count} 

            </button>

            </div>
        </>
    )
}
export default UseCallback