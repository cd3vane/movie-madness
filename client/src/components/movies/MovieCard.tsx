import { MovieCardProps } from "../../types";
import { Link } from "react-router-dom";
import MovieControls from "./MovieControls";

function MovieCard({ movie, show, type }: MovieCardProps) {
  if (movie) {
    return (
      <div className="movie-card group">
        <span className="overlay"></span>
        <Link to={`/movie/${movie.id}`}>
          <img
            className=""
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </Link>
        <MovieControls movie={movie} />
      </div>
    );
  }
  // else if (show) {
  //   return (
  //     <figure className="relative max-w-sm cursor-pointer filter transition-all duration-300 hover:outline-blue-400">
  //       <a href={`/movie/${show.id}`}>
  //         <img
  //           src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
  //           alt={`${show.name} Poster`}
  //         />
  //       </a>
  //       <figcaption className="absolute bottom-6 px-4 text-lg text-white"></figcaption>
  //     </figure>
  //   );
  // }
  else {
    return <div>No movies or shows here</div>;
  }
}
export default MovieCard;
