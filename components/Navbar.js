// components/Navbar.js
import React from "react";
import Logo from "./Logo";
import AddVideoButton from "./AddVideoButton";

const Navbar = () => (
  <nav className="navbar bg-white border-b border-gray-200 p-5 flex justify-between items-center">
    <Logo />
    <AddVideoButton />
  </nav>
);

export default Navbar;
