import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import Movie from "../Components/Movie";
import { Movies } from "../Data/MovieData";
import { CgSpinner } from "react-icons/cg";

const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2030" },
];

const TimesData = [
  { title: "Sort By Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];

const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

const MoviesPage = () => {
  const maxPage = 8;
  const [page, setPage] = useState(maxPage);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const HandleLoadingMore = () => setPage(page + maxPage);

  const filteredMovies = Movies.filter((movie) => {
    const matchSearch = !search || movie.name.toLowerCase().includes(search);

    const matchCategory =
      category.title === "Category" || movie.category === category.title;

    const matchYear =
      year.title === "Sort By Year" ||
      (() => {
        const [min, max] = year.title.split(" - ").map(Number);
        return movie.year >= min && movie.year <= max;
      })();

    const matchTimes =
      times.title === "Sort By Hours" ||
      (() => {
        const [min, max] = times.title.split(" - ").map(Number);
        return movie.time >= min && movie.time <= max;
      })();

    const matchRates =
      rates.title === "Sort By Rates" || movie.rate === Number(rates.title[0]);

    return (
      matchSearch && matchCategory && matchYear && matchTimes && matchRates
    );
  });

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters
          category={category}
          setCategory={setCategory}
          year={year}
          setYear={setYear}
          times={times}
          setTimes={setTimes}
          rates={rates}
          setRates={setRates}
        />

        <p className="text-lg font-medium my-6">
          Total{" "}
          <span className="font-bold text-subMain">
            {filteredMovies.length} movies found
          </span>
        </p>

        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredMovies.slice(0, page).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>

        {page < filteredMovies.length && (
          <div className="w-full flex-colo md:my-20 my-10">
            <button
              onClick={HandleLoadingMore}
              className="flex flex-row gap-3 items-center text-white py-3 px-8 rounded font-semibold border-2 border-subMain">
              Loading More <CgSpinner className="animate-spin" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MoviesPage;
