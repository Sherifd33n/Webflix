import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import Movies from "./Screens/Movies";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import SingleMovies from "./Screens/SingleMovies";
import WatchPage from "./Screens/WatchPage";
import Password from "./Screens/Dashboard/Password";
import FavoriteMovies from "./Screens/Dashboard/FavouriteMovies";
import MovieList from "./Screens/Dashboard/Admin/MovieList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Categories from "./Screens/Dashboard/Admin/Categories";
import Users from "./Screens/Dashboard/Admin/Users";
import AddMovie from "./Screens/Dashboard/Admin/AddMovie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<SingleMovies />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/password" element={<Password />} />
        <Route path="/favorite" element={<FavoriteMovies />} />
        <Route path="/movieslist" element={<MovieList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addmovie" element={<AddMovie />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
