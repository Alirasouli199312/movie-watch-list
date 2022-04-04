import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  useGetJokesQuery,
  useGetPopularMoviesQuery,
} from "../services/movieApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import MovieCard from "./movieCard/MovieCard";
import SwiperCore, { Pagination } from "swiper";
import DropDownList from "./DropDownList";
import Loading from "./Loading";
import SearchBox from "./SearchBox";

// install Swiper modules
SwiperCore.use([Pagination]);
const HomePage = () => {
  const { data, isFetching } = useGetJokesQuery({});

  console.log(data);

  // const randomMovies = randMovie?.movie_results;

  // const { data: boxOffice } = useGetMoviesQuery({
  //   type: "get-boxoffice-movies",
  // });
  // const boxOfficeMovies = boxOffice?.movie_results;

  // const { data: popular, isFetching } = useGetPopularMoviesQuery({
  //   type: "get-popular-movies",
  //   year: "2020",
  // });
  // const popularMovies = popular?.movie_results;

  return isFetching ? (
    <Loading />
  ) : (
    <div>success</div>
    // <>
    //   <DropDownList />
    //   <SearchBox />
    //   <div className="container divide-y divide-gray-200 mt-10">
    //     <div className="featured-movie mt-10 pt-10">
    //       <h2 className="text-gray-900 text-3xl font-semibold mb-10">
    //         Featured Movies
    //       </h2>
    //       <Swiper
    //         slidesPerView={1}
    //         spaceBetween={10}
    //         autoplay={{ delay: 1000 }}
    //         navigation={true}
    //         loop={true}
    //         breakpoints={{
    //           640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //           },
    //           768: {
    //             slidesPerView: 3,
    //             spaceBetween: 40,
    //           },
    //           1024: {
    //             slidesPerView: 4,
    //             spaceBetween: 50,
    //           },
    //         }}
    //         className="mySwiper "
    //       >
    //         {randomMovies?.map((movie) => (
    //           <SwiperSlide key={movie.imdb_id} className="rounded-lg">
    //             <MovieCard id={movie.imdb_id} />
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //     <div className="featured-movie mt-10  pt-10">
    //       <h2 className="text-gray-900 text-3xl font-semibold mb-10">
    //         Box Office Movies
    //       </h2>
    //       <Swiper
    //         slidesPerView={1}
    //         spaceBetween={10}
    //         autoplay={{ delay: 1000 }}
    //         navigation={true}
    //         loop={true}
    //         breakpoints={{
    //           640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //           },
    //           768: {
    //             slidesPerView: 3,
    //             spaceBetween: 40,
    //           },
    //           1024: {
    //             slidesPerView: 4,
    //             spaceBetween: 50,
    //           },
    //         }}
    //         className="mySwiper "
    //       >
    //         {boxOfficeMovies?.map((movie) => (
    //           <SwiperSlide key={movie.imdb_id} className="rounded-lg">
    //             <MovieCard id={movie.imdb_id} />
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>{" "}
    //     <div className="featured-movie mt-10 pt-10">
    //       <h2 className="text-gray-900 text-3xl font-semibold mb-10">
    //         Popular Movies
    //       </h2>{" "}
    //       <Swiper
    //         slidesPerView={1}
    //         spaceBetween={10}
    //         autoplay={{ delay: 1000 }}
    //         navigation={true}
    //         loop={true}
    //         breakpoints={{
    //           640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //           },
    //           768: {
    //             slidesPerView: 3,
    //             spaceBetween: 40,
    //           },
    //           1024: {
    //             slidesPerView: 4,
    //             spaceBetween: 50,
    //           },
    //         }}
    //         className="mySwiper "
    //       >
    //         {popularMovies?.map((movie) => (
    //           <SwiperSlide key={movie.imdb_id} className="rounded-lg">
    //             <MovieCard id={movie.imdb_id} />
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   </div>
    // </>
  );
};

export default HomePage;
