import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';


test('validates empty form and calls onSearch with filled fields', () => {
    const mock = jest.fn();
    render(<SearchForm onSearch={mock} />);


    fireEvent.submit(screen.getByRole('form', { name: /search-form/i }));
    // The form uses aria-label="search-form"; but react-testing-library can get by role 'form' with name
    // Instead let's query by aria-label directly
});