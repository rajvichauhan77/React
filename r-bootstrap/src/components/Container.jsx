import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ContainerExample() {
  return (
    <Container className='mt-5 border'>
      <Row>
        <Col  md >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae blanditiis. Veritatis saepe enim eaque magnam voluptas alias perspiciatis, atque voluptates ratione voluptatum! Debitis est aut beatae aperiam. Totam, voluptatibus!
        <br />
        <Button variant="outline-primary">Click</Button>
        </Col>
       
        <Col  md>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae blanditiis. Veritatis saepe enim eaque magnam voluptas alias perspiciatis, atque voluptates ratione voluptatum! Debitis est aut beatae aperiam. Totam, voluptatibus!
        <br />
        <Button variant="outline-primary">Click</Button>
        </Col>
       
        <Col  md  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae blanditiis. Veritatis saepe enim eaque magnam voluptas alias perspiciatis, atque voluptates ratione voluptatum! Debitis est aut beatae aperiam. Totam, voluptatibus!
        <br />
        <Button variant="outline-primary">Click</Button>
        </Col>
       
      </Row>
    </Container>
  );
}

export default ContainerExample;