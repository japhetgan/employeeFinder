import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="text-center my-10">
      <input
        onChange={onSearchChange}
        type="search"
        placeholder="Search Talent"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBox;
