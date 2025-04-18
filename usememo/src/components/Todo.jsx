import React from "react";



    const Todo = ({addTodo, todo}) => {

        console.log(todo)


        return(
            <>
                <div>

                    <h1 className="my-5">UseCallback</h1>


                <div className='rounded-2xl   mx-auto  p-4'>
               
                    {
                        todo.map((ele, index) => <p key={index}>{ele} {index}</p> )
                    }  

                </div>  
                
                <button type="button"  className="text-white m-auto mt-3  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Todo</button>
    
                </div>
            </>
        )


    }

export default Todo