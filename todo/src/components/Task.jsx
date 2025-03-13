import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { useState} from "react"
import Addtask from "./Addtask"
import { List } from "./List"



function Task(){

    const [task, setTask] = useState("")
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])



    function handleTodo(ele, index){

        let newTodo = [...todo]

        newTodo[index] = {
            to : ele,
            status : false,
            id :  uuidv4() 
        }

         setTodo(newTodo)

         setCount(index+2)
    }

    function handleTask(){
        let obj = {
            task,
            status : false,
            id: uuidv4() 
        }

        setTask(" ")
        setCount(0)
        setTodo([])

        // list.push(obj)
         setList([...list, obj])


    }


        function updateTask(id){
            const update = list.map((ele) => ele.id === id ? {...ele, status : !ele.status} : ele)
            
            setList(update)
            
    }

        function delTask(id){
            const update = list.filter((ele) => ele.id != id)
            setList(update)
        }


  

    return(

        <>
           <Addtask setTask={setTask} handleTask={handleTask} count={count} setCount={setCount} todo={todo}/>

           <List list={list} delTask={delTask} updateTask={updateTask} handleTodo={handleTodo}/>
        </>

    )

}

export default Task