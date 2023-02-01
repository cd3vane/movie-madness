import { createContext, useEffect, useReducer } from "react";
import { initialState, ListState, ListReducer } from "../reducers/ListReducer";
import { api } from "../utils/api";
import { Movie } from "../types";

export const ListContext = createContext<ListState>(initialState);

export const ListProvider = (props: any) => {
  const [state, dispatch] = useReducer(ListReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const getListById = async (listId : string) => {
    try{
      const watched = '63acc44c33443f001653ca0a'
      console.log(listId)
      const res = await api.get(`/lists/list/${watched}`);
      console.log(res.data.movies)
      dispatch({ type: "GET_WATCHED", payload: res.data.movies });
    } catch(err){
      console.log(err);
    }
    
  }

  const addMovieToWatched = async (listId : string, movie: Movie ) => {
    try {
      const body = {
        title: movie.title,
        movieId: movie.id,
        poster_path: movie.poster_path
      };
        await api.put(`/lists/list/${listId}`, body);
  
        dispatch({ type: "ADD_WATCHED", payload: movie });
      } catch (err) {
        console.log(err);
      }
    
  };
  const removeMovieFromWatched = async (listId : string, movieId: string) => {
    try{
      const res = await api.delete(`/lists/list/${listId}/${movieId}`);

      dispatch({ type: "REMOVE_WATCHED", payload: movieId });
      console.log(res.data)
    } catch(err) {
      console.log(err)
    }
    
    
  };

  return (
    <ListContext.Provider
      value={{
        watched: state.watched,
        watchedCount: state.watchedCount,
        listLoading: state.listLoading,
        removeWatched: removeMovieFromWatched,
        addWatched: addMovieToWatched,
        getListById: getListById,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
