import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <span className="font-bold text-md sm:text-3xl text-slate-600">
            Real
          </span>
          <span className="font-bold text-md sm:text-3xl text-slate-400">
            Estate
          </span>
        </Link>
        <form action="" className="bg-slate-100 p-3 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-6 items-center">
          <Link to="/">
            <li className="hidden sm:inline  text-slate-600 hover:text-slate-500">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline  text-slate-600 hover:text-slate-500">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePhoto}
                alt="User Profile Photo"
                className="rounded-full
              h-10
              w-10
              object-cover"
              />
            ) : (
              <li className=" text-slate-600 hover:text-slate-500">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
