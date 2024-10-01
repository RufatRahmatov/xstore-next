"use client";

import React from "react";
import { FaUserAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Header: React.FC = () => {
  return (
    <nav className=" text-white p-4 flex items-center justify-center ">
      <div className="text-xl font-bold relative left-[170px]">
        crypto xstore
      </div>

      <div className="relative flex-1 mx-4 ml-[200px]">
        <input
          type="text"
          placeholder="Search for Collections"
          className="p-2 pr-10 rounded-md bg-gray-800 text-white outline-none "
        />
        <IoIosSearch className="absolute left-[200px] top-1/2 transform -translate-y-1/2 text-white" />
      </div>

      <ul className="flex space-x-6 mr-[500px] ">
        {["Home", "About us", "Collections", "News", "Contacts"].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-green-400 transition-colors duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex space-x-4 items-center relative right-[200px]">
        <FaUserAlt className="hover:text-green-400 transition-colors duration-300 cursor-pointer" />
        <FaHeart className="hover:text-green-400 transition-colors duration-300 cursor-pointer" />
        <FaShoppingCart className="hover:text-green-400 transition-colors duration-300 cursor-pointer" />
      </div>

      <button className="ml-4 px-4 py-2 bg-gray-700 hover:bg-[#22BF37] transition-colors duration-300 rounded-md relative right-[180px]">
        Get Started
      </button>
    </nav>
  );
};

export default Header;
