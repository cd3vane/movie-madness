import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
// import formatDate from '../../utils/formatDate';
// import MovieReviews from '../reviews/MovieReviews';
import { Movie } from "../../types";
import formatDate from "../../utils/formatDate";
import { AuthContext } from "../../context/AuthContext";
import MovieActions from "./MovieActions";
import MovieReviews from "./MovieReviews";

// import MovieActions from './MovieActions';

const MovieDetails = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { isAuthenticated, currentUser } = useContext(AuthContext)
  
  const params = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}`;
    axios.get(url).then((response) => {
      setMovie(response.data);
      setLoading(false);
    });
  }, [params.id]);
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <Fragment>
      {movie === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/discover">Back</Link>
          <div className="movie-container movie-grid">
            <div className="w-500">
              <img className="object-contain" src={`${IMGPATH}/${movie.poster_path}`} alt="poster" />
            </div>
            <div className="movie-about">
              <h1 className="text-3xl">{movie.title}</h1>
              <h3 className="text-xl text-dark-50">{movie.tagline}</h3>
              <p>{movie.overview}</p>
            </div>
            <div className="movie-details">
              <h2 className="text-3xl">Movie Details</h2>
              {movie.vote_average !== 0 ? (
                <p>
                  Rated <i className="fa fa-star" aria-hidden="true"></i>{" "}
                  {movie.vote_average} / 10 by {movie.vote_count} users.
                </p>
              ) : (
                <p>Movie not yet rated</p>
              )}
              <p>
                Release Date:{" "}
                {movie.release_date ? (
                  <>{formatDate(movie.release_date)}</>
                ) : (
                  <>TBD</>
                )}
                <br />
                Runtime: {movie.runtime !== 0 ? <>{movie.runtime}</> : <>TBD</>}
              </p>
            </div>
            <div className="movie-genres">
              <h3 className="text-primary">Genres</h3>
              <div>
                <span>
                  {movie.genres.map((genre: any, index: number) => (
                    <div key={index}>{genre.name}</div>
                  ))}
                </span>
              </div>
            </div>
            {isAuthenticated ? (
              <Fragment>
                <MovieActions movie={movie} id={currentUser._id} />
                <div className='movie-reviews'>
                  <MovieReviews id={currentUser.id} />
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <h3>
                  <Link to='/'>Sign in</Link> or
                  <Link to='/register'> Register </Link>
                  to add this movie to a list or write a review{' '}
                </h3>
              </Fragment>
            )} 
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieDetails;
