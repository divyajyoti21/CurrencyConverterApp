import React from 'react';
import { render, fireEvent,screen  } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './redux/reducer'
const store = createStore(reducer)
test('renders App Component', () => {
  const { container,getByText,getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(getByText('Convert')).toBeInTheDocument();
  expect(getByTestId ("currency_from")).toBeInTheDocument();
  expect(getByTestId ("currency_from_amount")).toBeInTheDocument();
  expect(getByTestId ("converted_to")).toBeInTheDocument();
  expect(getByTestId ("converted_value")).toBeInTheDocument();
});
