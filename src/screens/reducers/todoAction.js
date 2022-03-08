import {TODO_ACTION_CONST} from '../../services/const/actionConst';

const {
  CREATE_TODO,
  CREATE_TODO_INPUT,
  CREATE_TODO_COMPLETE,
  CREATE_TODO_UPDATE,
  CREATE_TODO_DELETE
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

export const todoReducerCreateTodoComplete = (todo) => {
  return {
    type: CREATE_TODO_COMPLETE, payload: todo
  }
}

export const todoReducerCreateTodoUpdate = (todo) => {
  return {
    type: CREATE_TODO_UPDATE, payload: todo
  }
};

export const todoReducerCreateTodoDelete = (todo) => {
  return {
    type: CREATE_TODO_DELETE, payload: todo
  }
}
