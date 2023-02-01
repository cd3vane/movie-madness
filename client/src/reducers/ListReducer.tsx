import { Movie } from "../types";

export type ListState = {
  watched: any;
  watchedCount: number;
  listLoading: boolean;
  removeWatched: any;
  addWatched: any;
  getListById: any;
};

export const initialState: ListState = {
  watched: JSON.parse(localStorage.getItem("watched") || '[]'),
  watchedCount: 0,
  listLoading: true,
  removeWatched: () => {},
  addWatched: () => {},
  getListById: () => {},
};

type ReducerAction =
  | { type: "GET_WATCHED"; payload: any } 
  | { type: "ADD_WATCHED"; payload: any }
  | { type: "REMOVE_WATCHED"; payload: any };

export const ListReducer = (state: ListState, action: ReducerAction) => {
  switch (action.type) {
    case "GET_WATCHED":
      return {
        ...state,
        watched: action.payload,
        listLoading: false
      };
    case "ADD_WATCHED":
      return {
        ...state,
        watched: [...state.watched, action.payload],
        watchedCount: state.watchedCount + 1,
        listLoading: false
      };
    case "REMOVE_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (movie: Movie) => movie.id.toString() !== action.payload
        ),
        watchedCount: state.watchedCount - 1,
        listLoading: false
      };
    default:
      return state;
  }
};
