import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample({sh, setShow}) {

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (

    <Modal    
    show={sh}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}

      className="modal show "
      style={{ display: 'block', position: 'initial' }}
      >


      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti incidunt amet eligendi commodi eum minus? Illum voluptatum dolorum ipsam sint temporibus vero pariatur totam, quos vel facere accusamus optio obcaecati!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}

export default StaticExample;