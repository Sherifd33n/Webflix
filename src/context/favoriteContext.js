import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (name) => {
    return favorites.some((m) => m.name === name);
  };

  const addToFavorites = (movie) => {
    if (!isFavorite(movie.name)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (name) => {
    setFavorites(favorites.filter((m) => m.name !== name));
  };

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.name)) {
      removeFromFavorites(movie.name);
    } else {
      addToFavorites(movie);
    }
  };

  const clearFavorites = () => setFavorites([]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
