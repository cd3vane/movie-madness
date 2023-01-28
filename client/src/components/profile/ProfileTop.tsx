import { ProfileProps } from "../../types";

const ProfileTop = ({
  profile: { firstName, lastName, location, social, user },
}: ProfileProps) => {
  return (
    <div>
      <img
        className="h-20 w-20 rounded-full object-center"
        src={user.avatar}
        alt=""
      />
      <h1 className="text-3xl font-bold">
        {firstName} {lastName}
      </h1>
      <p className="font-medium dark:text-white">
        {location ? <span>{location}</span> : null}
      </p>
      <div className="icons my-1">
        {social ? "socials over here" : "no socials"}
      </div>
    </div>
  );
};

export default ProfileTop;
