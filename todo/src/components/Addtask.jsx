import React from "react"



function Addtask({ setTask,handleTask}){

    return(

        <>
            <div className="container ">
                <input type="text" onChange={(e) => setTask(e.target.value)} className="border p-2 rounded bg-light text-dark" placeholder="Enter task"/>


                <button onClick={handleTask} className="mx-2 btn btn-secondary">Add</button>
            </div>
        </>

    )

}


export default Addtask