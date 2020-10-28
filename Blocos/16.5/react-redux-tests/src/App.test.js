import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{ component }</Provider>),
  store
});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

});

// test('a click in a button should increment the value of clicks', () => {
//   const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

//   expect(queryByText('5')).toBeInTheDocument();
// });

test('a click in a button should increment the value of clicks', () => {
  const { queryByText, getByRole } = renderWithRedux(<App />);
  const button = getByRole('button');
  expect(queryByText('0')).toBeInTheDocument();

  for (let index = 0; index < 10; index += 1) {
    fireEvent.click(button);
  }
  expect(queryByText('10')).toBeInTheDocument();
});
