import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newItem = {};
    setItem(newItem);
  };

  return (
    <>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Add Item</Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control type="text" placeholder="Add To Do List Item" onChange={handleInputChange} name="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control type="text" placeholder="Assigned To" onChange={handleInputChange} name="assignee" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
            </Form.Group>

            <Button variant="info" type="submit">Add Item</Button>
          </Form>

        </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;
