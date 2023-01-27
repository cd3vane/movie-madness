import { Fragment, useEffect, useState } from "react";
import { api } from '../../utils/api'
// import { ProfileProps } from '../../types'
import ListsView from "../lists/ListsView";
import Spinner from "../layout/Spinner";

const ProfileLists = ({ profile, id }: any) => {
  const [lists, setLists] = useState({})
  useEffect(() => {
     getLists();
  }, [])

  const getLists = async () => {
    const res = await api.get(`/lists/user/${id}`)
    console.log(res.data)
  }
  return (
    <Fragment>
      <h1 className="large text-primary">Lists</h1>
      {lists ? <Spinner /> : <ListsView lists={lists} />}
    </Fragment>
  );
};

export default ProfileLists;
