import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const isAuthenticated = useContext(AuthContext);
  const navigate = useNavigate();

  const { username, email, password, password2 } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("error");
      return;
    } else {
      //register the user
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("checking auth");
      navigate("/account/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-slate-800 px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => onChange(e)}
              className="border-grey-light mb-4 block w-full rounded border p-3"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Email"
            />

            <input
              type="password"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Password"
            />
            <input
              type="password"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="bg-green hover:bg-green-dark my-1 w-full rounded py-3 text-center text-white focus:outline-none"
            >
              Create Account
            </button>
          </form>
        </div>

        <div className="mt-6 text-slate-50">
          Already have an account?{" "}
          <a
            className="border-blue text-blue border-b no-underline"
            href="/login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Register;
