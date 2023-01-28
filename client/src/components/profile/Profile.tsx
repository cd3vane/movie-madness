import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileLists from "./ProfileLists";
import { api } from "../../utils/api";
import Spinner from "../layout/Spinner";
import Reviews from "../reviews/Reviews";

const Profile = () => {
  const [profileLoading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<any>([]);

  const params = useParams();
  const { isAuthenticated, loading, currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/profile/${params.id}`);
      setProfile(res.data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  return (
    <Fragment>
      {profile === null || profileLoading ? (
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
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
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
