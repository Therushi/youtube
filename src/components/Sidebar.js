import React from "react";
import { useSelector } from "react-redux";
import { SIDEBAR } from "../utils/constant";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSideBarOpen = useSelector((store) => store.app.isOpen);

  if (!isSideBarOpen) return null;

  return (
    <div className="p-2 shadow-md h-screen bg-white">
      <ul className="cursor-pointer ">
        {SIDEBAR.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <li className="flex gap-3 items-center py-2 px-4 text-base font-normal hover:bg-gray-100 hover:rounded-md hover:shadow-md ">
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
