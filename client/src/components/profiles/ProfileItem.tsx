import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

type ProfileItemProps = {
  profile: any;
};
const ProfileItem = ({
  profile: { firstName, lastName, followers, following, user, bio },
}: ProfileItemProps) => {
  const { currentUser } = useContext(AuthContext)

  const addFollower = () => {
    if(currentUser !== null){
      console.log("Following " + firstName)
      console.log("Adding " + currentUser.username + " to " + firstName + " followers")
    } else{
      console.log("you gotta be logged in to follow a user")
    }
    
  }

  return (
    <div className="border-b-4 p-6 dark:bg-gray-600 dark:text-gray-100 sm:p-12">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <img
          src={user.avatar}
          alt={user.fistName}
          className="h-24 w-24 flex-shrink-0 self-center rounded-full border dark:border-gray-700 dark:bg-gray-500 md:justify-self-start"
        />
        <div className="flex flex-col">
          <h4 className="text-center text-lg font-semibold md:text-left">
            {firstName} {lastName}
          </h4>
          <p className="dark:text-gray-400">Followers: {followers.length}</p>
          <p className="dark:text-gray-400">Following: {following.length}</p>
        </div>
      </div>
      <div className="align-center flex justify-center space-x-4 pt-4">
        {bio}
        <Link to={`/profile/${user._id}`}>View Profile</Link>
      </div>
      {user._id !== currentUser._id && 
      <div className="float-right">
        <button onClick={addFollower} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Follow</button>
      </div>}
    </div>
  );
};

export default ProfileItem;
