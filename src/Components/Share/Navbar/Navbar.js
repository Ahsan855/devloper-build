import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItem = (
    <>
      <li>
        <NavLink
          className="my-2 mr-5 focus:text-white text-secondary font-semibold"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="my-2 mr-5 focus:text-white text-secondary font-semibold"
          to="/blog"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className="my-2 mr-5 focus:text-white text-secondary font-semibold"
          to="/team"
        >
          Teams
        </NavLink>
      </li>
      <li>
        <NavLink
          className="my-2 mr-5 focus:text-white text-secondary font-semibold"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className="my-2 mr-5  text-secondar focus:text-white font-semibold"
          to="/pages"
        >
          Projects
        </NavLink>
      </li>

      {user && (
        <li>
          <button
            onClick={logout}
            className="my-2 mr-5  focus:text-white text-secondary font-semibold"
          >
            Logout
          </button>
        </li>
      )}

      {!user && (
        <>
          <li>
            <NavLink
              className="my-2 mr-5 focus:text-white  text-secondary font-semibold  "
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className="my-2 mr-5 focus:text-white  text-secondary font-semibold "
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-white z-50 shadow-2xl sticky top-0 ">
      <header className="container mx-auto">
        <div className=" ">
          <div className=" max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 grid gap-x-10"
                  >
                    {menuItem}
                  </ul>
                </div>
                <Link
                  to="/"
                  className="btn btn-ghost  text-secondary text-xl uppercase"
                >
                  Devloper build
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-y-5">{menuItem}</ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
