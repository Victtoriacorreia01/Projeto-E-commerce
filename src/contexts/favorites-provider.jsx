import React, { createContext, useState, useContext } from 'react';


export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addProductToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeProductFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
  };

  const fetchFavorites = () => {
  
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addProductToFavorites,
        removeProductFromFavorites,
        fetchFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
