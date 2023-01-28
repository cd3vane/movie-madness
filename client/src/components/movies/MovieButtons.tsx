import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MovieButton from './MovieButton';

const MovieButtons = ({ movie } : any) => {
  return (
    <Fragment>
      <Fragment>
        <ul className='button-list__lists'>
            <Fragment>
              <li className='button-item'>
                <Link to='/create-list'>
                  <button type='button' className='btn add-btn btn-rounded'>
                    + Create new list
                  </button>
                </Link>
              </li>
            </Fragment>
        </ul>
        <div className='button-list__footer'>
          <i className='fa fa-angle-double-down' aria-hidden='true'></i>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default MovieButtons;
