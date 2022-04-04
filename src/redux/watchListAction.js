import { addToWatchList, removeFromWatchList } from "./watchListSlicer";
import { toast } from "react-toastify";

export const addMovie = (movie) => (dispatch) => {
  dispatch(addToWatchList(movie));
  toast.success("Movie added into your watchlist!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const removeMovie = (id) => (dispatch) => {
  dispatch(removeFromWatchList(id));
  toast.error("Movie removed from your watchlist!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
