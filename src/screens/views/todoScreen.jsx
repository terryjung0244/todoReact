import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoReducerCreateTodoAction } from '../reducers/todoAction';


const TodoComponenet = () => {

  const todoReducerSelector = useSelector(state => state.todoReducer);

  const dispatch = useDispatch();

  const onClickCreateTodo = () => {
    dispatch(todoReducerCreateTodoAction())
  };


  return (
    <div>
      <div onClick={onClickCreateTodo}>
        Click Me
      </div>
      <div>
        {todoReducerSelector.todoList}
      </div>
    </div>
  )
}

export default TodoComponenet
