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
            className="ctrl-btn"
            onClick={() => removeWatchlist(movie.id)}
            title="Remove from watchlist"
          >
            <i className="material-icons">remove_circle_outline</i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => {
              addWatched(movie);
              removeWatchlist(movie.id);
            }}
            title="Add to watched"
          >
            <i className="material-icons">video_library</i>
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
