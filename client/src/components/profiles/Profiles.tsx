import { Fragment } from "react";
import ProfileItem from "./ProfileItem";
import { useProfiles } from "../../hooks/profile";

const Profiles = () => {
  const { status, data, error } = useProfiles();

  return (
    <Fragment>
      {status === "loading" ? (
        "Loading.."
      ) : status === "error" ? (
        //@ts-ignore
          <span>Error: {error.message}</span>
      ) : (
        <Fragment>
          <h1 className="text-3xl font-bold underline">Profiles</h1>
          <div className="profiles">
            {data.length > 0 ? (
              data.map((profile: any) => (
                <div key={profile._id}>
                  <ProfileItem profile={profile} />
                </div>
              ))
            ) : (
              <h4>No profiles found</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;
