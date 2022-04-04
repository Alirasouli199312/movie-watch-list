import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieDetailsApiHeaders = {
  "x-rapidapi-host": "",
  "x-rapidapi-key": "",
};

const baseUrl = process.env.REACT_APP_MOVIE_DETAILS_API_URL;

const createRequest = (url) => ({ url, headers: movieDetailsApiHeaders });
export const movieDetailsApi = createApi({
  reducerPath: "movieDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query({
      query: (id) => createRequest(`/?r=json&i=${id}`),
    }),
  }),
});

export const { useGetMovieDetailsQuery } = movieDetailsApi;
