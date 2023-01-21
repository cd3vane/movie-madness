import { useEffect, useState } from "react";
import axios from "axios";
import { Show, Category } from "../../types";
import MovieCard from "./MovieCard";

function Discover() {
  const [shows, setShows] = useState<Show[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPage] = useState<number>(1);
  const [category, setCategory] = useState<Category>(Category.movie);

  useEffect(() => {
    setLoading(true);
    const url = `https://api.themoviedb.org/3/discover/${category}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${pageNumber}&include_adult=false&sort_by=popularity.desc`;
    axios.get(url).then((response) => {
      setShows(response.data.results);
      setLoading(false);
    });
  }, [category, pageNumber]);

  const switchCategory = (current: Category) => {
    if (current === Category.movie) {
      setCategory(Category.tv);
    } else {
      setCategory(Category.movie);
    }
    setPage(1);
  };

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>;
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="header">
          <h1 className="text-3xl font-bold">
            <button
              className="header-btn"
              onClick={() => switchCategory(Category.tv)}
            >
              Movies
            </button>{" "}
            |
            <button
              className="header-btn"
              onClick={() => switchCategory(Category.movie)}
            >
              TV Shows
            </button>
          </h1>
        </div>

        <div className="center-align">
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              if (pageNumber > 1) {
                setPage(pageNumber - 1);
              }
            }}
          >
            Previous
          </button>{" "}
          {pageNumber}
          <button
            className="waves-effect waves-light btn"
            onClick={() => setPage(pageNumber + 1)}
          >
            {" "}
            Next
          </button>
        </div>

        {shows ? (
          <div className="grid grid-cols-5 gap-4">
            {shows.map((show) => (
              <div key={show.id}>
                <MovieCard show={show} />
              </div>
            ))}
          </div>
        ) : (
          "No movies to show"
        )}
        <div className="center-align">
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              if (pageNumber > 1) {
                setPage(pageNumber - 1);
              }
            }}
          >
            Previous
          </button>{" "}
          {pageNumber}
          <button
            className="waves-effect waves-light btn"
            onClick={() => setPage(pageNumber + 1)}
          >
            {" "}
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Discover;
