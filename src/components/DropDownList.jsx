import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DropDownList = () => {
  const { movies } = useSelector((state) => state.watchList);

  return (
    <div className="p-10 w-full fixed left-32 z-50 ">
      <div className="dropdown inline-block relative group">
        <button className="bg-gray-300  text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span className="mr-1">Your Movies</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 group-hover:block transition delay-500 w-[400px] max-h-[400px] overflow-y-scroll bg-opacity-50 bg-gray-100 divide-y divide-gray-400 space-y-4 rounded-lg px-2 z-50">
          {movies.map((movie) => (
            <li className=" p-2" key={movie.imdbID}>
              <Link
                to={`/movie/${movie.imdbID}`}
                className="cursor-pointer flex items-center"
              >
                <img src={movie.Poster} alt={movie.Title} width={"100px"} />
                <div className=" flex flex-col p-2">
                  <span className="text-lg font-semibold ml-2">
                    {movie.Title}
                  </span>
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownList;
