import React, { useState } from "react";
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import { useFavorites } from "../../context/favoriteContext";
import { toast } from "react-toastify";

function FavoriteMovies() {
  const { favorites, clearFavorites, removeFromFavorites } = useFavorites();

  const [confirmMovie, setConfirmMovie] = useState(null);

  const confirmDelete = (name) => {
    removeFromFavorites(name);
    toast.success("Movie removed from favorites");
    setConfirmMovie(null);
  };

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorite Movies</h2>

          {favorites.length > 0 && (
            <button
              onClick={() => {
                clearFavorites();
                toast.success("All favorites cleared");
              }}
              className="bg-main hover:bg-subMain border border-subMain text-white py-2 px-6 rounded">
              Delete All
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <p className="text-gray-400">No favorite movies yet.</p>
        ) : (
          <Table
            data={favorites}
            admin={false}
            onDelete={(name) => setConfirmMovie(name)}
          />
        )}
      </div>
      {confirmMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-main p-6 rounded-lg w-80 text-center">
            <h3 className="text-lg font-semibold mb-4">Delete this movie?</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => confirmDelete(confirmMovie)}
                className="bg-red-600 text-white px-4 py-2 rounded">
                Delete
              </button>
              <button
                onClick={() => setConfirmMovie(null)}
                className="bg-gray-600 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </SideBar>
  );
}

export default FavoriteMovies;
