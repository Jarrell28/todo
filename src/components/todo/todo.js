import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './todo.scss';

function ToDo() {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list);
  }, [])

  useEffect(() => {
    let count = list.filter(item => !item.complete).length;
    document.title = `Todo App-${count} item(s) to complete`
  }, [list])

  return (
    <>
      <Navbar bg="info" className="mb-5" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
      </Navbar>
      <Container>
        <h3 className="bg-info text-light p-2">
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h3>
      </Container>

      <Container>
        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </section>
      </Container>
    </>
  );
}


export default ToDo;
