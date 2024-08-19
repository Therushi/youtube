import React from "react";
import SuggestionButton from "./SuggestionButton";

const suggestionButtonNames = [
  "All",
  "Music",
  "Mixes",
  "Jukebox",
  "Javascript",
  "programming",
  "Freestyle Rap",
];
const MainContainerHeader = () => {
  return (
    <div className="p-4 flex gap-3 overflow-x-auto">
      {suggestionButtonNames.map((button, index) => {
        return <SuggestionButton key={index} name={button} />;
      })}
    </div>
  );
};

export default MainContainerHeader;
