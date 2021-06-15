import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Button from './Button';
import CurrencyData from '../CurrencyData'

describe('Button', () => {
    it('renders Button component', () => {
      const {getByText, getByTestId, container} = render(<Button/>);
    })
  });
