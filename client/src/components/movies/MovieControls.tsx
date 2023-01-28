import { useContext } from "react";
import { Movie } from "../../types";
import { ListContext } from "../../context/ListContext";

type ControlProps = {
  type: string;
  movie: Movie;
};
function MovieControls({ type, movie }: ControlProps) {
  const { addWatchlist, addWatched, removeWatchlist, removeWatched } =
    useContext(ListContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
            onClick={() => removeWatchlist(movie.id)}
            title="Remove from watchlist"
          >
            +
          </button>

          <button
            className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
            onClick={() => {
              addWatched(movie);
              removeWatchlist(movie.id);
            }}
            title="Add to watched"
          >
            -
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeWatched(movie.id)}
            title="Remove from watched"
          >
            <i className="material-icons">remove_circle_outline</i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => {
              removeWatched(movie.id);
              addWatchlist(movie);
            }}
            title="Add to watchlist"
          >
            <i className="material-icons">add_to_queue</i>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
