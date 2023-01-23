import { Link } from "react-router-dom";

type ProfileItemProps = {
  profile: any;
};
const ProfileItem = ({ profile }: ProfileItemProps) => {
  return (
    <div className="border-b-4 p-6 dark:bg-gray-600 dark:text-gray-100 sm:p-12">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="h-24 w-24 flex-shrink-0 self-center rounded-full border dark:border-gray-700 dark:bg-gray-500 md:justify-self-start"
        />
        <div className="flex flex-col">
          <h4 className="text-center text-lg font-semibold md:text-left">
            {profile.name}
          </h4>
          <p className="dark:text-gray-400">{profile.bio}</p>
        </div>
      </div>
      <div className="align-center flex justify-center space-x-4 pt-4">
        <Link to="/profile/1">View Profile</Link>
      </div>
    </div>
  );
};

export default ProfileItem;
