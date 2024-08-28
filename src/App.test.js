import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders toolbar buttons and canvas', () => {
  render(<App />);
  const drawingButton = screen.getByText(/Drawer/i);
  const textboxButton = screen.getByText(/TextBox/i);
  const eraserButton = screen.getByText(/Eraser/i);
  const canvas = screen.getByRole('img');

  expect(drawingButton).toBeInTheDocument();
  expect(textboxButton).toBeInTheDocument();
  expect(eraserButton).toBeInTheDocument();
  expect(canvas).toBeInTheDocument();
});