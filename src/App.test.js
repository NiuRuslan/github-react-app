/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import App from './containers/App';

test('renders search bar', () => {
  const { getByPlaceholderText } = render(<App />);
  const linkElement = getByPlaceholderText(/Search by repo's name/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders filter', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Select license to filter/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders loader', () => {
  const { getByAltText } = render(<App />);
  const linkElement = getByAltText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
