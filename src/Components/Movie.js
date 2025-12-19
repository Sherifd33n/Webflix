import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/favoriteContext"; 
import { toast } from "react-toastify";

function Movie({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorite = favorites.some((m) => m.name === movie.name);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(movie.name);
      toast.info(`${movie.name} removed from favorites`);
    } else {
      addToFavorites(movie);
      toast.success(`${movie.name} added to favorites`);
    }
  };

  return (
    <>
      <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
        <Link to={`/movie/${movie?.name}`} className="w-full">
          <img
            src={`/images/movies/${movie?.image}`}
            alt={movie?.name}
            className="w-full h-56 object-cover"
          />
        </Link>
        <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
          <h3 className="font-semibold truncate">{movie?.name}</h3>
          <button
            onClick={handleToggleFavorite}
            className={`h-9 w-9 text-sm flex-colo transitions border-2 rounded-md ${
              isFavorite
                ? "text-subMain border-transparent bg-white"
                : "bg-subMain border-subMain text-white hover:bg-transparent"
            }`}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
}

export default Movie;
