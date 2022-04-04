import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePoster from "./MoviePoster";
import { BsPeopleFill, BsHeartFill } from "react-icons/bs";
import { useGetMovieDetailsQuery } from "../../services/movieDetailsApi";
import { Link } from "react-router-dom";
import { addMovie } from "./../../redux/watchListAction";

import { motion } from "framer-motion";

const MovieCard = ({ id }) => {
  const { data, isFetching, error } = useGetMovieDetailsQuery(id);
  const [hasMovie, setHasMovie] = useState(false);
  const movie = data;
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.watchList);

  const addToWatchList = (movie) => {
    dispatch(addMovie(movie));
  };

  useEffect(() => {
    !isFetching &&
    movies.find((storedMovie) => storedMovie.imdbID === movie.imdbID)
      ? setHasMovie(true)
      : setHasMovie(false);
  }, [isFetching, movies]);

  return isFetching ? (
    <div>Loading...</div>
  ) : error ? (
    <div>someThing went wrong</div>
  ) : (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg dark:shadow-white dark:bg-black">
      <div className="absolute top-0 flex justify-between w-full items-center p-4 z-50">
        <div className="bg-white  bg-opacity-50 px-2 rounded-lg">
          <span className="text-white dark:text-black text-sm font-semibold ">
            {movie.Type}
          </span>
        </div>

        <motion.div
          whileHover={{ scale: "1.2" }}
          whileTap={{ scale: "0.8" }}
          transition={{ duration: 0.5 }}
          className="bg-white  bg-opacity-50 p-2 rounded-full group cursor-pointer"
          onClick={() => !hasMovie && addToWatchList(movie)}
        >
          <BsHeartFill
            className={`text-white dark:text-black group-hover:text-red-600 ${
              hasMovie && "text-red-600"
            }`}
          />
        </motion.div>
      </div>
      <Link to={`/movie/${id}`}>
        <MoviePoster poster={movie.Poster} title={movie.Title} />
        <div className="py-6 px-4 text-left">
          <span className="text-gray-400 text-sm font-semibold ">
            {movie.Country.split(",")[0]} ,{movie.Year}
          </span>

          <div className="font-bold text-xl my-6 dark:text-white">
            {movie.Title}
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[50%] h-auto flex items-center">
              <img
                src="/assets/images/imdb.svg"
                alt="imdb-log"
                className="mr-4 imdb-logo"
              />
              <span className="w-[50%] text-base font-semibold dark:text-white">
                {movie.imdbRating} / 10
              </span>
            </div>
            <div className="w-[50%] h-auto flex items-center justify-end">
              <BsPeopleFill className="mr-2" />
              <span className="w-[50%] text-base font-semibold dark:text-white">
                {movie.imdbVotes}
              </span>
            </div>
          </div>
        </div>
        <div className="px-2 mb-4">
          {movie.Genre.split(",").map((genre, i) => (
            <span
              key={i}
              className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
            >
              {genre}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
