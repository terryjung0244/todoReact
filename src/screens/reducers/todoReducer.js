import produce from 'immer';
import {TODO_ACTION_CONST} from '../../services/const/actionConst';

const {
  CREATE_TODO
} = TODO_ACTION_CONST;

const initState = {
  todoList: []
}

export default function todoReducer(state = initState, action) {
  return produce(state, draft => {

    switch (action.type) {
      case CREATE_TODO:
        draft.todoList.push("Hello")
        break;
      default:
      return state;
    }
  })
}

//It needs to use push method in order to transfer data into array.