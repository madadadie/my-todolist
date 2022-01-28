import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = props => {
    return (
        <div>
            <h3>What are your daily tasks ?</h3>
            <div class="form-group">
                <input placeholder='Add task...' type='text' className='todo-input'/>
            </div>

          <button className='todo-button'>
            ADD
          </button>
        </div>
    );
};

TodoList.propTypes = {
    
};

export default TodoList;