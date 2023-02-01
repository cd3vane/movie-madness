import { Movie } from "../types";

export type ListState = {
  watched: Movie[];
  watchedCount: number;
  removeWatched: any;
  addWatched: any;
};

export const initialState: ListState = {
  watched: [],
  watchedCount: 0,
  removeWatched: () => {},
  addWatched: () => {},
};

type ReducerAction =
  | { type: "ADD_WATCHED"; payload: Movie }
  | { type: "REMOVE_WATCHED"; payload: number };

export const ListReducer = (state: ListState, action: ReducerAction) => {
  switch (action.type) {
    case "ADD_WATCHED":
      return {
        ...state,
        watched: action.payload,
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
