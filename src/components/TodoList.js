import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const TodoList = props => {
    return (
        <div className ='header text-center'>
          <h3 className="text-white">What are your daily tasks ?</h3>
          <button type="button" class="btn btn-lg btn-light mt-3">
            Add Task
          </button>
        </div>
    );
};

TodoList.propTypes = {
    
};

export default TodoList;