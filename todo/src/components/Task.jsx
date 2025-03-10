import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { useState} from "react"
import Addtask from "./Addtask"
import { List } from "./List"



function Task(){

    const [task, setTask] = useState("")
    const [list, setList] = useState([])


    function handleTask(){
        let obj = {
            task,
            status : false,
            id: uuidv4() 
        }

        setTask("")

        // list.push(obj)

        setList([...list, obj])

        // console.log(delTask)

        

        function updateTask(id){
            const update = list.map((ele) => ele.id === id ? {...ele, status : !ele.status} : ele)
            
            setList(update)
    }

        function delTask(id){
            const update = list.filter((ele) => ele.id != id)
            setList(update)
        }


    }


  

    return(

        <>
           <Addtask setTask={setTask} handleTask={handleTask}/>

           <List list={list} delTask={delTask} updateTask={updateTask} />
        </>

    )

}

export default Task