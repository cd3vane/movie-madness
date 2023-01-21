import { Movie } from "../types";

export type ListState = {
  watchlist: Movie[];
  watched: Movie[];
  addWatchlist: (movie: Movie) => void;
  removeWatchlist: (id: number) => void;
  addWatched: (movie: Movie) => void;
  removeWatched: (id: number) => void;
};

type ReducerAction =
  | { type: "ADD_WATCHLIST"; payload: Movie }
  | { type: "REMOVE_WATCHLIST"; payload: number }
  | { type: "ADD_WATCHED"; payload: Movie }
  | { type: "REMOVE_WATCHED"; payload: number };

const ListReducer = (state: ListState, action: ReducerAction): ListState => {
  switch (action.type) {
    case "ADD_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie: Movie) => movie.id !== action.payload
        ),
      };
    case "ADD_WATCHED":
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    case "REMOVE_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (movie: Movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default ListReducer;
