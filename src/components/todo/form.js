import React, { useState } from 'react';
import useForm from '../../hooks/form.js';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm(props) {
  const [item, setItem] = useState({});
  const [handleSubmit, handleChange, values] = useForm(formSubmit);

  function formSubmit(item) {
    props.handleSubmit(item);
    const newItem = {};
    setItem(newItem);
  };

  return (
    <>

      <Card style={{ width: '18rem' }} className="mr-5">
        <Card.Body>
          <Card.Title>Add Item</Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control type="text" placeholder="Add To Do List Item" onChange={handleChange} name="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control type="text" placeholder="Assigned To" onChange={handleChange} name="assignee" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
            </Form.Group>

            <Button variant="info" type="submit">Add Item</Button>
          </Form>

        </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;
