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


        setList([...list, obj])
        // console.log(list)
    }


  

    return(

        <>
           <Addtask setTask={setTask} handleTask={handleTask}/>

           <List list={list} />
        </>

    )

}

export default Task