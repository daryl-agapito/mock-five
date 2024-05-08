import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
        <div className="flex gap-4">
          <Link
            to="/"
            className="hidden sm:inline text-slate-600 hover:text-slate-500"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hidden sm:inline  text-slate-600 hover:text-slate-500"
          >
            About
          </Link>

          <Link to="/sign-in" className=" text-slate-600 hover:text-slate-500">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
