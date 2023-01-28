import { Fragment } from "react";
import ListPreview from "./ListPreview";
import { Link } from "react-router-dom";

const ListItem = ({ list: { _id, name, movies } }: any) => {
  return (
    <div className="list-container">
      <div className="border-light-50">
        {movies.length > 0 ? (
          <div>
            <h2 className="text-2xl">
              <Link to={`/lists/${_id}`}>{name}</Link>
            </h2>

            <ListPreview movies={movies} />
          </div>
        ) : (
          <div className="border-light-50">
            <h2 className="text-3xl">{name}</h2>
            <h4 className="text-2xl">No movies in this list yet</h4>
            <div className="m-5">
              <Link
                className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                to={"/discover"}
              >
                Browse for more
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
