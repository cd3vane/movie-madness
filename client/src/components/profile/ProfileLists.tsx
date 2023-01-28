import { Fragment, useEffect, useState } from "react";
import { api } from '../../utils/api'
// import { ProfileProps } from '../../types'
import ListsView from "../lists/ListsView";
import Spinner from "../layout/Spinner";

const ProfileLists = ({ profile, id }: any) => {
  const [lists, setLists] = useState([])
  useEffect(() => {
     getLists();
  }, [id])

  const getLists = async () => {
    const res = await api.get(`/lists/user/${id}`)
    setLists(res.data)
    console.log(res.data)
  }
  return (
    <Fragment>
      <h1 className="large text-primary">Featured Lists</h1>
      {lists && <ListsView lists={lists} />}
    </Fragment>
  );
};

export default ProfileLists;
