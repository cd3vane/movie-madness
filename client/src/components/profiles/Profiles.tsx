import { Fragment, useEffect, useState } from "react";
import ProfileItem from "./ProfileItem";
import { api } from "../../utils/api";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/profile");
      setProfiles(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {loading ? (
        "Loading.."
      ) : (
        <Fragment>
          <h1 className="text-3xl font-bold underline">Profiles</h1>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile: any) => (
                <ProfileItem key={profile.id} profile={profile} />
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
