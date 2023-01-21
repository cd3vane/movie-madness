import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Credentials } from "../../types";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Credentials>({
    email: "",
    password: "",
  });
  const { login, isAuthenticated } = useContext(AuthContext);

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("checking auth");
      navigate("/account/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <form onSubmit={(e) => onSubmit(e)} className="form">
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          data-popover-target="popover-password"
          data-popover-placement="bottom"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          type="password"
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
        <div
          data-popover
          id="popover-password"
          role="tooltip"
          className="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm font-light text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
        >
          <div className="space-y-2 p-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Must have at least 6 characters
            </h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
              <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
              <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
            </div>
            <p>It’s better to have:</p>
            <ul>
              <li className="mb-1 flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-400 dark:text-green-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Upper & lower case letters
              </li>
              <li className="mb-1 flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-gray-300 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                A symbol (#$&)
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-gray-300 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                A longer password (min. 12 chars.)
              </li>
            </ul>
          </div>
          <div data-popper-arrow></div>
        </div>
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        id="login-btn"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
