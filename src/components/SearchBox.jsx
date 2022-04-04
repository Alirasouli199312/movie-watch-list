import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useGetMoviesByTitleQuery } from "../services/movieApi";
import SearchCard from "./SearchCard";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const { data, isFetching } = useGetMoviesByTitleQuery({
    title: search,
  });

  console.log(search);

  const searched = data?.movie_results;
  !isFetching && console.log(searched);

  return (
    <div className="flex justify-center">
      <div className="pt-2 relative mx-auto text-gray-600 z-50 ">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <BsSearch />
        </button>
      </div>
      {isFetching ? (
        <div>Loading ...</div>
      ) : (
        <ul
          className={`absolute text-gray-700 pt-1 group-hover:block transition delay-500 w-[400px] max-h-[400px] overflow-y-scroll bg-gray-100 divide-y divide-gray-400 space-y-4 rounded-lg px-2  z-50 mt-10 ${
            !search && "hidden"
          }`}
        >
          {search ? (
            searched.map((movie) => <SearchCard id={movie.imdb_id} />)
          ) : (
            <></>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
