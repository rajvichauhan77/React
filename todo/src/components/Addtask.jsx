import React from "react"
import {Row, Col,  Button } from "react-bootstrap";


function Addtask({ setTask, handleTask, count, setCount, handleTodo, todo}){

    return(

        <>
            <div className="container mb-5">

                <Row>
                     <Col lg={8} className="mx-auto border rounded-4">
                        <div className="d-flex">
                        <input type="text" onChange={(e) => {setTask(e.target.value); setCount(1)}} className="border p-2 rounded bg-light text-dark" placeholder="Enter task" />
                        
                         <button onClick={handleTask} className="mx-2 btn btn-secondary">Add</button>
                        </div>


                        <div className="row p-4">
                        {[...Array(count)].map((ele, index) => (
                              <div className="col-12 d-flex">

                              <Button className='btn btn-light btn-sm p-0 '  >📝</Button>

                                  <input className="form-control border border-primary" onChange={(e) => {handleTodo(e.target.value, index)} } placeholder=" todo no"/>
                              </div>
                        ))}
                      

                        </div>
    
                     </Col>

                     <Col lg={1} className="mx-auto d-flex">
                    
                    </Col>
                    
                    <Col lg={2}></Col>
                </Row>

               


            </div>

      
        </>

    )

}


export default Addtask