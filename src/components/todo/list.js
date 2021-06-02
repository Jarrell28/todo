import React from 'react';

import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

function TodoList(props) {

  return (
    <div className="d-flex flex-column" style={{
      minWidth: "300px"
    }}>
      {
        props.list.map(item => (
          <Modal.Dialog key={item._id} className="m-2 shadow p-0 bg-body rounded">
            <Modal.Header className="align-items-center">
              <div>
                <Badge pill variant={item.complete ? "success" : "danger"} className="mr-3" onClick={() => props.handleComplete(item._id)}>{item.complete ? "pending" : "completed"}</Badge> <span>{item.assignee}</span>
              </div>
              <button type="button" className="close" onClick={() => props.handleDelete(item._id)}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
            </Modal.Header>
            <Modal.Body className="pb-1">
              {item.text}
            </Modal.Body>
            <Modal.Footer className="m-0 border-top-0 pt-0">
              <p className="m-0" style={{ fontSize: "12px" }}>Difficulty: {item.difficulty}</p>
            </Modal.Footer>
          </Modal.Dialog>
        ))
      }
    </div >
  );
}

export default TodoList;
