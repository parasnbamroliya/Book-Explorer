import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const FavoritesContext = createContext();


export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage('book_favorites', []);


    const addFavorite = (book, note = '') => {
        setFavorites((prev) => {
            if (prev.find((b) => b.id === book.id)) return prev;
            return [...prev, { ...book, note }];
        });
    };


    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((b) => b.id !== id));
    };


    const updateNote = (id, note) => {
        setFavorites((prev) => prev.map((b) => (b.id === id ? { ...b, note } : b)));
    };


    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, updateNote }}>
            {children}
        </FavoritesContext.Provider>
    );
}


export function useFavorites() {
    return useContext(FavoritesContext);
}