import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './component/app';

import store from './store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { FETCH_COMPANY_DETAILS_REQUEST } from './store/actionTypes';

const initialState = {};

const fakeStore = createStore(
  rootReducer,
  initialState
);

const renderWithRedux = (
  component: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined,
  { initialState, store = fakeStore } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  };
};


test('renders search field', () => {
  render(<Provider store={store}><App /></Provider>);

  const searchElement = screen.getByPlaceholderText(/enter company symbol/i);
  expect(searchElement).toBeInTheDocument();

  const searchButton = screen.getByRole('button', { name: 'Search' })
  expect(searchButton).toBeInTheDocument();
});

test('shows loading indicator when searched for a stock', () => {
  render(<Provider store={store}><App /></Provider>);

  const searchElement = screen.getByPlaceholderText(/enter company symbol/i);
  const searchButton = screen.getByRole('button', { name: 'Search' })

  userEvent.type(searchElement, 'aapl')
  expect(searchElement).toHaveValue('aapl')

  fireEvent.click(searchButton)
  screen.getByText(/Loading.../i)
});

test('fetches result when searched for a stock', async () => {

  fakeStore.dispatch = jest.fn();

  renderWithRedux(<App />);


  const searchElement = screen.getByPlaceholderText(/enter company symbol/i);
  const searchButton = screen.getByRole('button', { name: 'Search' })

  userEvent.type(searchElement, 'aapl')
  expect(searchElement).toHaveValue('aapl')

  fireEvent.click(searchButton)
  expect(fakeStore.dispatch).toHaveBeenCalled();
  expect(fakeStore.dispatch).toHaveBeenLastCalledWith({
    type: FETCH_COMPANY_DETAILS_REQUEST,
    payload: {
      searchTerm: "aapl",
    }
  });
  //await screen.findByText(/Open/i)
});
