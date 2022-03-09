import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  todoReducerCreateTodoAction,
  todoReducerCreateTodoInputAction,
  todoReducerCreateTodoComplete,
  todoReducerCreateTodoDelete,
  todoReducerCreateTodoUpdate
} from '../reducers/todoAction';
import { TODO_CONST_STRING } from '../../services/const/generalConst';

const {
  TODO_CREATE_INPUT,
  TODO_UPDATE_INPUT
} = TODO_CONST_STRING;

const TodoComponenet = () => {

  const todoReducerSelector = useSelector(state => state.todoReducer);

  const dispatch = useDispatch();

  const onClickCreateTodo = () => {
    dispatch(todoReducerCreateTodoAction())
  };

  const onChangeTodoInput = (e) => {
    dispatch(todoReducerCreateTodoInputAction({
      name: e.target.name, value: e.target.value
    }))
  }

  const onClickComplete = (todo) => {
    dispatch(todoReducerCreateTodoComplete(todo))
  }

  const onClickDelete = (todo) => {
    dispatch(todoReducerCreateTodoDelete(todo))
  }

  const onClickUpdate = (todo) => {
    dispatch(todoReducerCreateTodoUpdate(todo))
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
            <div key={index} style={{ 
                display: 'flex', margin: '0 10px', 
                justifyContent: 'space-evenly',
                color: (todo.isCompleted) ? 'tomato' : 'black'
              }}>
              <div>
                {todo.task}
              </div>
              <div onClick={() => onClickUpdate(todo)}>
                Update
              </div>
              <div style={{ display: (todo.isUpdate) ? 'flex' : 'none' }}>
                <input
                  placeholder='Something todo today?'
                  name={TODO_UPDATE_INPUT}
                  value={todoReducerSelector.inputData[TODO_UPDATE_INPUT]}
                  onChange={(e) => onChangeTodoInput(e)}
                />
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