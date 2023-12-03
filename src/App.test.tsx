import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cypress Testing link', () => {
  render(<App />);
  const linkElement = screen.getByText(/More about Cypress Testing/);
  expect(linkElement).toBeInTheDocument();
});
