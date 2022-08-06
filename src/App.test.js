import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React App text', () => {
  render(<App />);
  const linkElement = screen.getByText(/React App/i);
  expect(linkElement).toBeInTheDocument();
});
