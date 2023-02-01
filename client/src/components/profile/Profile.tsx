import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileLists from "./ProfileLists";
import { useProfile } from "../../hooks/profile";
import Spinner from "../layout/Spinner";
import Reviews from "../reviews/Reviews";

const Profile = () => {
  const params = useParams();
  // @ts-ignore
  const { status, data, error } = useProfile(params.id);
  
  return (
    <Fragment>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <div className="h-full bg-gray-700 p-8">
          <Link
            to="/profiles"
            className=" rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Back to profiles list
          </Link>
          <div className="m-10">
            <ProfileTop profile={data} />
            <ProfileAbout profile={data} />
          </div>
          <div className="m-10">
            <ProfileLists id={params.id} />
          </div>
          <div className="m-10">
            <h3 className="text-3xl font-bold">Reviews</h3>
            <Reviews />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
