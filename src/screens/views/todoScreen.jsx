import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoReducerCreateTodoAction } from '../reducers/todoAction';


const TodoComponenet = () => {

  const todoReducerSelector = useSelector(state => state.todoReducer);

  const dispatch = useDispatch();

  const onClickCreateTodo = (todo) => {
    dispatch(todoReducerCreateTodoAction(todo))
  };


  return (
    <div>
      <div onClick={() => onClickCreateTodo("onClickTodo")}>
        Click Me
      </div>
    </div>
  )
}

export default TodoComponenet
