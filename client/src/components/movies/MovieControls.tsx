import { useContext, useState, useEffect } from "react";
import { ListContext } from "../../context/ListContext";
import { Movie } from "../../types";

type ControlProps = {
  movie: any;
};
function MovieControls({ movie }: ControlProps) {
  const { watched, removeWatched, addWatched } = useContext(ListContext);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    if (!!watched.movies) {
      checkIsWatched();
    }
  }, [watched]);

  const checkIsWatched = () => {
    const res = watched.movies.filter(
      (entry: Movie) => entry.title === movie.title
    );
    console.log(res);
    setIsWatched(!!res[0]);
  };

  const toggleWatched = () => {
    const listId = "63acc44c33443f001653ca0a";
    if (isWatched) {
      if (!!movie.movieId) {
        removeWatched(listId, movie.movieId);
      } else {
        removeWatched(watched._id, movie.id);
      }
    } else {
      addWatched(listId, movie);
    }
    setIsWatched(!isWatched);
  };

  const toggleLike = () => {
    console.log("you like this movie");
  };

  const openActions = () => {
    console.log("you like this movie");
  };

  return (
    <div className="inner-card-controls">
      <button
        className={
          isWatched
            ? "rounded py-2 px-4 text-blue-600 hover:border-transparent hover:text-blue-800"
            : "rounded py-2 px-4 text-white hover:border-transparent hover:text-slate-400"
        }
        onClick={toggleWatched}
        title="Set as watched"
      >
        <i className="material-icons">visibility</i>
      </button>

      <button
        className="rounded py-2 px-4 text-white hover:border-transparent hover:text-slate-400"
        onClick={toggleLike}
        title="Add to watched"
      >
        <i className="material-icons">sentiment_very_satisfied</i>
      </button>
      <button
        className="rounded py-2 px-4 text-white hover:border-transparent hover:text-slate-400"
        onClick={openActions}
        title="Add to watched"
      >
        <i className="material-icons">more_horiz</i>
      </button>
    </div>
  );
}

export default MovieControls;
