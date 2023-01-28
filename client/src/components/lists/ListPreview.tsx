import { Link } from 'react-router-dom';
import MovieCard from '../movies/MovieCard';
import { Movie } from '../../types'

type PreviewProps = {
  movies: Movie[]
}
const ListPreview = ({ movies } : PreviewProps) => {
  const limit = 5;
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <div key={index} >
            {index < limit && (
              <Link to={`/movie-details/${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} type="movie"/>
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPreview;
