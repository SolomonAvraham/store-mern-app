import React from "react";
import "./header.css";
import { FiMenu } from "react-icons/fi";
export default function Header() {
  return (
    <div className="header flex justify-between items-center p-2 mb-5 h-16">
      <div>
        <img className=" opacity-80" src="logo.png" />
      </div>
 
      <div className=" text-white text-3xl  p-2 opacity-80">
        <FiMenu />
      </div>
    </div>
  );
}
