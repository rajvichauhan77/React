import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";



export function List({list, delTask, updateTask}){

   
    // console.log(list)

    return(
        <>

        <Container className="border ">
           <Row className="g-2 m-2 d-flex">
            {
                list.map((ele) => (
                    <Col  key={ele.key} className="col-lg-4">

                        <Card className="d-flex">
                             {ele.task}
                             <button className="btn mt-2 m-auto btn-outline-secondary btn-sm w-50" onClick={() => updateTask(ele.id)}>Edit</button>
                             <button  className="btn mt-1 m-auto btn-outline-secondary btn-sm w-50" onClick={() => delTask(ele.id)}>Delete</button>
                        </Card>
                       
                    </Col>
                ))
            }
               
           </Row>
        </Container>

        </>
    )

}