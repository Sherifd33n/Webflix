import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MovieData";
import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper";
import { useFavorites } from "../../context/favoriteContext";

function Banner() {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={500}
        loop={true}
        modules={[Autoplay]}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48">
        {Movies.slice(0, 6).map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`/images/movies/${movie.image}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.name}
              </h1>

              <div className="flex gap-5 items-center text-dry">
                <FlexMovieItems movie={movie} />
              </div>

              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                  Watch
                </Link>

                <button
                  onClick={() => toggleFavorite(movie)}
                  className="bg-white hover:text-subMain transitions px-4 py-3 rounded text-sm bg-opacity-30">
                  <FaHeart
                    className={
                      isFavorite(movie.name) ? "text-red-500" : "text-white"
                    }
                  />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
