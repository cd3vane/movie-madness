import { Fragment } from "react";
import ListItem from "./ListItem";

const Lists = ({ lists }: any) => {
  return (
    <div className="m-5">
      <br />
      {lists.length > 0 ? (
        lists.map((list: any) => (
          <div className="m-5">
            <ListItem key={list._id} list={list} />
          </div>
        ))
      ) : (
        <h4>No lists yet. Have you created a profile?</h4>
      )}
    </div>
  );
};

export default Lists;
