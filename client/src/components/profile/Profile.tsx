import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileLists from './ProfileLists';
import { api } from "../../utils/api";
import Spinner from "../layout/Spinner";

const Profile = () => {
  const [profileLoading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<any>([]);

  const params = useParams();
  const { isAuthenticated, loading, currentUser } = useContext(AuthContext)

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
        <div className="container">
          <Link to='/profiles' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            Back to profiles list
          </Link>
          
          {isAuthenticated &&
            loading === false &&
            // @ts-ignore
            currentUser._id === params.id && (
              <Link to='/edit-profile' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>
          <div className='lists'>
            <ProfileLists profile={profile} id={params.id} />
          </div>
          <div className='reviews'>
            <h3>Reviews</h3>
            {/* <Reviews /> */}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
