import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  todoReducerCreateTodoAction,
  todoReducerCreateTodoInputAction
} from '../reducers/todoAction';
import { TODO_CONST_STRING } from '../../services/const/generalConst';

const {
  TODO_CREATE_INPUT
} = TODO_CONST_STRING;

const TodoComponenet = () => {

  const todoReducerSelector = useSelector(state => state.todoReducer);

  const dispatch = useDispatch();

  const onClickCreateTodo = () => {
    dispatch(todoReducerCreateTodoAction())
  };

  const onChangeTodoInput = (e) => {
    dispatch(todoReducerCreateTodoInputAction({name: e.target.name, value: e.target.value}))
  }

  console.log(todoReducerSelector.todoList)

  return (
    <div>
      <div style={{ display: 'flex'}}>
        <div onClick={onClickCreateTodo} style={{ margin: '0 10px'}}>
          Click Me
        </div>
        <div>
          <input
          placeholder='Something todo today?'
          name={TODO_CREATE_INPUT}
          value={todoReducerSelector.inputData[TODO_CREATE_INPUT]}
          onChange={(e) => onChangeTodoInput(e)}
        />
        </div>
      </div>
      <div>
        {todoReducerSelector.todoList.map((todo, index) => {
          return (
            <div key={index} style={{ margin: '0 10px'}}>
              {todo.task}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoComponenet;     