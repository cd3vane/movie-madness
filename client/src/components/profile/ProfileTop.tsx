import { ProfileProps } from '../../types'

const ProfileTop = ({
  profile: {
    firstName,
    lastName,
    location,
    social,
    user
  }
} : ProfileProps) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={user.avatar} alt='' />
      <h1 className='large'>{firstName}{" "}{lastName}</h1>
      <p>{location ? <span>{location}</span> : null}</p>
      <div className='icons my-1'>
        {social ? 'socials over here' : 'no socials'}
      </div>
    </div>
  );
};

export default ProfileTop;
