import { Fragment } from 'react';
import ListItem from './ListItem';


const Lists = ({ lists } : any) => {
  return (
    <Fragment>
      <small>(Click title to view the entire list)</small>
      <br />
      {lists.length > 0 ? (
        lists.map((list : any) => <ListItem key={list._id} list={list} />)
      ) : (
        <h4>No lists yet. Have you created a profile?</h4>
      )}
    </Fragment>
  );
};


export default Lists
