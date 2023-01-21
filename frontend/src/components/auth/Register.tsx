import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

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

  // // Redirect if logged in
  // if (isAuthenticated) {
  //   return redirect("/account/dashboard");
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-slate-800 px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="bg-green hover:bg-green-dark my-1 w-full rounded py-3 text-center text-white focus:outline-none"
          >
            Create Account
          </button>
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
