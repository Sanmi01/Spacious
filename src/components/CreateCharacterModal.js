import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { PlusCircleFill, PlusSquare } from "react-bootstrap-icons";
import { characterItems } from '../data';
import Select from 'react-select';


const CreateCharacterModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const chOptions = characterItems;
    const [field, setField] = useState([]);

    return (
        <>
        {window.location.pathname == "/" ? (
          <p><PlusSquare onClick={handleShow} size={48}/></p>
        ) : (
          <PlusCircleFill
        className="position-absolute bottom-0 end-0"
        onClick={handleShow}
        size={48}
      />
        )}
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control type="url" placeholder="" />
              <Form.Text id="helpBlock" muted>
                Paste the URL of a JPG or PNG of max 20 kb
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="url" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group as={Col} controlId="my_multiselect_field">
            <Form.Label>Friends</Form.Label>
            <Select isMulti
             className="basic-multi-select"
    classNamePrefix="select"
             options={chOptions} />
    </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create Character
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default CreateCharacterModal
