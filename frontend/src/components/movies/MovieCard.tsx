import { MovieCardProps } from "../../types";
import MovieControls from "./MovieControls";

function MovieCard({ movie, show, type }: MovieCardProps) {
  if (movie && type) {
    return (
      <div className="movie-card">
        <figure className="relative max-w-sm cursor-pointer filter transition-all duration-300 hover:outline-blue-400">
          <a href="#">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          </a>
          <figcaption className="absolute bottom-6 px-4 text-lg text-white">
            <p>
              <MovieControls type={type} movie={movie} />
            </p>
          </figcaption>
        </figure>
      </div>
    );
  } else if (show) {
    return (
      <figure className="relative max-w-sm cursor-pointer filter transition-all duration-300 hover:outline-blue-400">
        <a href="#">
          <img
            src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
            alt={`${show.name} Poster`}
          />
        </a>
        <figcaption className="absolute bottom-6 px-4 text-lg text-white"></figcaption>
      </figure>
    );
  } else {
    return <div>No movies or shows here</div>;
  }
}
export default MovieCard;
