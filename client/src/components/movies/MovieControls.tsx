import { useContext } from "react";
import { Movie } from "../../types";
import { ListContext } from "../../context/ListContext";

type ControlProps = {
  type: string;
  movie: Movie;
};
function MovieControls({ type, movie }: ControlProps) {
  const watched = () => {
    console.log("you watched this movie");
  };

  const like = () => {
    console.log("you like this movie");
  };
  return (
    <div className="inner-card-controls">
      <button
        className="rounded py-2 px-4 text-white hover:border-transparent hover:text-slate-400"
        onClick={watched}
        title="Remove from watchlist"
      >
        <i className="material-icons">visibility</i>
      </button>

      <button
        className="rounded py-2 px-4 text-white hover:border-transparent hover:text-slate-400"
        onClick={like}
        title="Add to watched"
      >
        <i className="material-icons">sentiment_very_satisfied</i>
      </button>
      <button
        className="rounded py-2 px-4 text-white hover:border-transparent hover:text-slate-400"
        onClick={like}
        title="Add to watched"
      >
        <i className="material-icons">more_horiz</i>
      </button>
    </div>
  );
}

export default MovieControls;
