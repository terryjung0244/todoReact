import produce from 'immer';
import {TODO_ACTION_CONST} from '../../services/const/actionConst';

const {
  CREATE_TODO
} = TODO_ACTION_CONST;

const initState = {

}

export default function todoReducer(state = initState, action) {
  return produce(state, draft => {

    switch (action.type) {
      case CREATE_TODO:
        console.log('hello')
        break;
      default:
      return state;
    }
  })
}