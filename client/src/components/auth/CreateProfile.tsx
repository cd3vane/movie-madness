import React, { Fragment, useContext, useState } from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../context/AlertContext";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });
  const { setAlert } = useContext(AlertContext);
  const [displaySocialInputs, toggleSocialInputs] = useState<boolean>(false);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createProfile(formData.firstName, formData.lastName);
    
  };

  const createProfile = async (firstName : string, lastName: string) => {
      const profileDetails = { firstName, lastName }
    try{
      console.log(api.defaults.headers)
      const res = await api.post("/profile", profileDetails);
      setAlert(
      "Successfully created your profile: " + formData.firstName,
      "success"
      )
      navigate('/account/dashboard')
    } catch(err : any){
      setAlert(
      "There was an error creating your profile " + err,
      "error"
    );
      console.log(err)
    }
   
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-slate-800 px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="firstname"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => onChange(e)}
              className="border-grey-light mb-4 block w-full rounded border p-3"
              placeholder="First Name"
            />

            <input
              type="text"
              id="lastname"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => onChange(e)}
              className="border-grey-light mb-4 block w-full rounded border p-3"
              placeholder="Last Name"
            />

            <div className="form-group">
              <textarea
                placeholder="A short bio of yourself"
                name="bio"
                value={formData.bio}
                onChange={() => onChange}
              />
              <small className="form-text">
                Tell us a little about yourself
              </small>
            </div>

            <div className="my-2">
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type="button"
                className="btn btn-light"
              >
                Toggle Social Network Links
              </button>
              <span>Optional</span>
            </div>

            {displaySocialInputs && (
              <Fragment>
                <div className="form-group social-input">
                  <i className="fab fa-twitter fa-2x" />
                  <input
                    type="text"
                    placeholder="Twitter URL"
                    name="twitter"
                    value={formData.twitter}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-facebook fa-2x" />
                  <input
                    type="text"
                    placeholder="Facebook URL"
                    name="facebook"
                    value={formData.facebook}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-youtube fa-2x" />
                  <input
                    type="text"
                    placeholder="YouTube URL"
                    name="youtube"
                    value={formData.youtube}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-linkedin fa-2x" />
                  <input
                    type="text"
                    placeholder="Linkedin URL"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-instagram fa-2x" />
                  <input
                    type="text"
                    placeholder="Instagram URL"
                    name="instagram"
                    value={formData.instagram}
                    onChange={onChange}
                  />
                </div>
              </Fragment>
            )}
            <button
              type="submit"
              id="submit"
              className="bg-green hover:bg-green-dark my-1 w-full rounded py-3 text-center text-white focus:outline-none"
            >
              Finish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
