import { Fragment, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import ProfileTop from './ProfileTop';
// import ProfileAbout from './ProfileAbout';
// import ProfileLists from './ProfileLists';
import { api } from "../../utils/api";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/profile/user/63adc35933443f001653ca86");
      setProfile(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {profile === null || loading ? (
        "Loading my guy"
      ) : (
        <Fragment>
          {profile.name}
          {/* <Link to='/profiles' className='btn btn-light'>
            Back to profiles list
          </Link>
          {auth.isAuthenticated &&
            auth.userLoading === false &&
            auth.user.id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
          </div>
          <div className='lists'>
            <ProfileLists />
          </div>
          <div className='reviews'>
            <h3>Reviews</h3>
            
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
