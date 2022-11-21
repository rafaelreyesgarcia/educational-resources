import { render, screen } from '@testing-library/react';
import App from './8.simpleStringJest';

test('full test, to assert if a component containing little lemon restaurant string is present in the document.body', () => {
  render(<App />);
  const linkElement = screen.getByText(/little lemon restaurant/i);
  expect(linkElement).toBeInTheDocument();
});

