import { Link } from 'react-router-dom';

type ProfileItemProps = {
  profile: any
}
const ProfileItem = ({ profile } : ProfileItemProps) => {
  return (
    <div className='profile-list-container'>
      <img src="/placeholder" alt='' className='round-img' />
      <div>
        <h2 className='text-primary'>{profile.name}</h2>
        <p className='my-1'>{location && <span>this a location</span>}</p>
        <Link
          to={`/profile/1`}
          className='btn btn-primary btn-rounded no-wrap'
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileItem;
