import React from "react";
import { Link } from "react-router-dom";

import { useGetMovieDetailsQuery } from "../services/movieDetailsApi";
const SearchCard = ({ id }) => {
  const { data, isFetching } = useGetMovieDetailsQuery(id);
  const movie = data;
  console.log(id);
  console.log(movie);
  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <li className=" p-2" key={movie.imdbID}>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="cursor-pointer flex items-center"
      >
        <img src={movie.Poster} alt={movie.Title} width={"100px"} />
        <div className=" flex flex-col p-2">
          <span className="text-lg font-semibold ml-2">{movie.Title}</span>
          <div className="space-x-2 py-4">
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg ">
              {movie.Type}
            </span>
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg ">
              {movie.Rated}
            </span>
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg">
              {movie.Year}
            </span>

            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg">
              {movie.Runtime}
            </span>
          </div>
          <div className=" h-auto flex items-center lg:mr-12">
            <img
              src="/assets/images/imdb.svg"
              alt="imdb-log"
              className="mr-4 imdb-logo"
            />
            <span className=" text-lg font-semibold dark:text-white">
              {movie.imdbRating} / 10
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SearchCard;
