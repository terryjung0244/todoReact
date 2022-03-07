import {TODO_ACTION_CONST} from '../../services/const/actionConst';

const {
  CREATE_TODO,
  CREATE_TODO_INPUT
} = TODO_ACTION_CONST;

export const todoReducerCreateTodoAction = (todo) => {
  return {
    type: CREATE_TODO
  }
}

export const todoReducerCreateTodoInputAction = (inputData) => {
  return {
    type: CREATE_TODO_INPUT, payload: inputData
  }
}