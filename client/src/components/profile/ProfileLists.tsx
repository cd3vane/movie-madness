import { useLists } from '../../hooks/list'
import ListsView from "../lists/ListsView";

const ProfileLists = ({ id }: any) => {
  const { data, status } = useLists(id)
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Featured Lists</h1>
      {data && <ListsView lists={data} />}
    </div>
  );
};

export default ProfileLists;
