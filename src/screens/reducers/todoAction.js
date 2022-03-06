import {TODO_ACTION_CONST} from '../../services/const/actionConst';

const {
  CREATE_TODO
} = TODO_ACTION_CONST;

export const todoReducerCreateTodoAction = (todo) => {
  return {
    type: CREATE_TODO
  }
}