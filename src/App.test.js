// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApexHash title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApexHash/i);
    expect(titleElement).toBeInTheDocument();
});
