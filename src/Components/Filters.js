import React from "react";
import { CategoriesData } from "../Data/CategoriesData";

const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2030" },
];


function Filters({
  category,
  setCategory,
  year,
  setYear,

}) {
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      <select
        className="bg-main text-white p-3 rounded text-xs w-full"
        value={category.title}
        onChange={(e) => setCategory({ title: e.target.value })}>
        <option>All Categories</option>
        {CategoriesData.map((cat, i) => (
          <option key={i}>{cat.title}</option>
        ))}
      </select>

      <select
        className="bg-main text-white p-3 rounded text-xs w-full"
        value={year.title}
        onChange={(e) => setYear({ title: e.target.value })}>
        {YearData.map((y, i) => (
          <option key={i}>{y.title}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
