import produce from 'immer';
import {TODO_ACTION_CONST} from '../../services/const/actionConst';
import { nanoid } from 'nanoid';
import { TODO_CONST_STRING } from '../../services/const/generalConst';

const {
  TODO_CREATE_INPUT
} = TODO_CONST_STRING;

const {
  CREATE_TODO,
  CREATE_TODO_INPUT,
  CREATE_TODO_COMPLETE,
  CREATE_TODO_UPDATE,
  CREATE_TODO_DELETE
} = TODO_ACTION_CONST;

const initState = {
  todoList: [],
  inputData: {
    [TODO_CREATE_INPUT]: ''
  }
}

export default function todoReducer(state = initState, action) {
  return produce(state, draft => {

    switch (action.type) {
      case CREATE_TODO:
        draft.todoList.push({
          id: nanoid(),
          task: draft.inputData[TODO_CREATE_INPUT],
          isCompleted: false
        })
        draft.inputData[TODO_CREATE_INPUT] = "";
        break;
      case CREATE_TODO_INPUT:
        draft.inputData[action.payload.name] = action.payload.value
        break;
      case CREATE_TODO_COMPLETE:
        console.log(action.payload.task)
        let index = draft.todoList.findIndex((todo) => (todo.id === action.payload.id))
        draft.todoList[index].isCompleted = !draft.todoList[index].isCompleted 
        break;
      case CREATE_TODO_UPDATE:
        break;
      case CREATE_TODO_DELETE:
        break;
      default:      
      return state;
    }
  })
}

//It needs to use push method in order to transfer data into array.                   
