import { Fragment } from 'react';
import ListPreview from './ListPreview';
import { Link } from 'react-router-dom';

const ListItem = ({ list: { _id, name, movies } } : any) => {
  return (
    <div className='list-container'>
      <div>
        {movies.length > 0 ? (
          <Fragment>
            <h2>
              <Link to={`/lists/${_id}`}>{name}</Link>
            </h2>

            <ListPreview movies={movies} />
          </Fragment>
        ) : (
          <Fragment>
            <h2>{name}</h2>
            <h4>No movies in this list yet</h4>
            <Link to={'/movies/1'}>Browse for more</Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ListItem;
