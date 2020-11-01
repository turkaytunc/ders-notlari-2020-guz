import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ders Notlari link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ders Notlari/i);
  expect(linkElement).toBeInTheDocument();
});
