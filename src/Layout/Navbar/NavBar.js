import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { useFavorites } from "../../context/favoriteContext";

function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/movies?search=${search}`);
    setSearch("");
  };

  const { favorites } = useFavorites();

  return (
    <div className="bg-main shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-center">
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img
              src="/images/webflix.png"
              alt="logo"
              className="w-full h-12 object-contain"
            />
          </Link>
        </div>

        <div className="col-span-3">
          <form
            onSubmit={handleSubmit}
            className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
            <button
              type="submit"
              className="bg-subMain w-12 flex-colo h-12 rounded text-white">
              <FaSearch />
            </button>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Movie Name From Here..."
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>

        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavLink to="/movies" className={Hover}>
            Movies
          </NavLink>
          <NavLink to="/about-us" className={Hover}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className={Hover}>
            Contact Us
          </NavLink>
          <NavLink to="/login" className={Hover}>
            <CgUser className="w-7 h-7" />
          </NavLink>
          <NavLink to="/favorite" className={`${Hover} relative`}>
            <FaHeart className="w-6 h-6" />
            {favorites.length > 0 && (
              <div className="w-4 h-4 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-2 -right-2">
                {favorites.length}
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
