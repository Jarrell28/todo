import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

function TodoList(props) {

  return (
    <ListGroup as="ul">
      {props.list.map(item => (
        <ListGroup.Item as="li" variant={item.complete ? "success" : "danger"}
          key={item._id} onClick={() => props.handleComplete(item._id)}>
          {item.text} - {item.assignee}
        </ListGroup.Item>
      ))}
    </ListGroup>
    // className = {`complete-${item.complete.toString()}`}
  );
}

export default TodoList;
