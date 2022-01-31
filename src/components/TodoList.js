import React, { useState } from 'react';
import CreateTask from '../modals/CreateTask'

const TodoList = () => {

  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState([])

  const toggle = () => {
    setModal(!modal)
  }

  const saveTask = (taskObj ) => {
    let tempTaskList = taskList

    tempTaskList.push(taskObj) 

    setTaskList(tempTaskList)
  }

  return (
    <>
      <div className='header text-center'>
        <h3 className="text-white">What are your daily tasks ?</h3>

        <button type="button"
          className="btn btn-lg btn-light mt-3"
          onClick={() => setModal(true)}
        >
          Add Task
        </button>
      </div>
      <CreateTask modal={modal} toggle={toggle} save ={saveTask}/>
    </>

  );
};


export default TodoList;