import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";



export function List({list, setList}){

    function updatetask(id){
            const updatetask = list.map((ele) => ele.id === id ? {...ele, status : !ele.status} : ele)
            setList(updatetask)
    }

    function deltask(id){
        const deltask = list.filter((ele) => ele.id != id)
        setList(deltask)
    }

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
                             <button className="btn mt-2 m-auto btn-outline-secondary btn-sm w-50" onClick={() => updatetask(ele.id)}>Edit</button>
                             <button  className="btn mt-1 m-auto btn-outline-secondary btn-sm w-50" onClick={() => deltask(ele.id)}>Delete</button>
                        </Card>
                       
                    </Col>
                ))
            }
               
           </Row>
        </Container>

        </>
    )

}