import React, {useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask'

const TodoList = () => {

  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")

    if (arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const toggle = () => {
    setModal(!modal)
  }

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(taskList)
    setModal(false)

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

      <div className="task-container">

        <p>text</p>
        {taskList.map((obj) => <li>{obj.Name}</li>)}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </>

  );
};


export default TodoList;