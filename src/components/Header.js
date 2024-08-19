import React, { useEffect, useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { SiYoutubestudio } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/sideBarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const getSearchResult = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSearchResult(json[1]);
    };
    const timer = setTimeout(() => getSearchResult(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200 ms
   *
   * key - ip
   * - destroy the component (userEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   */

  const dispatch = useDispatch();
  const toggleSideMenu = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="grid grid-flow-col px-3 py-4 shadow-md bg-white">
      <div className="col-span-1 flex gap-8 items-center">
        <TfiAlignJustify
          className="text-xl cursor-pointer"
          onClick={() => toggleSideMenu()}
        />
        <div className="flex gap-2 text-3xl">
          <SiYoutubestudio />
          <h1 className="font-bold">Youtube</h1>
        </div>
      </div>
      <div className="col-span-10 ">
        <div className="flex gap-4 items-center">
          <input
            placeholder="Search"
            className="w-9/12 border  py-1 px-4 text-base rounded-full shadow-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="px-4 py-1 rounded-full text-white bg-black font-semibold shadow-md cursor-pointer">
            Search
          </button>
        </div>
        {showSuggestion && searchResult.length > 0 && (
          <div className="fixed bg-white p-4 w-2/4 shadow-md">
            <ul>
              {searchResult.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 text-3xl flex gap-4 items-center">
        <IoIosNotifications />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
