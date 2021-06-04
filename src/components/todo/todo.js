import React, { useState, useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/ajax';
import { SettingsContext } from '../../context/settings';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './todo.scss';

function ToDo() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  const [getResults, postResult, updateResult, deleteResult] = useAjax();
  const settings = useContext(SettingsContext);

  const addItem = (item) => {
    item.complete = false;
    postResult(item, newItem => setList([...list, newItem]));
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      updateResult(id, item, (updatedItem) => setList(list.map(listItem => listItem._id === item._id ? updatedItem : listItem)));
    }

  };

  const deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      deleteResult(id, () => setList(list.filter(listItem => {
        console.log(typeof listItem._id, typeof id)
        return listItem._id !== id
      })));
    }
  }

  useEffect(() => {
    getResults((dataArray) => setList(dataArray));
    console.log(settings);
  }, [])

  useEffect(() => {
    let count = list.filter(item => !item?.complete).length;
    document.title = `Todo App-${count} item(s) to complete`;

    setFilteredList(list.filter((item) => settings.hideCompleted ? !item.complete : item).filter((item, i) => i < settings.itemsPerPage).sort((a, b) => {
      return a[settings.sortBy] > b[settings.sortBy] ? 1 : -1;
    }));
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
            list={filteredList}
            handleComplete={toggleComplete}
            handleDelete={deleteItem}
          />
        </section>
      </Container>
    </>
  );
}


export default ToDo;
