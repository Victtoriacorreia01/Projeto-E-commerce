import React, { createContext, useState, useContext } from 'react';


export const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addProductToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((item) => item.id === product.id)) {
        return prevFavorites;
      } else {
        return [...prevFavorites, product];
      }
    });
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

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export default useFavorites;
