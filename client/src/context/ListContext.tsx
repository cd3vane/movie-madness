import { createContext, useEffect, useReducer } from "react";
import { initialState, ListState, ListReducer } from "../reducers/ListReducer";
import { api } from "../utils/api";
import { Movie } from "../types";

export const ListContext = createContext<ListState>(initialState);

export const ListProvider = (props: any) => {
  const [state, dispatch] = useReducer(ListReducer, initialState);

  useEffect(() => {
    loadWatched()
  }, [state.watched]);

  const loadWatched = async () => {
    const res = await api.get('/lists/list/watched');

    state.watched = res.data
    state.watchedCount = state.watched.length
  }

  const addMovieToWatched = async (movie: Movie) => {
    try {
        const res = await api.post('/lists/list/watched', movie);
  
        dispatch({ type: "ADD_WATCHED", payload: movie });
  
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    
  };
  const removeMovieFromWatched = (id: number) => {
    dispatch({ type: "REMOVE_WATCHED", payload: id });
  };

  return (
    <ListContext.Provider
      value={{
        watched: state.watched,
        watchedCount: state.watchedCount,
        removeWatched: addMovieToWatched,
        addWatched: removeMovieFromWatched,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
