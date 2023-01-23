import { Fragment, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import ProfileTop from './ProfileTop';
// import ProfileAbout from './ProfileAbout';
// import ProfileLists from './ProfileLists';
import { api } from "../../utils/api";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/profile/user/63adc35933443f001653ca86");
      setProfile(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {profile === null || loading ? (
        "Loading my guy"
      ) : (
        <section className="relative pb-16 lg:pb-24">
          <div className="container-fluid">
            <div className="profile-banner relative text-transparent">
              <input
                id="pro-banner"
                name="profile-banner"
                type="file"
                className="hidden"
              />
              <div className="relative shrink-0">
                <img
                  src="https://image.tmdb.org/t/p/w500/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg"
                  className="h-80 w-full object-cover"
                  id="profile-banner"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <label className="absolute inset-0 cursor-pointer"></label>
              </div>
            </div>
          </div>

          <div className="container mt-16 lg:mt-24">
            <div className="md:flex">
              <div className="md:w-1/3 md:px-3 lg:w-1/4">
                <div className="relative -mt-32 md:-mt-48">
                  <div className="rounded-md bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-800">
                    <div className="profile-pic mb-5 text-center">
                      <input
                        id="pro-img"
                        name="profile-image"
                        type="file"
                        className="hidden"
                      />
                      <div>
                        <div className="relative mx-auto h-28 w-28">
                          <img
                            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                            className="rounded-full shadow ring-4 ring-slate-50 dark:shadow-gray-800 dark:ring-slate-800"
                            id="profile-image"
                            alt=""
                          />
                          <label className="absolute inset-0 cursor-pointer"></label>
                        </div>

                        <div className="mt-4">
                          <h5 className="text-lg font-semibold">
                            {profile.name}
                          </h5>
                          <p className="text-slate-400">{profile.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-700">
                      <ul
                        className="sidebar-nav mb-0 mt-3 list-none"
                        id="navmenu-nav"
                      >
                        <li className="navbar-item account-menu active">
                          <a
                            href="user-profile.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-dashboard"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">Profile</h6>
                          </a>
                        </li>

                        <li className="navbar-item account-menu">
                          <a
                            href="user-billing.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-diary-alt"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">Billing Info</h6>
                          </a>
                        </li>

                        <li className="navbar-item account-menu">
                          <a
                            href="user-payment.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-credit-card"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">Payment</h6>
                          </a>
                        </li>

                        <li className="navbar-item account-menu">
                          <a
                            href="user-invoice.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-receipt"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">Invoice</h6>
                          </a>
                        </li>

                        <li className="navbar-item account-menu">
                          <a
                            href="user-social.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-process"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">
                              Social Profile
                            </h6>
                          </a>
                        </li>

                        <li className="navbar-item account-menu">
                          <a
                            href="user-notification.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-bell"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">
                              Notifications
                            </h6>
                          </a>
                        </li>

                        <li className="navbar-item account-menu">
                          <a
                            href="user-setting.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-setting"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">Settings</h6>
                          </a>
                        </li>

                        <li className="navbar-item account-menu">
                          <a
                            href="auth-lock-screen.html"
                            className="navbar-link flex items-center rounded py-2 text-slate-400"
                          >
                            <span className="mr-2 mb-0 text-[18px]">
                              <i className="uil uil-power"></i>
                            </span>
                            <h6 className="mb-0 font-semibold">Sign Out</h6>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[30px] md:mt-0 md:w-2/3 md:px-3 lg:w-3/4">
                <div className="border-b border-gray-100 pb-6 dark:border-gray-700">
                  <h5 className="text-xl font-semibold">{profile.className}</h5>

                  <p className="mt-3 text-slate-400">{profile.bio}</p>
                </div>

                <div className="grid grid-cols-1 gap-[30px] pt-6 lg:grid-cols-2">
                  <div>
                    <h5 className="text-xl font-semibold">
                      Personal Details :
                    </h5>
                    <div className="mt-6">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-mail fea icon-ex-md mr-3 text-slate-400"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <div className="flex-1">
                          <h6 className="mb-0 font-medium text-indigo-600 dark:text-white">
                            Email :
                          </h6>
                          <a href="" className="text-slate-400">
                            jennyhot@hotmail.com
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-bookmark fea icon-ex-md mr-3 text-slate-400"
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="mb-0 font-medium text-indigo-600 dark:text-white">
                            Skills :
                          </h6>
                          <a href="" className="text-slate-400">
                            html
                          </a>
                          ,{" "}
                          <a href="" className="text-slate-400">
                            css
                          </a>
                          ,{" "}
                          <a href="" className="text-slate-400">
                            js
                          </a>
                          ,{" "}
                          <a href="" className="text-slate-400">
                            mysql
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-italic fea icon-ex-md mr-3 text-slate-400"
                        >
                          <line x1="19" y1="4" x2="10" y2="4"></line>
                          <line x1="14" y1="20" x2="5" y2="20"></line>
                          <line x1="15" y1="4" x2="9" y2="20"></line>
                        </svg>
                        <div className="flex-1">
                          <h6 className="mb-0 font-medium text-indigo-600 dark:text-white">
                            Language :
                          </h6>
                          <a href="" className="text-slate-400">
                            English
                          </a>
                          ,{" "}
                          <a href="" className="text-slate-400">
                            Japanese
                          </a>
                          ,{" "}
                          <a href="" className="text-slate-400">
                            Chinese
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-globe fea icon-ex-md mr-3 text-slate-400"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="mb-0 font-medium text-indigo-600 dark:text-white">
                            Website :
                          </h6>
                          <a href="" className="text-slate-400">
                            www.kristajoseph.com
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-gift fea icon-ex-md mr-3 text-slate-400"
                        >
                          <polyline points="20 12 20 22 4 22 4 12"></polyline>
                          <rect x="2" y="7" width="20" height="5"></rect>
                          <line x1="12" y1="22" x2="12" y2="7"></line>
                          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="mb-0 font-medium text-indigo-600 dark:text-white">
                            Birthday :
                          </h6>
                          <p className="mb-0 text-slate-400">2nd March, 1996</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-map-pin fea icon-ex-md mr-3 text-slate-400"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div className="flex-1">
                          <h6 className="mb-0 font-medium text-indigo-600 dark:text-white">
                            Location :
                          </h6>
                          <a href="" className="text-slate-400">
                            Beijing, China
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-phone fea icon-ex-md mr-3 text-slate-400"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <div className="flex-1">
                          <h6 className="mb-0 font-medium text-indigo-600 dark:text-white">
                            Cell No :
                          </h6>
                          <a href="" className="text-slate-400">
                            (+12) 1254-56-4896
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[30px] lg:mt-0">
                    <h5 className="text-xl font-semibold">Experience :</h5>

                    <div className="mt-6 flex items-center rounded-md bg-white p-4 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-gray-700">
                      <img
                        src="assets/images/client/circle-logo.png"
                        className="h-16 w-16 rounded-md bg-slate-50 p-4 shadow dark:bg-slate-800 dark:shadow-gray-800"
                        alt=""
                      />
                      <div className="content ml-4 flex-1">
                        <h4 className="text-medium text-lg">
                          Senior Web Developer
                        </h4>
                        <p className="mb-0 text-slate-400">
                          3 Years Experience
                        </p>
                        <p className="mb-0 text-slate-400">
                          <a href="" className="text-indigo-600">
                            CircleCi
                          </a>{" "}
                          @London, UK
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center rounded-md bg-white p-4 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-gray-700">
                      <img
                        src="assets/images/client/facebook-logo-2019.png"
                        className="h-16 w-16 rounded-md bg-slate-50 p-4 shadow dark:bg-slate-800 dark:shadow-gray-800"
                        alt=""
                      />
                      <div className="content ml-4 flex-1">
                        <h4 className="text-medium text-lg">Web Designer</h4>
                        <p className="mb-0 text-slate-400">
                          2 Years Experience
                        </p>
                        <p className="mb-0 text-slate-400">
                          <a href="" className="text-indigo-600">
                            Facebook
                          </a>{" "}
                          @Washington D.C, USA
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center rounded-md bg-white p-4 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-gray-700">
                      <img
                        src="assets/images/client/spotify.png"
                        className="h-16 w-16 rounded-md bg-slate-50 p-4 shadow dark:bg-slate-800 dark:shadow-gray-800"
                        alt=""
                      />
                      <div className="content ml-4 flex-1">
                        <h4 className="text-medium text-lg">UI Designer</h4>
                        <p className="mb-0 text-slate-400">
                          2 Years Experience
                        </p>
                        <p className="mb-0 text-slate-400">
                          <a href="" className="text-indigo-600">
                            Spotify
                          </a>{" "}
                          @Perth, Australia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="mt-[30px] text-xl font-semibold">Portfolio :</h5>

                <div className="mt-6 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                  <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <img
                      src="assets/images/portfolio/1.jpg"
                      className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                      alt=""
                    />
                    <div className="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                    <div className="content transition-all duration-500">
                      <div className="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="assets/images/portfolio/1.jpg"
                          className="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                        >
                          <i className="uil uil-camera"></i>
                        </a>
                      </div>

                      <div className="title absolute bottom-6 left-6 z-10 hidden group-hover:block">
                        <a
                          href="portfolio-detail-three.html"
                          className="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                        >
                          Mockup Collection
                        </a>
                        <p className="mb-0 text-slate-400">Abstract</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <img
                      src="assets/images/portfolio/2.jpg"
                      className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                      alt=""
                    />
                    <div className="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                    <div className="content transition-all duration-500">
                      <div className="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="assets/images/portfolio/2.jpg"
                          className="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                        >
                          <i className="uil uil-camera"></i>
                        </a>
                      </div>

                      <div className="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="portfolio-detail-three.html"
                          className="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                        >
                          Mockup Collection
                        </a>
                        <p className="mb-0 text-slate-400">Abstract</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <img
                      src="assets/images/portfolio/3.jpg"
                      className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                      alt=""
                    />
                    <div className="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                    <div className="content transition-all duration-500">
                      <div className="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="assets/images/portfolio/3.jpg"
                          className="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                        >
                          <i className="uil uil-camera"></i>
                        </a>
                      </div>

                      <div className="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="portfolio-detail-three.html"
                          className="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                        >
                          Mockup Collection
                        </a>
                        <p className="mb-0 text-slate-400">Abstract</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <img
                      src="assets/images/portfolio/4.jpg"
                      className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                      alt=""
                    />
                    <div className="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                    <div className="content transition-all duration-500">
                      <div className="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="assets/images/portfolio/4.jpg"
                          className="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                        >
                          <i className="uil uil-camera"></i>
                        </a>
                      </div>

                      <div className="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="portfolio-detail-three.html"
                          className="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                        >
                          Mockup Collection
                        </a>
                        <p className="mb-0 text-slate-400">Abstract</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <img
                      src="assets/images/portfolio/5.jpg"
                      className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                      alt=""
                    />
                    <div className="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                    <div className="content transition-all duration-500">
                      <div className="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="assets/images/portfolio/5.jpg"
                          className="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                        >
                          <i className="uil uil-camera"></i>
                        </a>
                      </div>

                      <div className="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="portfolio-detail-three.html"
                          className="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                        >
                          Mockup Collection
                        </a>
                        <p className="mb-0 text-slate-400">Abstract</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <img
                      src="assets/images/portfolio/6.jpg"
                      className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                      alt=""
                    />
                    <div className="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                    <div className="content transition-all duration-500">
                      <div className="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="assets/images/portfolio/6.jpg"
                          className="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                        >
                          <i className="uil uil-camera"></i>
                        </a>
                      </div>

                      <div className="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                        <a
                          href="portfolio-detail-three.html"
                          className="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                        >
                          Mockup Collection
                        </a>
                        <p className="mb-0 text-slate-400">Abstract</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Profile;
