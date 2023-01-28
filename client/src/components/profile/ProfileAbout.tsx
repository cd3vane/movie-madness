import { ProfileProps } from '../../types'


const ProfileAbout = ({ profile: { bio, firstName} } : ProfileProps) => {
  return (
    <div className='profile-about bg-light p-2'>
      <h2 className='text-primary'>{firstName}'s Bio</h2>
      <p>{bio}</p>
      <div className='line'></div>
    </div>
  );
};


export default ProfileAbout;
