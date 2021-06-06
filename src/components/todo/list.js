import React, { useContext } from 'react';
import { SettingsContext } from '../../context/settings';

import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function TodoList(props) {
  const settings = useContext(SettingsContext);

  return (
    <div className="d-flex flex-column todos">
      <div className="list-settings mb-2">
        <div>
          <Button variant={settings.hideCompleted ? "info" : "outline-info"} onClick={settings.toggleCompleted}>Hide Completed</Button>
        </div>

        <div>
          <label htmlFor="perPage">Items Per Page: </label>
          <input type="number" name="perPage" value={settings.itemsPerPage} onChange={settings.handleItemsPerPage} />
        </div>
      </div>
      {
        props.list.map(item => (
          <Modal.Dialog key={item._id} className="mx-0 my-2 shadow p-0 bg-body rounded">
            <Modal.Header className="align-items-center">
              <div>
                <Badge pill variant={item.complete ? "danger" : "success"} className="mr-3" onClick={() => props.handleComplete(item._id)} style={{ cursor: "pointer" }}>{item.complete ? "completed" : "pending"}</Badge> <span>{item.assignee}</span>
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
