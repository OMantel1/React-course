import { render, screen } from '@testing-library/react';
import MyApp from './MyApp';

test('renders learn react link', () => {
  render(<MyApp />);
  const title = screen.getByText(/Random quotes/i);
  expect(title).toBeInTheDocument();
});

test('renders new quote button', () => {
    render(<MyApp />);
    const newQuote = screen.getByText(/new quote/i);
    expect(newQuote).toBeInTheDocument();
  });
