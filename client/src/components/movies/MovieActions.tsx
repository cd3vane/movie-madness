import { useState } from "react";
import MovieButtons from "./MovieButtons";

function MovieActions({ movie, id }: any) {
  const [showButtons, toggleButtons] = useState(false);
  return (
    <div className="movie-actions">
      <div
        className={
          showButtons
            ? "button-list button-list--active btn-rounded"
            : "button-list btn-rounded"
        }
      >
        <div
          onClick={(e) => toggleButtons(!showButtons)}
          className="button-list__content btn-light"
        >
          <i className="text-primary fa fa-list" aria-hidden="true"></i>
          <p className="text-primary">Toggle List Actions</p>
        </div>
        <div>
          <MovieButtons movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default MovieActions;
