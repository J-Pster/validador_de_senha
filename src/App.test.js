import { render, screen } from '@testing-library/react';
import App from './App';

test('Lê Faça Login na tela!', () => {
  render(<App />);
  const linkElement = screen.getByText(/faça login/i);
  expect(linkElement).toBeInTheDocument();
});
