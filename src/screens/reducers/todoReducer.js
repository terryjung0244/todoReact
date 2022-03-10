import produce from 'immer';
import { TODO_ACTION_CONST } from "../../services/const/actionConst";
import { nanoid } from 'nanoid'
import { TODO_CONST_STRING } from '../../services/const/generalConst';

const {TODO_CREATE_INPUT, TODO_UPDATE_INPUT} = TODO_CONST_STRING;

const {
  CREATE_TODO, 
  CREATE_TODO_INPUT,
  UPDATE_TODO_INPUT,
  CREATE_TODO_COMPLETED,
  CREATE_TODO_UPDATE,
  CREATE_TODO_DELETE,
  CLICK_AFTER_UPDATED
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
          isClickedUpdate: false
        });
        draft.inputData[TODO_CREATE_INPUT] = "";
        break;
      case CREATE_TODO_INPUT:
        draft.inputData[action.payload.name] = action.payload.value
        break;
        case UPDATE_TODO_INPUT:
          draft.inputData[action.payload.name] = action.payload.value
          break;
      case CREATE_TODO_COMPLETED:
        // console.log(action.payload)
        let indexCompleted = draft.todoList.findIndex((todo) => todo.id === action.payload.id);
        draft.todoList[indexCompleted].isCompleted = !draft.todoList[indexCompleted].isCompleted;
        break;
      case CREATE_TODO_UPDATE:
        let indexUpdate = draft.todoList.findIndex((todo) => todo.id === action.payload.id);
        draft.todoList[indexUpdate].isClickedUpdate = !draft.todoList[indexUpdate].isClickedUpdate;
        break;
      case CREATE_TODO_DELETE:
        let indexDelete = draft.todoList.findIndex((todo) => todo.id === action.payload.id);
        // splice
        draft.todoList.splice(indexDelete, 1);
        // splice => firstIndex => 어느 인덱스 지울래
        // secondIndex => 거기서부터 몇개 지울래
        break;
      case CLICK_AFTER_UPDATED:
        let indexAfterUpdate = draft.todoList.findIndex((todo) => todo.id === action.payload.id);
        draft.todoList[indexAfterUpdate].task = draft.inputData[TODO_UPDATE_INPUT];
        draft.todoList[indexAfterUpdate].isClickedUpdate = false;
        break;
        default:
        return state;
    }
  })
}
