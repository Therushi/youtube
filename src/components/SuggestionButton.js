import React from "react";

const SuggestionButton = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-4 bg-gray-300 rounded-md shadow-md text-sm font-semibold cursor-pointer hover:bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default SuggestionButton;
