import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';

const TodoList = () => {

  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState([])

  //is activated when the list values change
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
    setTaskList(tempList) //update tasklist
    setModal(false)

  }

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}

const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
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
        {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </>

  );
};


export default TodoList;