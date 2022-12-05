import React from "react";
import "./header.css";
import { FiMenu } from "react-icons/fi";
export default function Header() {
  return (
    <div className="header flex justify-between mb-10 h-16">
      <div>
        <img className=" opacity-80" src="logo.png" />
      </div>
 
      <div className=" text-5xl p-3 opacity-80">
        <FiMenu />
      </div>
    </div>
  );
}
