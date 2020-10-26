const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const defaultValue = 0;

const changeNumber = (state = defaultValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default changeNumber;