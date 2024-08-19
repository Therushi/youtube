import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
