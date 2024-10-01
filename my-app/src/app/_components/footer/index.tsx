"use client";

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <div className="text-xl font-bold mb-4">
            <span className="text-gray-400">crypto</span> <span>xstore</span>
          </div>
          <p className="mb-4">Subscribe for newsletter</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Email Address..."
              className="p-2 w-full text-black rounded-l-md"
            />
            <button className="bg-white text-black p-2 px-4 rounded-r-md hover:bg-[#22BF37]  transition-colors duration-300">
              Submit
            </button>
          </div>

          <div className="flex space-x-4 mt-4">
            <FaFacebook className="hover:text-gray-400" />
            <FaTwitter className="hover:text-gray-400" />
            <FaInstagram className="hover:text-gray-400" />
            <FaYoutube className="hover:text-gray-400" />
            <FaTelegram className="hover:text-gray-400" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 transition-colors">All NFTs</li>
            <li className="hover:text-gray-400 transition-colors">Art</li>
            <li className="hover:text-gray-400 transition-colors">
              Collectibles
            </li>
            <li className="hover:text-gray-400 transition-colors">
              Domain Names
            </li>
            <li className="hover:text-gray-400 transition-colors">Music</li>
            <li className="hover:text-gray-400 transition-colors">
              Photography
            </li>
            <li className="hover:text-gray-400 transition-colors">Sports</li>
            <li className="hover:text-gray-400 transition-colors">
              Trading Cards
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 transition-colors">
              Help Center
            </li>
            <li className="hover:text-gray-400 transition-colors">
              Platform Status
            </li>
            <li className="hover:text-gray-400 transition-colors">Partners</li>
            <li className="hover:text-gray-400 transition-colors">Taxes</li>
            <li className="hover:text-gray-400 transition-colors">Articles</li>
            <li className="hover:text-gray-400 transition-colors">Docs</li>
            <li className="hover:text-gray-400 transition-colors">
              Newsletter
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 transition-colors">About</li>
            <li className="hover:text-gray-400 transition-colors">Careers</li>
            <li className="hover:text-gray-400 transition-colors">Grants</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">My Account</h4>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 transition-colors">Profile</li>
            <li className="hover:text-gray-400 transition-colors">Favorites</li>
            <li className="hover:text-gray-400 transition-colors">Watchlist</li>
            <li className="hover:text-gray-400 transition-colors">
              My Collections
            </li>
            <li className="hover:text-gray-400 transition-colors">Settings</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-500">
          <span>
            Copyright © 2024 XStore theme. Created by 8theme – WordPress
            WooCommerce themes.
          </span>
          <div className="flex space-x-4">
            <span className="hover:text-gray-400 cursor-pointer">
              Terms Of Use
            </span>
            <span className="hover:text-gray-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gray-400 cursor-pointer">
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
