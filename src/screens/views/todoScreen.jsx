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

  const onClickComplete = () => {
    console.log("complete")
  }

  const onClickDelete = () => {
    console.log("delete")
  }

  const onClickUpdate = () => {
    console.log("update")
  }

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
            <div key={index} style={{ 
                display: 'flex', margin: '0 10px', justifyContent: 'space-evenly'
              }}>
              <div>
                {todo.task}
              </div>
              <div onClick={() => onClickUpdate(todo)}>
                Update
              </div>
              <div onClick={() => onClickComplete(todo)}>
                Complete
              </div>
              <div onClick={() => onClickDelete(todo)}>
                Delete
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoComponenet;     