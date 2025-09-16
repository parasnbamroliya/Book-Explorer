import React from 'react';
import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../context/FavoritesContext';
import Favorites from '../routes/Favorites';


test('renders empty favorites message', () => {
    render(
        <FavoritesProvider>
            <Favorites />
        </FavoritesProvider>
    );
    expect(screen.getByText(/No favorites yet/i)).toBeInTheDocument();
});