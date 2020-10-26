import { configureStore, createStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const newStore = createStore({
  reducer: {
    counter: counterReducer,
  },
});

export default newStore;
