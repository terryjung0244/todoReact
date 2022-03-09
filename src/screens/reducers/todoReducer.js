import produce from 'immer';
import {TODO_ACTION_CONST} from '../../services/const/actionConst';
import { nanoid } from 'nanoid';
import { TODO_CONST_STRING } from '../../services/const/generalConst';

const {
  TODO_CREATE_INPUT,
  TODO_UPDATE_INPUT
} = TODO_CONST_STRING;

const {
  CREATE_TODO,
  CREATE_TODO_INPUT,
  CREATE_TODO_COMPLETE,
  CREATE_TODO_UPDATE,
  CREATE_TODO_DELETE,
  UPDATE_TODO_INPUT
} = TODO_ACTION_CONST;

const initState = {
  todoList: [],
  inputData: {
    [TODO_CREATE_INPUT]: '',
    [TODO_UPDATE_INPUT]: ''
  }
}

export default function todoReducer(state = initState, action) {
  return produce(state, draft => {

    switch (action.type) {
      case CREATE_TODO:
        draft.todoList.push({
          id: nanoid(),
          task: draft.inputData[TODO_CREATE_INPUT],
          isCompleted: false,
          isUpdate: false
        })
        draft.inputData[TODO_CREATE_INPUT] = "";

        break;
      case CREATE_TODO_INPUT:
        draft.inputData[action.payload.name] = action.payload.value
        break;
      case UPDATE_TODO_INPUT:
        draft.todoList[indexUpdate].isUpdate = !draft.todoList[indexUpdate].isUpdate
      case CREATE_TODO_COMPLETE:
        console.log(action.payload.task)
        let indexCompleted = draft.todoList.findIndex((todo) => (todo.id === action.payload.id))
        draft.todoList[indexCompleted].isCompleted = !draft.todoList[indexCompleted].isCompleted 
        break;
      case CREATE_TODO_UPDATE:
        let indexUpdate = draft.todoList.findIndex((todo) => (todo.id === action.payload.id))
        draft.todoList[indexUpdate].isUpdate = !draft.todoList[indexUpdate].isUpdate 
        break;
      case CREATE_TODO_DELETE:
        console.log(action.payload)
        let indexDelete = draft.todoList.findIndex((todo) => (todo.id === action.payload.id))
        draft.todoList.splice(indexDelete, 1); 
        //You can use splice to delete data in the todoList because it's array. 
        break;
      default:      
      return state;
    }
  })
}

//It needs to use push method in order to transfer data into array.                   



