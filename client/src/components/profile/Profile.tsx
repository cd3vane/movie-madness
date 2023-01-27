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
  const { isAuthenticated, loading, user } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/profile/${params.id}`);
      setProfile(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {profileLoading === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back to profiles list
          </Link>
          
          {isAuthenticated &&
            loading === false &&
            // @ts-ignore
            user._id === params.id && (
              <Link to='/edit-profile' className='btn btn-dark'>
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
