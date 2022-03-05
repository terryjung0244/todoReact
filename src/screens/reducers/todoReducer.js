import produce from 'immer';

const initState = {

}

export default function todoReducer(state = initState, action) {
  return produce(state, draft => {

    switch (action.type) {
      default:
      return state;
    }
  })
}