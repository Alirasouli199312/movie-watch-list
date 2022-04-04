import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieApiHeaders = {
  "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  "X-RapidAPI-Key": "179e023074msh23d867bb3dd43d9p1fe13cjsn9ec641a90de6",
};

const baseUrl = "https://dad-jokes.p.rapidapi.com/random/joke";

const createRequest = (url) => ({ url, headers: movieApiHeaders });

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getJokes: builder.query({
      query: ({ type, page }) => createRequest(),
    }),
    // getPopularMovies: builder.query({
    //   query: ({ type, page, year }) =>
    //     createRequest(`/?type=${type}&page=${page ? page : 1}&year=${year}`),
    // }),
    // getSimilarMovie: builder.query({
    //   query: ({ type, page, imdb }) =>
    //     createRequest(`/?type=${type}&imdb=${imdb}&page=${page ? page : 1}`),
    // }),
    // getMoviesByTitle: builder.query({
    //   query: ({ title }) =>
    //     title && createRequest(`/?type=get-movies-by-title&title=${title}`),
    // }),
  }),
});

export const {
  useGetJokesQuery,
  // useGetPopularMoviesQuery,
  // useGetSimilarMovieQuery,
  // useGetMoviesByTitleQuery,
} = movieApi;
