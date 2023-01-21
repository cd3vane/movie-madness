import { Movie } from "../types";
import { createContext, useEffect, useReducer } from "react";
import ListReducer, { ListState } from "../reducers/ListReducer";

const initialState: ListState = {
  watchlist: JSON.parse(localStorage.getItem("watchlist") || "[]"),
  watched: JSON.parse(localStorage.getItem("watched") || "[]"),
  addWatched: () => {},
  removeWatched: () => {},
  addWatchlist: () => {},
  removeWatchlist: () => {},
};

export const ListContext = createContext<ListState>(initialState);

export const ListProvider = (props: any) => {
  const [state, dispatch] = useReducer(ListReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie: Movie) => {
    dispatch({ type: "ADD_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchlist = (id: number) => {
    dispatch({ type: "REMOVE_WATCHLIST", payload: id });
  };
  const addMovieToWatched = (movie: Movie) => {
    dispatch({ type: "ADD_WATCHED", payload: movie });
  };
  const removeMovieFromWatched = (id: number) => {
    dispatch({ type: "REMOVE_WATCHED", payload: id });
  };

  return (
    <ListContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addWatchlist: addMovieToWatchlist,
        removeWatchlist: removeMovieFromWatchlist,
        addWatched: addMovieToWatched,
        removeWatched: removeMovieFromWatched,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
