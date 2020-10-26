const INITIAL_STATE = {
  name: '',
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return { ...state, [action.name]: action.value }
    default:
      return state;
  }
}

export default listReducer;